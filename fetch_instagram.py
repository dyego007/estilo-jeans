import os
import json

def generate_mock_data():
    # Cria diretórios necessários
    os.makedirs("data", exist_ok=True)
    os.makedirs(os.path.join("data", "media"), exist_ok=True)

    # 1. Mock de Posts do Catalogo (Vitrine)
    posts = [
        {
            "id": "post_1",
            "media_type": "IMAGE",
            "image_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
            "instagram_url": "https://www.instagram.com/p/C-jeans1/",
            "caption": "👖 CALÇA JEANS SKINNY DESTROYER 👖\nAquele jeans com elastano que veste perfeito e não perde a forma! Detalhes destroyed feitos à mão. \nTamanhos disponíveis: 38, 40, 42, 44, 46. \nCor: Azul Jeans Tradicional.\n🏷️ R$ 179,90",
            "price": 179.90,
            "sizes": ["38", "40", "42", "44", "46"],
            "colors": ["Azul Tradicional"]
        },
        {
            "id": "post_2",
            "media_type": "IMAGE",
            "image_url": "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800&auto=format&fit=crop&q=80",
            "instagram_url": "https://www.instagram.com/p/C-jeans2/",
            "caption": "⚡ JAQUETA JEANS OVERSIZED STREET ⚡\nEstilo puro para compor qualquer look de frio. Tecido encorpado 100% algodão, botões personalizados e bolsos utilitários frontais. \nTamanhos: P, M, G, GG. \nCor: Azul Vintage Claro.\n🏷️ R$ 249,90",
            "price": 249.90,
            "sizes": ["P", "M", "G", "GG"],
            "colors": ["Azul Vintage"]
        },
        {
            "id": "post_3",
            "media_type": "IMAGE",
            "image_url": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop&q=80",
            "instagram_url": "https://www.instagram.com/p/C-jeans3/",
            "caption": "🔥 MOLETOM CANGURU PREMIUM PRETO 🔥\nMoletom pesado com capuz ajustável e bolso canguru. Interior flanelado e toque super macio. Ideal para o dia a dia.\nTamanhos: P, M, G, GG. \nDisponível nas cores: Preto Carbono e Mescla Escuro.\n🏷️ De R$ 199,90 por R$ 159,90",
            "price": 159.90,
            "old_price": 199.90,
            "sizes": ["P", "M", "G", "GG"],
            "colors": ["Preto Carbono", "Mescla Escuro"]
        },
        {
            "id": "post_4",
            "media_type": "IMAGE",
            "image_url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
            "instagram_url": "https://www.instagram.com/p/C-jeans4/",
            "caption": "👕 CAMISETA BOXY OFF-WHITE 👕\nModelagem boxy mais quadrada e gola de 3cm (ribana canelada). Algodão fio 30.1 penteado premium 260GSM.\nTamanhos: P, M, G, GG. \nDisponível em: Off-White, Preto e Verde Militar.\n🏷️ R$ 89,90",
            "price": 89.90,
            "sizes": ["P", "M", "G", "GG"],
            "colors": ["Off-White", "Preto", "Verde Militar"]
        },
        {
            "id": "post_5",
            "media_type": "IMAGE",
            "image_url": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=80",
            "instagram_url": "https://www.instagram.com/p/C-jeans5/",
            "caption": "👖 BERMUDA CARGO CANVAS KHAKI 👖\nBermuda em sarja peletizada pesada, bolsos laterais cargo funcionais. Conforto absoluto com regulador na cintura.\nTamanhos: 38, 40, 42, 44, 46. \nCores: Khaki e Preto Street.\n🏷️ R$ 129,90",
            "price": 129.90,
            "sizes": ["38", "40", "42", "44", "46"],
            "colors": ["Khaki", "Preto Street"]
        },
        {
            "id": "post_6",
            "media_type": "IMAGE",
            "image_url": "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&auto=format&fit=crop&q=80",
            "instagram_url": "https://www.instagram.com/p/C-jeans6/",
            "caption": "👖 CALÇA JEANS CARGO JOGGER 👖\nA junção do estilo cargo com o conforto do punho de elástico jogger na barra. Regulagem em cordão na cintura.\nTamanhos: 36, 38, 40, 42, 44. \nCor: Jeans Escuro Amaciado.\n🏷️ R$ 189,90",
            "price": 189.90,
            "sizes": ["36", "38", "40", "42", "44"],
            "colors": ["Jeans Escuro"]
        },
        {
            "id": "post_7",
            "media_type": "IMAGE",
            "image_url": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
            "instagram_url": "https://www.instagram.com/p/C-jeans7/",
            "caption": "🔥 CAMISETA OVERSIZED ACID WASH 🔥\nEstilo vintage com lavagem especial estonada (acid wash). Algodão pesado com caimento streetwear incrível.\nTamanhos: P, M, G. \nCores: Cinza Acid e Terracota Estonada.\n🏷️ R$ 99,90",
            "price": 99.90,
            "sizes": ["P", "M", "G"],
            "colors": ["Cinza Acid", "Terracota Estonada"]
        },
        {
            "id": "post_8",
            "media_type": "IMAGE",
            "image_url": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&auto=format&fit=crop&q=80",
            "instagram_url": "https://www.instagram.com/p/C-jeans8/",
            "caption": "🧢 BONÉ STRAPBACK CANVAS 🧢\nBoné aba curva desestruturado, feito em lona canvas lavada com fecho em fivela de latão envelhecido.\nTamanho: Único. \nCores: Preto, Areia e Verde Oliva.\n🏷️ R$ 79,90",
            "price": 79.90,
            "sizes": ["Único"],
            "colors": ["Preto", "Areia", "Verde Oliva"]
        }
    ]

    with open("data/instagram_posts.json", "w", encoding="utf-8") as f:
        json.dump(posts, f, indent=4, ensure_ascii=False)
    with open("data/instagram_posts.js", "w", encoding="utf-8") as f:
        f.write("window.INSTAGRAM_POSTS = " + json.dumps(posts, indent=4, ensure_ascii=False) + ";")
    print("Arquivo data/instagram_posts.json e .js gerados com sucesso!")

    # 2. Mock de Stories e Destaques (Fallback)
    # Vídeos curtos otimizados da web e imagens representativas
    stories_data = {
        "active_stories": [
            {
                "id": "story_1",
                "media_type": "VIDEO",
                "media_url": "https://assets.mixkit.co/videos/preview/mixkit-man-wearing-a-cool-streetwear-outfit-43034-large.mp4",
                "product_id": "post_3",
                "caption": "⚡ DROP MOLETOM PREMIUM! Peças flaneladas ultra pesadas para o frio de Tupã. Já garante o seu pelo site!",
                "duration": 8000
            },
            {
                "id": "story_2",
                "media_type": "IMAGE",
                "media_url": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
                "product_id": "post_2",
                "caption": "🔥 Detalhes da nossa jaqueta Oversized. Caimento perfeito no corpo. Adicione ao carrinho agora!",
                "duration": 5000
            }
        ],
        "highlights": [
            {
                "id": "highlight_novidades",
                "title": "Novidades",
                "cover_url": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=150&auto=format&fit=crop&q=80",
                "stories": [
                    {
                        "id": "hl_nov_1",
                        "media_type": "IMAGE",
                        "media_url": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
                        "product_id": "post_7",
                        "caption": "🔥 Camiseta Acid Wash! Lavagem estonada vintage exclusiva.",
                        "duration": 5000
                    },
                    {
                        "id": "hl_nov_2",
                        "media_type": "VIDEO",
                        "media_url": "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-happy-in-a-street-wear-outfit-43031-large.mp4",
                        "product_id": "post_4",
                        "caption": "⚡ Conforto e caimento boxy premium. Fio 30.1 penteado.",
                        "duration": 9000
                    }
                ]
            },
            {
                "id": "highlight_jeans",
                "title": "Jeans 36-48",
                "cover_url": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=150&auto=format&fit=crop&q=80",
                "stories": [
                    {
                        "id": "hl_jeans_1",
                        "media_type": "IMAGE",
                        "media_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=80",
                        "product_id": "post_1",
                        "caption": "👖 Nosso jeans Skinny Destroyer! Super elastano e caimento insano.",
                        "duration": 5000
                    },
                    {
                        "id": "hl_jeans_2",
                        "media_type": "IMAGE",
                        "media_url": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=150&auto=format&fit=crop&q=80",
                        "product_id": "post_5",
                        "caption": "⚡ Bermuda cargo sarja peletizada pesada.",
                        "duration": 5000
                    }
                ]
            },
            {
                "id": "highlight_clientes",
                "title": "Clientes",
                "cover_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
                "stories": [
                    {
                        "id": "hl_cli_1",
                        "media_type": "IMAGE",
                        "media_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80",
                        "product_id": None,
                        "caption": "🔥 Feedback do Mano Lucas: 'Qualidade do moletom tá surreal de pesada, TMJ rapaziada!'",
                        "duration": 5000
                    },
                    {
                        "id": "hl_cli_2",
                        "media_type": "IMAGE",
                        "media_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
                        "product_id": None,
                        "caption": "🚀 Mano Diego mandando a braba com o boné strapback e a calça destroyer. Estilo jeans tupã dominando!",
                        "duration": 5000
                    }
                ]
            }
        ]
    }

    with open("data/stories.json", "w", encoding="utf-8") as f:
        json.dump(stories_data, f, indent=4, ensure_ascii=False)
    with open("data/stories.js", "w", encoding="utf-8") as f:
        f.write("window.STORIES_DATA = " + json.dumps(stories_data, indent=4, ensure_ascii=False) + ";")
    print("Arquivo data/stories.json e .js gerados com sucesso!")

if __name__ == "__main__":
    generate_mock_data()
