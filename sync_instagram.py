import os
import re
import json
from curl_cffi import requests

def sync():
    # Perfil a ser sincronizado
    username = "estilojeanstupa"
    cookie_file = "cookies.json"
    
    if not os.path.exists(cookie_file):
        print(f"\n[ERRO] O arquivo {cookie_file} não foi encontrado na pasta do projeto.")
        print("Por favor, exporte os cookies do seu navegador Chrome/Instagram para 'cookies.json' antes de continuar.")
        print("Enquanto isso, você pode rodar 'python fetch_instagram.py' para carregar dados mockados no site!")
        return

    # 1. Carrega os cookies do arquivo JSON
    cookies = {}
    try:
        with open(cookie_file, 'r', encoding='utf-8') as f:
            cookies_list = json.load(f)
        for c in cookies_list:
            if 'instagram.com' in c.get('domain', ''):
                cookies[c.get('name')] = c.get('value')
        print("Cookies carregados com sucesso do cookies.json!")
    except Exception as e:
        print(f"Erro ao ler cookies.json: {e}")
        return

    # 2. Faz a requisição ao feed do Instagram com paginação
    url = f"https://www.instagram.com/api/v1/feed/user/{username}/username/"
    headers = {
        "Accept": "*/*",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-IG-App-ID": "936619743392459",
        "X-Requested-With": "XMLHttpRequest",
        "Referer": f"https://www.instagram.com/{username}/"
    }

    try:
        print(f"Buscando as novidades do perfil @{username} via API do Instagram...")
        items = []
        max_id = None
        
        # Pagina até 8 vezes para recuperar cerca de 96 posts
        for page in range(8):
            query_url = url
            if max_id:
                query_url += f"?max_id={max_id}"
                
            print(f"Buscando página {page+1} do feed...")
            response = requests.get(query_url, headers=headers, cookies=cookies, impersonate="chrome", timeout=15)
            
            if response.status_code != 200:
                print(f"Erro ao obter a página {page+1} do feed: Status HTTP {response.status_code}")
                break
                
            data = response.json()
            page_items = data.get('items', [])
            items.extend(page_items)
            print(f"  Página {page+1} carregada. +{len(page_items)} posts recuperados.")
            
            more_available = data.get('more_available', False)
            max_id = data.get('next_max_id')
            
            if not more_available or not max_id:
                break
                
        print(f"Sincronização iniciada! Total de posts recuperados no Instagram: {len(items)}")
        
        if not items:
            print("Nenhum post retornado no feed. O Instagram pode ter bloqueado temporariamente as postagens.")
            return

        # --- BAIXAR LOGO DO PERFIL ---
        media_dir = os.path.join("data", "media")
        os.makedirs(media_dir, exist_ok=True)
        
        # Pega as informações do usuário a partir do primeiro post
        user_info = items[0].get('user', {})
        logo_url = user_info.get('profile_pic_url')
        
        if logo_url:
            print("Baixando logo oficial do perfil do Instagram...")
            try:
                logo_response = requests.get(logo_url, impersonate="chrome", timeout=15)
                if logo_response.status_code == 200:
                    with open(os.path.join(media_dir, "logo.jpg"), 'wb') as logo_file:
                        logo_file.write(logo_response.content)
                    print("Logo salvo com sucesso em data/media/logo.jpg!")
            except Exception as e:
                print(f"Não foi possível baixar o logo: {e}")

        posts_data = []
        count = 0
        
        # Limpa imagens antigas de posts (mantém o logo.jpg)
        for file in os.listdir(media_dir):
            if file.endswith(".jpg") and file != "logo.jpg":
                try:
                    os.remove(os.path.join(media_dir, file))
                except:
                    pass

        # Processa todas as publicações do feed (fotos e Reels)
        for item in items:
            code = item.get('code')
            print(f"Processando post {count+1}/{len(items)} (Código: {code})...")
            
            image_candidates = item.get('image_versions2', {}).get('candidates', [])
            if not image_candidates:
                continue
                
            img_url = image_candidates[0].get('url')
            
            # Baixa a imagem
            local_filename = f"post_{code}.jpg"
            local_path = os.path.join(media_dir, local_filename)
            
            try:
                img_response = requests.get(img_url, impersonate="chrome", timeout=15)
                if img_response.status_code == 200:
                    with open(local_path, 'wb') as img_file:
                        img_file.write(img_response.content)
                    local_image_url = f"data/media/{local_filename}"
                else:
                    local_image_url = img_url
            except Exception as download_error:
                print(f"  Erro ao baixar imagem: {download_error}. Usando URL externa.")
                local_image_url = img_url

            # Detecta se é vídeo / Reels
            is_video = (item.get('media_type') == 2) or bool(item.get('video_versions'))
            video_url = None
            if is_video:
                vv = item.get('video_versions', [])
                if vv:
                    video_url = vv[0].get('url')
                print(f"  [REELS/VÍDEO DETECTADO] URL do Vídeo recuperada.")

            # Legenda
            caption = item.get('caption', {}).get('text', '') if item.get('caption') else ''
            
            # --- PARSE INTELIGENTE DA LEGENDA ---
            price = 159.90 # Preço padrão
            old_price = None
            
            # Procura formato promocional: de R$ XX por R$ YY ou de XX por YY
            promo_match = re.search(r'(?:de|de:)\s*R\$\s*(\d+[\d.,]*)\s*por\s*R\$\s*(\d+[\d.,]*)', caption, re.IGNORECASE)
            if not promo_match:
                promo_match = re.search(r'\bde\s+(\d+[\d.,]*)\s+por\s+(\d+[\d.,]*)\b', caption, re.IGNORECASE)
                
            if promo_match:
                try:
                    old_price_str = promo_match.group(1).replace('.', '').replace(',', '.')
                    price_str = promo_match.group(2).replace('.', '').replace(',', '.')
                    old_price = float(old_price_str)
                    price = float(price_str)
                    print(f"  [PROMOÇÃO DETECTADA] De: R$ {old_price} Por: R$ {price}")
                except Exception as promo_err:
                    print(f"  Erro ao converter preços da promoção: {promo_err}")
                    old_price = None
                    price = 159.90
            else:
                # Busca preço único padrão (ex: R$ 150,00)
                price_match = re.search(r'R\$\s*(\d+[\d.,]*)', caption)
                if price_match:
                    try:
                        price_str = price_match.group(1).replace('.', '').replace(',', '.')
                        price = float(price_str)
                    except:
                        pass
                    
            # Parse de tamanhos masculinos (numéricos e letras)
            sizes = ["P", "M", "G"]
            found_sizes = []
            
            # Letras
            for s in ["P", "M", "G", "GG", "EGG", "Único"]:
                if re.search(r'\b' + s + r'\b', caption, re.IGNORECASE):
                    found_sizes.append(s)
            
            # Números (Jeans 36 a 48)
            for n in ["36", "38", "40", "42", "44", "46", "48"]:
                if re.search(r'\b' + n + r'\b', caption):
                    found_sizes.append(n)
                    
            if found_sizes:
                sizes = found_sizes
                
            colors = ["Padrão"]
            color_match = re.search(r'(?:cores|dispon[ií]vel em|dispon[ií]vel nas cores|cor)\s*:\s*([^\n]+)', caption, re.IGNORECASE)
            if color_match:
                colors_list = [c.strip() for c in re.split(r',|e|/|;', color_match.group(1)) if c.strip()]
                colors_list = [re.sub(r'[^\w\s-]', '', c).strip() for c in colors_list]
                colors_list = [c for c in colors_list if c]
                if colors_list:
                    colors = colors_list[:4]
            
            # Detecta se está esgotado/indisponível
            sold_out = False
            sold_out_keywords = ["esgotado", "esgotada", "vendido", "vendida", "sem estoque", "indisponivel", "indisponível"]
            for kw in sold_out_keywords:
                if re.search(r'\b' + kw + r'\b', caption.lower()) or f"#{kw}" in caption.lower():
                    sold_out = True
                    break

            # Filtro de posts que não são roupas (comunicados, sorteios, logos, etc.)
            ignore_keywords = [
                "sorteio", "foto oficial", "regulamento", "comunicado", "informativo", 
                "aviso", "fechado", "recesso", "natal", "ano novo", "réveillon", 
                "revelion", "vaga", "contrata", "ganhador", "resultado", "feriado",
                "logo", "logotipo", "marca", "inauguração", "inauguracao", "atenção", "atencao",
                "parceria", "breve", "aguardem", "novidade a caminho"
            ]
            
            should_ignore = False
            for kw in ignore_keywords:
                if kw in caption.lower() or f"#{kw}" in caption.lower():
                    should_ignore = True
                    break
                    
            # Limpa assinaturas da loja para evitar falsos positivos com a palavra 'jeans'
            store_signatures = [
                "estilo jeans tupã", "estilo jeans tupa", "estilo jeans", 
                "estilojeanstupa", "estilojeans", "@estilojeanstupa", "@estilojeans1",
                "#estilojeans", "#estilojeanstupa"
            ]
            
            caption_filter = caption.lower()
            for sig in store_signatures:
                caption_filter = caption_filter.replace(sig, "")
            
            # Remove pontuações extras
            caption_filter = re.sub(r'[^\w\s]', ' ', caption_filter)
            
            clothing_keywords = [
                "jeans", "calça", "bermuda", "moletom", "camiseta", "jaqueta", "boné", 
                "tshirt", "t-shirt", "look", "veste", "tamanho", "disponível", "estoque", 
                "peça", "sarja", "roupa", "streetwear", "casaco", "hoodie", "shorts", 
                "tamanhos", "valores", "valor", "preço", "polo", "básica", "linho", "regata",
                "blusa", "blaser", "vestido", "short", "tenis", "tênis", "casal", "namorados",
                "moleton", "cortavento", "corta-vento", "calçado", "bonés", "camisetas", "calças",
                "provador", "novidades", "news", "combinação", "opções", "conjunto", "manga", "kit",
                "over", "oversize", "oversized", "canguru", "jaquetas", "moletons", "regatas", "polos"
            ]
            
            has_clothing_keyword = any(kw in caption_filter for kw in clothing_keywords)
            has_size = len(found_sizes) > 0
            has_price = (price_match is not None) or (promo_match is not None)
            
            # Ignora posts sem legenda relevante
            is_empty_caption = not caption_filter.strip()
            
            # Se tiver palavra de ignorar OU (não tiver palavra de roupa E não tiver tamanho E não tiver preço) OU legenda vazia
            if should_ignore or (not has_clothing_keyword and not has_size and not has_price) or is_empty_caption:
                print(f"  [IGNORADO] Post {code} ignorado por não parecer um produto de vestuário.")
                continue

            posts_data.append({
                "id": code,
                "media_type": "VIDEO" if is_video else "IMAGE",
                "image_url": local_image_url,
                "video_url": video_url,
                "instagram_url": f"https://www.instagram.com/p/{code}/",
                "caption": caption or "Estilo Jeans Tupã",
                "price": price,
                "old_price": old_price,
                "sizes": sizes,
                "colors": colors,
                "sold_out": sold_out
            })
            
            count += 1
                
        # Salva o arquivo JSON e JS de Posts
        with open("data/instagram_posts.json", "w", encoding="utf-8") as f:
            json.dump(posts_data, f, indent=4, ensure_ascii=False)
            
        with open("data/instagram_posts.js", "w", encoding="utf-8") as f:
            f.write("window.INSTAGRAM_POSTS = " + json.dumps(posts_data, indent=4, ensure_ascii=False) + ";")

        # --- BUSCAR STORIES REAIS ---
        active_stories = []
        user_id = user_info.get('pk')
        
        if user_id:
            try:
                print(f"Buscando stories ativos para o ID {user_id} (@estilojeanstupa)...")
                stories_url = f"https://i.instagram.com/api/v1/feed/reels_media/?reel_ids={user_id}"
                stories_response = requests.get(stories_url, headers=headers, cookies=cookies, impersonate="chrome", timeout=15)
                
                if stories_response.status_code == 200:
                    stories_json = stories_response.json()
                    reels = stories_json.get('reels', {})
                    user_reel = reels.get(str(user_id), {})
                    story_items = user_reel.get('items', [])
                    
                    print(f"  Encontrados {len(story_items)} stories ativos no Instagram!")
                    
                    for idx, s_item in enumerate(story_items):
                        s_id = s_item.get('code') or s_item.get('id')
                        s_media_type = s_item.get('media_type') # 1 = Image, 2 = Video
                        
                        # Extrai imagem
                        s_img_url = ""
                        candidates = s_item.get('image_versions2', {}).get('candidates', [])
                        if candidates:
                            s_img_url = candidates[0].get('url')
                            
                        # Extrai vídeo
                        s_video_url = None
                        if s_media_type == 2:
                            video_versions = s_item.get('video_versions', [])
                            if video_versions:
                                s_video_url = video_versions[0].get('url')
                                
                        # Legenda
                        caption_text = ""
                        caption_obj = s_item.get('caption')
                        if caption_obj:
                            caption_text = caption_obj.get('text', '')
                        else:
                            caption_text = f"Novidades Estilo Jeans #{idx+1}"
                            
                        active_stories.append({
                            "id": s_id,
                            "media_type": "VIDEO" if s_media_type == 2 else "IMAGE",
                            "media_url": s_video_url if s_media_type == 2 else s_img_url,
                            "video_url": s_video_url,
                            "product_id": None, # stories reais
                            "caption": caption_text,
                            "duration": int(s_item.get('video_duration', 10)) * 1000 if s_media_type == 2 else 6000
                        })
                else:
                    print(f"  Erro ao obter stories: Status HTTP {stories_response.status_code}")
            except Exception as stories_err:
                print(f"  Erro durante a busca de stories: {stories_err}")

        # Salva o arquivo JSON e JS de Stories (sem destaques redundantes)
        stories_output = {
            "active_stories": active_stories,
            "highlights": []
        }
        
        with open("data/stories.json", "w", encoding="utf-8") as f:
            json.dump(stories_output, f, indent=4, ensure_ascii=False)
            
        with open("data/stories.js", "w", encoding="utf-8") as f:
            f.write("window.STORIES_DATA = " + json.dumps(stories_output, indent=4, ensure_ascii=False) + ";")
            
        print("\n===========================================")
        print("Sincronização do catálogo e stories concluída!")
        print(f"Total de {count} posts e {len(active_stories)} stories reais baixados.")
        print("Os arquivos na pasta data/ foram atualizados com sucesso.")
        print("===========================================\n")

    except Exception as e:
        print(f"Erro geral durante a sincronização: {e}")

if __name__ == "__main__":
    sync()
