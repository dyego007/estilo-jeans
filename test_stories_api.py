import os
import json
from curl_cffi import requests

def test():
    username = "estilojeanstupa"
    cookie_file = "cookies.json"
    
    cookies = {}
    with open(cookie_file, 'r', encoding='utf-8') as f:
        cookies_list = json.load(f)
    for c in cookies_list:
        if 'instagram.com' in c.get('domain', ''):
            cookies[c.get('name')] = c.get('value')

    headers = {
        "Accept": "*/*",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        "X-IG-App-ID": "936619743392459",
        "X-Requested-With": "XMLHttpRequest",
        "Referer": f"https://www.instagram.com/{username}/"
    }

    user_id = 23910726682
    ep = f"https://i.instagram.com/api/v1/feed/reels_media/?reel_ids={user_id}"
    res = requests.get(ep, headers=headers, cookies=cookies, impersonate="chrome", timeout=15)
    if res.status_code == 200:
        data = res.json()
        reels = data.get('reels', {})
        user_reel = reels.get(str(user_id), {})
        items = user_reel.get('items', [])
        print(f"Total de stories encontrados: {len(items)}")
        if items:
            first_item = items[0]
            print("\nChaves de um item de story:")
            print(list(first_item.keys()))
            
            # Checa se é imagem ou vídeo e as URLs correspondentes
            media_type = first_item.get('media_type') # 1 = imagem, 2 = vídeo
            print(f"media_type: {media_type}")
            
            # Imagem
            candidates = first_item.get('image_versions2', {}).get('candidates', [])
            if candidates:
                print("URL da imagem do story:", candidates[0].get('url')[:100])
                
            # Vídeo
            video_versions = first_item.get('video_versions', [])
            if video_versions:
                print("URL do vídeo do story:", video_versions[0].get('url')[:100])
                
            # Legenda / Caption
            # Stories geralmente não têm caption tradicional, mas podem ter texto de sticker ou overlay, 
            # ou a legenda inserida na API. Vamos ver:
            print("caption:", first_item.get('caption'))
            
            # Verifica se há stickers ou links (Instagram story link stickers)
            story_link_stickers = first_item.get('story_link_stickers')
            if story_link_stickers:
                print("Link stickers encontrados!")
                for sticker in story_link_stickers:
                    link_info = sticker.get('story_link', {})
                    print("URL do link no story:", link_info.get('url'))
                    print("Texto do link:", link_info.get('display_url'))

if __name__ == "__main__":
    test()
