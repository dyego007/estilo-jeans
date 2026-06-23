// Configuração do Catálogo Estilo Jeans Tupã
const CONFIG = {
    localJsonPath: "data/instagram_posts.json",
    storiesJsonPath: "data/stories.json"
};

// Dados Mockados Integrados (Fallback se carregado via file:// sem servidor web)
const FALLBACK_PRODUCTS = [
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
];

const FALLBACK_STORIES = {
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
                    "product_id": null,
                    "caption": "🔥 Feedback do Mano Lucas: 'Qualidade do moletom tá surreal de pesada, TMJ rapaziada!'",
                    "duration": 5000
                },
                {
                    "id": "hl_cli_2",
                    "media_type": "IMAGE",
                    "media_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
                    "product_id": null,
                    "caption": "🚀 Mano Diego mandando a braba com o boné strapback e a calça destroyer. Estilo jeans tupã dominando!",
                    "duration": 5000
                }
            ]
        }
    ]
};

// Estados Globais
let cart = [];
let products = [];
let storiesData = { active_stories: [], highlights: [] };

// Estados do Visualizador de Stories
let sessionStories = []; // Stories ativos na sessão de visualização
let currentStoryGroup = ""; // 'active' ou ID do destaque
let currentStoryIndex = 0;
let storyTimeout = null;
let storyProgressInterval = null;
let storyAudioMuted = true; // Iniciado como mudo por regras de Autoplay
let storyPaused = false;
let storyStartTime = 0;
let storyElapsedTime = 0;
let storyDuration = 5000; // Duração padrão

// Função de animação da tela de Splash de entrada (Estética Limpa Premium)
function runSplashScreen() {
    const splash = document.getElementById("splash-screen");
    const progress = document.getElementById("splash-progress");
    if (!splash) return;
    
    // Anima a barra de progresso para 100%
    setTimeout(() => {
        if (progress) {
            progress.style.transition = "width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            progress.style.width = "100%";
        }
    }, 100);
    
    // Revela o site após 1.8 segundos de exibição
    setTimeout(() => {
        splash.classList.add("splash-hidden");
        
        // Revela o site com slide-up e fade-in suave
        const header = document.getElementById("site-header");
        const main = document.getElementById("site-main");
        if (header) {
            header.classList.remove("opacity-0", "translate-y-6");
        }
        if (main) {
            main.classList.remove("opacity-0", "translate-y-6");
        }
        
        // Remove do fluxo do DOM após a transição de fade-out (800ms)
        setTimeout(() => {
            splash.style.display = "none";
        }, 800);
    }, 1800);
}


// Inicialização da Página
document.addEventListener("DOMContentLoaded", () => {
    // Inicia a animação da tela de splash de entrada
    runSplashScreen();
    
    // Carrega carrinho salvo do localStorage
    const savedCart = localStorage.getItem("estilo_jeans_cart");
    if (savedCart) {
        try {
            cart = jsonParse(savedCart) || [];
            updateCartBadge();
            renderCart();
        } catch (e) {
            cart = [];
        }
    }
    
    // Carrega o catálogo e stories com um pequeno delay simulado para exibir o Skeleton Loader premium
    setTimeout(loadAppContents, 1000);
    
    setupEventListeners();
});

// Helper de segurança para JSON.parse
function jsonParse(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return null;
    }
}

// Configura os escutadores de eventos da interface
function setupEventListeners() {
    // Busca de looks
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            filterProducts();
        });
    }

    // Filtros de tamanho
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active", "bg-jeansNeon", "text-jeansDark"));
            filterButtons.forEach(b => b.classList.add("bg-jeansSlate", "text-slate-400"));
            
            btn.classList.add("active", "bg-jeansNeon", "text-jeansDark");
            btn.classList.remove("bg-jeansSlate", "text-slate-400");
            
            filterProducts();
        });
    });

    // Abrir/Fechar Carrinho
    const cartTrigger = document.getElementById("cart-trigger");
    const cartClose = document.getElementById("cart-close");
    const cartOverlay = document.getElementById("cart-overlay");
    
    if (cartTrigger) cartTrigger.addEventListener("click", openCart);
    if (cartClose) cartClose.addEventListener("click", closeCart);
    if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

    // Enviar pedido no WhatsApp
    const cartSubmit = document.getElementById("cart-submit");
    if (cartSubmit) {
        cartSubmit.addEventListener("click", submitOrder);
    }

    // Eventos do Modal de Stories
    const storiesCloseBtn = document.getElementById("stories-close");
    const storyMuteBtn = document.getElementById("story-mute-btn");
    const touchLeft = document.getElementById("story-touch-left");
    const touchRight = document.getElementById("story-touch-right");

    if (storiesCloseBtn) storiesCloseBtn.addEventListener("click", closeStoriesViewer);
    if (storyMuteBtn) storyMuteBtn.addEventListener("click", toggleStoryMute);
    if (touchLeft) touchLeft.addEventListener("click", prevStory);
    if (touchRight) touchRight.addEventListener("click", nextStory);

    // Pausar stories ao segurar a tela (efeito Instagram)
    const mediaContainer = document.getElementById("story-media-container");
    if (mediaContainer) {
        mediaContainer.addEventListener("mousedown", pauseStory);
        mediaContainer.addEventListener("mouseup", resumeStory);
        mediaContainer.addEventListener("touchstart", (e) => { e.preventDefault(); pauseStory(); });
        mediaContainer.addEventListener("touchend", resumeStory);
    }

    // Ações do botão de compra no Story
    const storyBuyBtn = document.getElementById("story-buy-btn");
    if (storyBuyBtn) {
        storyBuyBtn.addEventListener("click", addStoryProductToCart);
    }
}

// Carrega os arquivos JSON e popula a tela
async function loadAppContents() {
    let loadedProducts = false;
    let loadedStories = false;

    try {
        // Carrega produtos do catálogo
        const productsResponse = await fetch(CONFIG.localJsonPath);
        if (productsResponse.ok) {
            products = await productsResponse.json();
            loadedProducts = true;
        }
    } catch (err) {
        console.warn("Falha no fetch dos produtos (normal se acessado via file:// protocol). Usando fallback integrado.");
    }
    
    try {
        // Carrega stories e destaques
        const storiesResponse = await fetch(CONFIG.storiesJsonPath);
        if (storiesResponse.ok) {
            storiesData = await storiesResponse.json();
            loadedStories = true;
        }
    } catch (err) {
        console.warn("Falha no fetch dos stories (normal se acessado via file:// protocol). Usando fallback integrado.");
    }
    
    // Caso falhe o fetch (protocolo file:// ou CORS), tenta usar dados carregados via tag script (CORS-safe)
    if (!loadedProducts || products.length === 0) {
        if (window.INSTAGRAM_POSTS && window.INSTAGRAM_POSTS.length > 0) {
            products = window.INSTAGRAM_POSTS;
            loadedProducts = true;
        } else {
            products = FALLBACK_PRODUCTS;
        }
    }
    if (!loadedStories || (!storiesData.active_stories.length && !storiesData.highlights.length)) {
        if (window.STORIES_DATA && (window.STORIES_DATA.active_stories || window.STORIES_DATA.highlights)) {
            storiesData = window.STORIES_DATA;
            loadedStories = true;
        } else {
            storiesData = FALLBACK_STORIES;
        }
    }
    
    // -- POPULA STORIES COM CONTEÚDO REAL DO INSTAGRAM --
    // Se não houver stories ativos reais na conta (storiesData.active_stories está vazio), 
    // usamos os 6 posts mais recentes do feed como um fallback elegante.
    if (!storiesData.active_stories || storiesData.active_stories.length === 0) {
        if (products && products.length > 0) {
            storiesData.active_stories = products.slice(0, 6).map((p) => ({
                id: `active_story_${p.id}`,
                media_type: "IMAGE",
                media_url: p.image_url,
                product_id: p.id,
                caption: p.caption,
                duration: 6000
            }));
        }
    }
    
    // Remove os Destaques (Highlights) do app.js conforme solicitado
    storiesData.highlights = [];
    
    // Remove os skeleton loaders
    hideSkeletons();
    
    // Renderiza os componentes
    renderStoriesBar();
    filterProducts(); // renderiza catálogo filtrado
    renderReels();
}

// Oculta os placeholders de carregamento
function hideSkeletons() {
    const storySkeletons = document.querySelectorAll(".story-skeleton");
    const postSkeletons = document.querySelectorAll(".post-skeleton");
    
    storySkeletons.forEach(s => s.style.display = "none");
    postSkeletons.forEach(p => p.style.display = "none");
}

// Renderiza a barra horizontal de Stories no topo
function renderStoriesBar() {
    const container = document.getElementById("stories-container");
    if (!container) return;
    
    // Limpa conteúdo (removendo skeletons restantes)
    container.innerHTML = "";
    
    let hasContent = false;
    
    // 1. Stories Ativos (Novidades do dia)
    if (storiesData.active_stories && storiesData.active_stories.length > 0) {
        hasContent = true;
        const activeGroup = document.createElement("div");
        activeGroup.className = "story-item flex flex-col items-center gap-1.5 select-none shrink-0 snap-start cursor-pointer";
        activeGroup.onclick = () => openStoriesViewer("active", 0);
        
        activeGroup.innerHTML = `
            <div class="story-ring-active p-[2.5px] rounded-full">
                <div class="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full overflow-hidden border-2 border-jeansDark">
                    <img src="data/media/logo.jpg" alt="Logo Estilo Jeans" class="w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=150&q=80';">
                </div>
            </div>
            <span class="text-[10px] sm:text-xs font-bold text-white tracking-wide">Novidades</span>
        `;
        container.appendChild(activeGroup);
    }
    
    // (Destaques removidos para simplificação visual e foco apenas nos Stories)
    
    // 3. Fallback absoluto se a loja não tiver posts nem stories no JSON
    if (!hasContent) {
        container.innerHTML = `
            <div class="story-item flex flex-col items-center gap-1.5 select-none shrink-0 snap-start">
                <div class="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full overflow-hidden border border-slate-800 bg-slate-900 flex items-center justify-center text-slate-500">
                    <i class="fas fa-store text-xl"></i>
                </div>
                <span class="text-[10px] sm:text-xs font-semibold text-slate-400">Estilo Jeans</span>
            </div>
        `;
    }
}

// Renderiza o grid de produtos baseado nos filtros
function renderCatalog(items) {
    const feedContainer = document.getElementById("product-feed");
    if (!feedContainer) return;
    
    // Remove skeletons e produtos antigos
    feedContainer.innerHTML = "";
    
    if (items.length === 0) {
        feedContainer.innerHTML = `
            <div class="col-span-full text-center py-16">
                <i class="fas fa-search text-3xl text-slate-700 mb-3"></i>
                <p class="text-slate-400 text-sm font-medium">Nenhum look de streetwear encontrado com esses critérios.</p>
            </div>
        `;
        return;
    }
    
    items.forEach(product => {
        const title = getCleanTitle(product.caption);
        const hasPromo = product.old_price && product.old_price > product.price;
        
        // Tags e badge de promoção
        const promoBadgeHTML = hasPromo 
            ? `<span class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-red-600 text-[9px] font-extrabold text-white uppercase tracking-wider shadow-md z-10 animate-pulse">Promo</span>` 
            : "";
            
        const priceHTML = hasPromo
            ? `<div class="flex items-baseline gap-1.5 flex-wrap">
                    <span class="text-[10px] sm:text-xs text-slate-500 line-through">R$ ${product.old_price.toFixed(2).replace('.', ',')}</span>
                    <span class="text-xs sm:text-base font-extrabold text-jeansNeon">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
               </div>`
            : `<span class="text-xs sm:text-base font-extrabold text-jeansNeon">R$ ${product.price.toFixed(2).replace('.', ',')}</span>`;

        // Tamanhos
        let sizeOptionsHTML = "";
        product.sizes.forEach((size, idx) => {
            const inputId = `size-${product.id}-${size}`;
            sizeOptionsHTML += `
                <div class="size-selector">
                    <input type="radio" name="size-${product.id}" id="${inputId}" value="${size}" ${idx === 0 ? 'checked' : ''} class="hidden">
                    <label for="${inputId}" class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold flex items-center justify-center text-slate-300 cursor-pointer hover:border-slate-600 hover:text-white transition uppercase">${size}</label>
                </div>
            `;
        });

        // Cores
        let colorOptionsHTML = "";
        if (product.colors && product.colors.length > 0) {
            product.colors.forEach((color, idx) => {
                const inputId = `color-${product.id}-${color.replace(/\s+/g, '-')}`;
                colorOptionsHTML += `
                    <div class="color-selector">
                        <input type="radio" name="color-${product.id}" id="${inputId}" value="${color}" ${idx === 0 ? 'checked' : ''} class="hidden">
                        <label for="${inputId}" class="px-2 py-1 rounded-lg bg-slate-950 border border-slate-850 text-[9px] font-semibold text-slate-400 flex items-center justify-center cursor-pointer hover:border-slate-650 transition">${color}</label>
                    </div>
                `;
            });
        }

        const isSoldOut = product.sold_out === true;
        const cardClass = isSoldOut 
            ? "bg-jeansSlate/25 border border-slate-950 rounded-3xl overflow-hidden p-3 flex flex-col gap-3 shadow-md relative opacity-50 filter grayscale-[50%]" 
            : "bg-jeansSlate/40 border border-slate-900 rounded-3xl overflow-hidden p-3 flex flex-col gap-3 shadow-md card-hover-effect relative";

        const badgeHTML = isSoldOut 
            ? `<span class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-800 text-[9px] font-extrabold text-slate-400 uppercase tracking-wider shadow-md z-10">Esgotado</span>` 
            : promoBadgeHTML;

        const buttonHTML = isSoldOut 
            ? `<button disabled class="w-full py-3 bg-slate-900 text-slate-500 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 mt-2 cursor-not-allowed border border-slate-950">
                    <i class="fas fa-ban"></i> Esgotado
               </button>`
            : `<button onclick="addProductFromGrid('${product.id}')" class="w-full py-3 bg-jeansBlue hover:bg-blue-700 text-white rounded-xl text-xs font-bold tracking-wider uppercase transition shadow-md flex items-center justify-center gap-1.5 border border-transparent mt-2 hover:border-jeansNeon">
                    <i class="fas fa-shopping-bag"></i> Adicionar
               </button>`;

        const card = document.createElement("div");
        card.className = cardClass;
        
        card.innerHTML = `
            <!-- Badge Promo ou Esgotado -->
            ${badgeHTML}
            
            <!-- Imagem do Look -->
            <div onclick="openProductModal('${product.id}')" class="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 relative group cursor-pointer">
                <img src="${product.image_url}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
                <a href="${product.instagram_url}" target="_blank" onclick="event.stopPropagation();" class="absolute top-3 right-3 w-8 h-8 rounded-xl bg-black/60 backdrop-blur-md flex items-center justify-center text-white text-xs hover:bg-jeansNeon hover:text-jeansDark transition" title="Ver post no Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            
            <!-- Detalhes do Produto -->
            <div class="flex flex-col gap-1.5 flex-grow">
                <h4 class="font-bold text-xs sm:text-sm text-white line-clamp-1">${title}</h4>
                <div class="flex items-center justify-between mt-auto">
                    ${priceHTML}
                </div>
                
                <!-- Tamanhos -->
                <div class="mt-2 space-y-1.5">
                    <span class="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Selecione o Tamanho:</span>
                    <div class="flex flex-wrap gap-1.5">
                        ${sizeOptionsHTML}
                    </div>
                </div>
                
                <!-- Cores (Se houver) -->
                ${colorOptionsHTML ? `
                <div class="mt-2 space-y-1.5">
                    <span class="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Cores Disponíveis:</span>
                    <div class="flex flex-wrap gap-1">
                        ${colorOptionsHTML}
                    </div>
                </div>` : ''}
            </div>
            
            <!-- Botão de Compra -->
            ${buttonHTML}
        `;
        
        feedContainer.appendChild(card);
    });
}

// Renderiza os vídeos do Reels
function renderReels() {
    const carousel = document.getElementById("reels-carousel");
    if (!carousel) return;
    
    // Filtra produtos que são vídeo/reels
    const videoProducts = products.filter(p => p.media_type === "VIDEO");
    
    if (videoProducts.length === 0) {
        // Oculta a seção de Reels se não houver vídeos
        const reelsSection = document.getElementById("reels-section");
        if (reelsSection) reelsSection.style.display = "none";
        return;
    }
    
    carousel.innerHTML = "";
    
    videoProducts.forEach(product => {
        const title = getCleanTitle(product.caption);
        const card = document.createElement("div");
        card.className = "reels-card bg-jeansSlate/40 border border-slate-900 rounded-3xl overflow-hidden p-3 flex flex-col gap-3 shadow-lg snap-start";
        
        card.innerHTML = `
            <div class="w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black relative group cursor-pointer" onclick="openStoriesViewer('reels_direct', '${product.id}')">
                <video src="${product.video_url || ''}" poster="${product.image_url}" class="w-full h-full object-cover opacity-80" muted playsinline></video>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                    <div class="w-12 h-12 rounded-full bg-jeansNeon/90 text-jeansDark flex items-center justify-center play-pulse shadow-lg">
                        <i class="fas fa-play text-sm ml-0.5"></i>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <h4 class="font-bold text-xs text-white line-clamp-1">${title}</h4>
                <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold text-jeansNeon uppercase tracking-wider">Provador</span>
                    <button onclick="openStoriesViewer('reels_direct', '${product.id}')" class="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-wider flex items-center gap-1 transition">
                        Ver Vídeo <i class="fas fa-chevron-right text-[8px]"></i>
                    </button>
                </div>
            </div>
        `;
        carousel.appendChild(card);
    });
}

// Filtra produtos com base na busca e nos botões de filtro
function filterProducts() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const activeFilterBtn = document.querySelector(".filter-btn.active");
    const sizeFilter = activeFilterBtn ? activeFilterBtn.getAttribute("data-size") : "ALL";
    
    const filtered = products.filter(product => {
        // Exibe apenas fotos/imagens no catálogo principal (vídeos vão para o Reels)
        if (product.media_type !== "IMAGE") return false;
        
        const title = getCleanTitle(product.caption).toLowerCase();
        const caption = product.caption.toLowerCase();
        const matchesQuery = title.includes(query) || caption.includes(query);
        
        let matchesSize = true;
        if (sizeFilter !== "ALL") {
            // Verifica se o tamanho selecionado está na lista de tamanhos do produto
            matchesSize = product.sizes && product.sizes.some(s => s.toUpperCase() === sizeFilter.toUpperCase());
        }
        
        return matchesQuery && matchesSize;
    });
    
    renderCatalog(filtered);
}

// Extrai o título limpo da legenda
function getCleanTitle(caption) {
    if (!caption) return "Estilo Jeans Tupã";
    const firstLine = caption.split("\n")[0];
    return firstLine.replace(/[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, "").trim();
}

// --- SISTEMA DE STORIES ---

// Abre o player de Stories em tela cheia
function openStoriesViewer(groupId, initialIndexOrProductId) {
    sessionStories = [];
    currentStoryGroup = groupId;
    
    // Configura o conjunto de stories conforme o grupo clicado
    if (groupId === "active") {
        sessionStories = storiesData.active_stories || [];
        document.getElementById("story-type-label").innerText = "Novidades de Hoje";
    } else if (groupId === "reels_direct") {
        // Caso venha do Reels, monta uma lista especial contendo apenas o Reels focado
        const targetProduct = products.find(p => p.id === initialIndexOrProductId);
        if (targetProduct) {
            sessionStories = [{
                id: `reel_${targetProduct.id}`,
                media_type: "VIDEO",
                media_url: targetProduct.video_url || targetProduct.image_url,
                product_id: targetProduct.id,
                caption: targetProduct.caption,
                duration: 15000 // duração máxima Reels padrão
            }];
        }
        document.getElementById("story-type-label").innerText = "Provador";
        currentStoryIndex = 0;
    } else {
        // Destaques específicos
        const highlight = storiesData.highlights.find(h => h.id === groupId);
        if (highlight) {
            sessionStories = highlight.stories || [];
            document.getElementById("story-type-label").innerText = highlight.title;
        }
    }
    
    if (sessionStories.length === 0) return;
    
    // Resolve índice inicial (caso venha por productId)
    if (groupId !== "reels_direct" && typeof initialIndexOrProductId === "string") {
        const foundIdx = sessionStories.findIndex(s => s.product_id === initialIndexOrProductId);
        currentStoryIndex = foundIdx !== -1 ? foundIdx : 0;
    } else if (typeof initialIndexOrProductId === "number") {
        currentStoryIndex = initialIndexOrProductId;
    } else if (groupId !== "reels_direct") {
        currentStoryIndex = 0;
    }
    
    // Exibe o modal
    const viewer = document.getElementById("stories-viewer");
    viewer.classList.remove("hidden");
    document.body.classList.add("cart-open"); // Trava a rolagem da página
    
    loadStorySlide(currentStoryIndex);
}

// Carrega o slide de Story do índice atual
function loadStorySlide(index) {
    // Limpa timers antigos
    clearStoryTimers();
    
    if (index < 0 || index >= sessionStories.length) {
        closeStoriesViewer();
        return;
    }
    
    currentStoryIndex = index;
    storyElapsedTime = 0;
    storyPaused = false;
    
    const story = sessionStories[currentStoryIndex];
    storyDuration = story.duration || 5000;
    
    // Renderiza as barrinhas de progresso no topo
    renderStoryProgressIndicators();
    
    // Media Container
    const mediaContainer = document.getElementById("story-media-container");
    mediaContainer.innerHTML = "";
    
    // Legenda
    const captionEl = document.getElementById("story-caption");
    captionEl.innerHTML = story.caption || "";
    
    // Configura o botão de compra associado ao post (verificando estoque)
    const buyBtn = document.getElementById("story-buy-btn");
    const isVideo = story.media_type === "VIDEO";
    
    if (isVideo) {
        // Vídeos (Reels / Provadores) mostram botão para tirar dúvidas no WhatsApp
        buyBtn.style.display = "flex";
        buyBtn.disabled = false;
        buyBtn.innerHTML = `<i class="fab fa-whatsapp"></i> Tirar Dúvidas no WhatsApp`;
        buyBtn.className = "flex-grow py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 border border-transparent shadow-lg shadow-green-600/30 btn-glow";
        buyBtn.setAttribute("data-product-id", story.product_id || "whatsapp_geral");
        buyBtn.setAttribute("data-action", "whatsapp_provador");
    } else if (story.product_id) {
        const product = products.find(p => p.id === story.product_id);
        if (product) {
            buyBtn.style.display = "flex";
            if (product.sold_out) {
                buyBtn.innerHTML = `<i class="fas fa-ban"></i> Esgotado / Indisponível`;
                buyBtn.disabled = true;
                buyBtn.className = "flex-grow py-3 px-4 bg-slate-800 text-slate-500 font-bold rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-not-allowed border border-slate-900";
            } else {
                buyBtn.disabled = false;
                buyBtn.innerHTML = `<i class="fas fa-shopping-bag"></i> Comprar Look <span class="ml-1 opacity-90 font-extrabold">| R$ ${product.price.toFixed(2).replace('.', ',')}</span>`;
                buyBtn.className = "flex-grow py-3 px-4 bg-jeansNeon hover:bg-cyan-500 text-jeansDark font-bold rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 border border-transparent shadow-lg shadow-jeansNeon/30 btn-glow";
            }
            buyBtn.setAttribute("data-product-id", product.id);
        } else {
            buyBtn.style.display = "flex";
            buyBtn.disabled = false;
            buyBtn.innerHTML = `<i class="fas fa-shopping-bag"></i> Comprar Look`;
            buyBtn.className = "flex-grow py-3 px-4 bg-jeansNeon hover:bg-cyan-500 text-jeansDark font-bold rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 border border-transparent shadow-lg shadow-jeansNeon/30 btn-glow";
            buyBtn.setAttribute("data-product-id", "");
        }
        buyBtn.setAttribute("data-action", "cart");
    } else {
        // CTA fallback
        buyBtn.style.display = "flex";
        buyBtn.disabled = false;
        buyBtn.innerHTML = `<i class="fab fa-whatsapp"></i> Falar no WhatsApp`;
        buyBtn.className = "flex-grow py-3 px-4 bg-jeansNeon hover:bg-cyan-500 text-jeansDark font-bold rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 border border-transparent shadow-lg shadow-jeansNeon/30 btn-glow";
        buyBtn.setAttribute("data-product-id", "whatsapp_geral");
        buyBtn.setAttribute("data-action", "whatsapp_geral");
    }
    
    // Injeta Imagem ou Vídeo
    // Injeta Imagem ou Vídeo
    if (story.media_type === "VIDEO") {
        const video = document.createElement("video");
        video.muted = storyAudioMuted;
        video.playsInline = true;
        video.autoplay = true;
        video.className = "w-full h-full object-cover";
        
        // Exibe loader
        const loader = document.createElement("div");
        loader.className = "absolute inset-0 flex items-center justify-center text-white/50";
        loader.innerHTML = `<div class="animate-spin rounded-full h-10 w-10 border-2 border-t-transparent border-white"></div>`;
        mediaContainer.appendChild(loader);
        
        let loaded = false;
        const onVideoLoad = () => {
            if (loaded) return;
            loaded = true;
            if (loader) loader.style.display = "none";
            startStoryProgressBar();
        };

        video.onloadeddata = onVideoLoad;
        
        video.onplay = () => {
            if (video.duration && !isNaN(video.duration)) {
                storyDuration = video.duration * 1000;
                renderStoryProgressIndicators(); // refaz indicadores com a duração correta
            }
        };
        
        video.onended = () => {
            nextStory();
        };
        
        video.onerror = () => {
            if (loaded) return;
            loaded = true;
            if (loader) loader.style.display = "none";
            startStoryProgressBar(); // mesmo se falhar, pula após o timer padrão
        };
        
        // Atribui a origem após configurar listeners para evitar race condition
        video.src = story.media_url;
        mediaContainer.appendChild(video);
        
        // Verificação de segurança caso o vídeo já esteja pronto (cache)
        if (video.readyState >= 2) {
            onVideoLoad();
        }
        
        // Exibe o controle de volume
        document.getElementById("story-mute-btn").style.display = "flex";
        updateStoryMuteIcon();
    } else {
        // Imagem
        const img = document.createElement("img");
        img.className = "w-full h-full object-cover";
        
        const loader = document.createElement("div");
        loader.className = "absolute inset-0 flex items-center justify-center text-white/50";
        loader.innerHTML = `<div class="animate-spin rounded-full h-10 w-10 border-2 border-t-transparent border-white"></div>`;
        mediaContainer.appendChild(loader);
        
        let loaded = false;
        const onImageLoad = () => {
            if (loaded) return;
            loaded = true;
            if (loader) loader.style.display = "none";
            startStoryProgressBar();
        };

        img.onload = onImageLoad;
        
        img.onerror = () => {
            if (loaded) return;
            loaded = true;
            if (loader) loader.style.display = "none";
            startStoryProgressBar();
        };
        
        // Atribui a origem após configurar listeners para evitar race condition
        img.src = story.media_url;
        mediaContainer.appendChild(img);
        
        // Verificação de segurança caso a imagem já esteja pronta (cache)
        if (img.complete) {
            onImageLoad();
        }
        
        // Esconde botão de mudo para imagem
        document.getElementById("story-mute-btn").style.display = "none";
    }
}

// Cria os indicadores de progresso no topo do Player de Stories
function renderStoryProgressIndicators() {
    const progressContainer = document.getElementById("story-progress-container");
    if (!progressContainer) return;
    
    progressContainer.innerHTML = "";
    
    sessionStories.forEach((s, idx) => {
        const barWrapper = document.createElement("div");
        barWrapper.className = "flex-grow bg-white/30 rounded-full h-full overflow-hidden relative";
        
        const barFill = document.createElement("div");
        barFill.className = "progress-bar-fill rounded-full";
        barFill.id = `story-progress-bar-${idx}`;
        
        // Define estados completos ou vazios iniciais
        if (idx < currentStoryIndex) {
            barFill.classList.add("progress-bar-filled");
        } else if (idx > currentStoryIndex) {
            barFill.classList.add("progress-bar-unfilled");
        }
        
        barWrapper.appendChild(barFill);
        progressContainer.appendChild(barWrapper);
    });
}

// Anima a barra de progresso do Story ativo
function startStoryProgressBar() {
    const bar = document.getElementById(`story-progress-bar-${currentStoryIndex}`);
    if (!bar) return;
    
    // Inicia controle de tempo preciso
    storyStartTime = Date.now() - storyElapsedTime;
    storyPaused = false;
    
    // Atualiza a cada 50ms
    const intervalTime = 50;
    
    // Garante remoção de transição prévia para controle manual
    bar.style.transition = "none";
    
    storyProgressInterval = setInterval(() => {
        if (storyPaused) return;
        
        storyElapsedTime = Date.now() - storyStartTime;
        let percentage = (storyElapsedTime / storyDuration) * 100;
        
        if (percentage >= 100) {
            percentage = 100;
            clearInterval(storyProgressInterval);
            nextStory();
        }
        
        bar.style.width = `${percentage}%`;
    }, intervalTime);
}

// Avança para o próximo Story
function nextStory() {
    if (currentStoryIndex + 1 < sessionStories.length) {
        loadStorySlide(currentStoryIndex + 1);
    } else {
        closeStoriesViewer();
    }
}

// Volta para o Story anterior
function prevStory() {
    if (currentStoryIndex - 1 >= 0) {
        loadStorySlide(currentStoryIndex - 1);
    } else {
        // Se for o primeiro, reinicia o story
        loadStorySlide(0);
    }
}

// Pausa a execução temporariamente (quando o usuário pressiona a tela)
function pauseStory() {
    storyPaused = true;
    
    // Pausa o vídeo caso esteja reproduzindo
    const video = document.querySelector("#story-media-container video");
    if (video) {
        video.pause();
    }
}

// Retoma a execução após pausar
function resumeStory() {
    if (!storyPaused) return;
    
    storyPaused = false;
    storyStartTime = Date.now() - storyElapsedTime; // ajusta timestamp
    
    const video = document.querySelector("#story-media-container video");
    if (video) {
        video.play().catch(e => {});
    }
}

// Limpa temporizadores e callbacks
function clearStoryTimers() {
    if (storyTimeout) clearTimeout(storyTimeout);
    if (storyProgressInterval) clearInterval(storyProgressInterval);
    storyTimeout = null;
    storyProgressInterval = null;
}

// Fecha o modal de Stories
function closeStoriesViewer() {
    clearStoryTimers();
    
    const viewer = document.getElementById("stories-viewer");
    viewer.classList.add("hidden");
    document.body.classList.remove("cart-open");
    
    // Pausa qualquer vídeo tocando
    const video = document.querySelector("#story-media-container video");
    if (video) {
        video.pause();
    }
}

// Alterna mudo/som dos Stories
function toggleStoryMute() {
    storyAudioMuted = !storyAudioMuted;
    
    const video = document.querySelector("#story-media-container video");
    if (video) {
        video.muted = storyAudioMuted;
    }
    
    updateStoryMuteIcon();
}

// Atualiza o ícone do botão de volume
function updateStoryMuteIcon() {
    const icon = document.querySelector("#story-mute-btn i");
    if (!icon) return;
    
    if (storyAudioMuted) {
        icon.className = "fas fa-volume-mute";
        document.getElementById("story-mute-btn").title = "Ativar Som";
    } else {
        icon.className = "fas fa-volume-up";
        document.getElementById("story-mute-btn").title = "Mutar Som";
    }
}

// Adiciona o produto do story ativo ao carrinho ou abre WhatsApp para provador
function addStoryProductToCart() {
    const buyBtn = document.getElementById("story-buy-btn");
    const productId = buyBtn.getAttribute("data-product-id");
    const action = buyBtn.getAttribute("data-action");
    
    if (!productId) return;
    
    if (action === "whatsapp_provador") {
        pauseStory();
        const product = products.find(p => p.id === productId);
        const codeText = product ? ` (Código: ${product.id})` : "";
        const urlText = product ? `\nLink do Instagram: https://www.instagram.com/p/${product.id}/` : "";
        const message = `Olá! Vi o vídeo de provador${codeText} no site da loja e gostaria de tirar uma dúvida sobre as roupas dele!${urlText}`;
        window.open(`https://wa.me/5514996463686?text=${encodeURIComponent(message)}`, "_blank");
        return;
    }
    
    if (productId === "whatsapp_geral" || action === "whatsapp_geral") {
        // Caso não tenha produto específico, envia para o WhatsApp geral da loja
        window.open("https://wa.me/5514996463686?text=Ol%C3%A1%2C%20vi%20o%20story%20no%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida!", "_blank");
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Pausa o story para que o usuário possa interagir com o carrinho
    pauseStory();
    
    // Adiciona com tamanho padrão (primeiro disponível)
    const size = product.sizes[0] || "M";
    const color = product.colors ? (product.colors[0] || "Única") : "Única";
    
    addToCart(product.id, size, color, 1);
    
    // Abre a gaveta de carrinho
    openCart();
}

// --- GERENCIAMENTO DE CARRINHO ---

// Adiciona um item do catálogo geral ao carrinho
function addProductFromGrid(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Obtém tamanho e cor selecionados no card correspondente
    const sizeInput = document.querySelector(`input[name="size-${productId}"]:checked`);
    const size = sizeInput ? sizeInput.value : (product.sizes[0] || "M");
    
    const colorInput = document.querySelector(`input[name="color-${productId}"]:checked`);
    const color = colorInput ? colorInput.value : (product.colors ? (product.colors[0] || "Padrão") : "Padrão");
    
    addToCart(productId, size, color, 1);
    
    // Abre carrinho
    openCart();
}

// Função base de inserção no estado do carrinho
function addToCart(productId, size, color, qty = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Verifica se já existe produto idêntico com mesmo tamanho e cor
    const existingIndex = cart.findIndex(item => item.id === productId && item.size === size && item.color === color);
    
    if (existingIndex !== -1) {
        cart[existingIndex].qty += qty;
    } else {
        cart.push({
            id: product.id,
            name: getCleanTitle(product.caption),
            price: product.price,
            image_url: product.image_url,
            size: size,
            color: color,
            qty: qty
        });
    }
    
    // Salva no localStorage
    localStorage.setItem("estilo_jeans_cart", JSON.stringify(cart));
    
    // Atualiza badges e carrinho visual
    updateCartBadge();
    renderCart();
    
    // Aciona micro-interação: pulsação neon do carrinho no header
    triggerCartMicroInteraction();
    
    // Exibe notificação Toast animada com brilho neon
    showToast(product, size, color);
}

// Atualiza a bolinha indicadora de quantidade no carrinho
function updateCartBadge() {
    const badge = document.getElementById("cart-badge");
    if (!badge) return;
    
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    
    if (totalQty > 0) {
        badge.innerText = totalQty;
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }
}

// Aciona a pulsação neon do botão do carrinho no header
function triggerCartMicroInteraction() {
    const cartBtn = document.getElementById("cart-trigger");
    if (!cartBtn) return;
    
    // Remove classe se já estiver rodando para reiniciar a animação
    cartBtn.classList.remove("cart-pulsing");
    
    // Força reflow do navegador
    void cartBtn.offsetWidth;
    
    // Adiciona classe de animação
    cartBtn.classList.add("cart-pulsing");
    
    // Limpa classe após finalizar a animação
    setTimeout(() => {
        cartBtn.classList.remove("cart-pulsing");
    }, 1200);
}

// Abre o menu lateral de carrinho
function openCart() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    
    // Garante que o conteúdo visual do carrinho esteja sempre sincronizado antes de abrir
    renderCart();
    
    if (drawer && overlay) {
        overlay.classList.remove("hidden");
        // Pequeno delay para a transição suave de opacidade
        setTimeout(() => {
            overlay.classList.add("opacity-100");
        }, 10);
        
        drawer.classList.remove("translate-x-full");
        document.body.classList.add("cart-open");
    }
}

// Fecha o menu lateral de carrinho
function closeCart() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    
    if (drawer && overlay) {
        drawer.classList.add("translate-x-full");
        overlay.classList.remove("opacity-100");
        
        setTimeout(() => {
            overlay.classList.add("hidden");
        }, 300);
        
        document.body.classList.remove("cart-open");
    }
    
    // Se fechou com story ativo, retoma a reprodução do story
    if (!document.getElementById("stories-viewer").classList.contains("hidden")) {
        resumeStory();
    }
}

// Modifica quantidade de um item no carrinho
function updateItemQty(index, delta) {
    if (index < 0 || index >= cart.length) return;
    
    cart[index].qty += delta;
    
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    
    localStorage.setItem("estilo_jeans_cart", JSON.stringify(cart));
    updateCartBadge();
    renderCart();
}

// Remove item do carrinho
function removeItem(index) {
    if (index < 0 || index >= cart.length) return;
    
    cart.splice(index, 1);
    
    localStorage.setItem("estilo_jeans_cart", JSON.stringify(cart));
    updateCartBadge();
    renderCart();
}

// Permite alterar o tamanho do item diretamente na gaveta de carrinho
function updateItemSize(index, newSize) {
    if (index < 0 || index >= cart.length) return;
    cart[index].size = newSize;
    localStorage.setItem("estilo_jeans_cart", JSON.stringify(cart));
    renderCart();
}

// Renderiza a lista de itens e o subtotal na gaveta
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const subtotalEl = document.getElementById("cart-subtotal");
    const formSection = document.getElementById("cart-form-section");
    
    if (!cartItemsContainer || !subtotalEl) return;
    
    cartItemsContainer.innerHTML = "";
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-12 space-y-3">
                <div class="text-slate-600 text-4xl"><i class="fas fa-shopping-bag"></i></div>
                <p class="text-slate-400 text-sm">Seu pedido está vazio.</p>
                <button onclick="closeCart()" class="text-xs text-jeansNeon font-bold uppercase hover:underline">Voltar às compras</button>
            </div>
        `;
        subtotalEl.innerText = "R$ 0,00";
        if (formSection) formSection.classList.add("hidden");
        return;
    }
    
    // Mostra o formulário de finalização se houver itens
    if (formSection) formSection.classList.remove("hidden");
    
    let subtotal = 0;
    
    cart.forEach((item, idx) => {
        subtotal += item.price * item.qty;
        
        // Encontra o produto original para obter tamanhos adicionais para o seletor da gaveta
        const originalProduct = products.find(p => p.id === item.id);
        let sizeSelectorHTML = "";
        
        if (originalProduct && originalProduct.sizes && originalProduct.sizes.length > 1) {
            sizeSelectorHTML += `<select onchange="updateItemSize(${idx}, this.value)" class="bg-slate-900 border border-slate-800 rounded px-1 py-0.5 text-[10px] text-slate-300 font-bold focus:outline-none focus:border-jeansNeon mt-1">`;
            originalProduct.sizes.forEach(s => {
                sizeSelectorHTML += `<option value="${s}" ${s === item.size ? 'selected' : ''}>Tam: ${s}</option>`;
            });
            sizeSelectorHTML += `</select>`;
        } else {
            sizeSelectorHTML = `<span class="text-[10px] font-bold text-slate-500 uppercase">Tam: ${item.size}</span>`;
        }
        
        const itemRow = document.createElement("div");
        itemRow.className = "flex gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-850 relative group";
        
        itemRow.innerHTML = `
            <div class="w-14 h-18 rounded-xl overflow-hidden bg-slate-950 shrink-0">
                <img src="${item.image_url}" alt="${item.name}" class="w-full h-full object-cover">
            </div>
            
            <div class="flex-grow flex flex-col justify-between">
                <div>
                    <h5 class="text-xs font-bold text-white line-clamp-1 pr-6">${item.name}</h5>
                    <div class="flex flex-wrap items-center gap-2 mt-0.5">
                        ${sizeSelectorHTML}
                        <span class="text-[9px] font-semibold text-slate-400">Cor: ${item.color}</span>
                    </div>
                </div>
                
                <div class="flex items-center justify-between mt-2">
                    <!-- Controle de Qtd -->
                    <div class="flex items-center border border-slate-800 rounded-lg bg-slate-950 overflow-hidden">
                        <button onclick="updateItemQty(${idx}, -1)" class="w-6 h-6 flex items-center justify-center text-slate-400 hover:bg-slate-900 transition text-xs">-</button>
                        <span class="px-2 text-xs font-bold text-white">${item.qty}</span>
                        <button onclick="updateItemQty(${idx}, 1)" class="w-6 h-6 flex items-center justify-center text-slate-400 hover:bg-slate-900 transition text-xs">+</button>
                    </div>
                    
                    <span class="text-xs font-extrabold text-jeansNeon">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</span>
                </div>
            </div>
            
            <!-- Botão de Excluir -->
            <button onclick="removeItem(${idx})" class="absolute top-3 right-3 text-slate-500 hover:text-red-500 text-xs transition" title="Remover item">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItemsContainer.appendChild(itemRow);
    });
    
    subtotalEl.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
}

// Cria a string e redireciona para o WhatsApp da Loja
function submitOrder() {
    if (cart.length === 0) return;
    
    const clientName = document.getElementById("client-name").value.trim();
    const clientPhone = document.getElementById("client-phone").value.trim();
    
    if (!clientName || !clientPhone) {
        alert("Por favor, preencha seu nome e WhatsApp para prosseguir com a retirada.");
        return;
    }
    
    // Formata mensagem para WhatsApp
    let message = `*NOVO PEDIDO - ESTILO JEANS TUPÃ*\n`;
    message += `--------------------------------------\n`;
    message += `👤 *Cliente:* ${clientName}\n`;
    message += `📞 *WhatsApp:* ${clientPhone}\n\n`;
    message += `🛒 *Itens do Pedido:*\n`;
    
    let subtotal = 0;
    cart.forEach((item, idx) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        message += `${idx + 1}. *${item.name}*\n`;
        message += `   └ Tamanho: ${item.size} | Cor: ${item.color}\n`;
        message += `   └ Qtd: ${item.qty}x | R$ ${item.price.toFixed(2).replace('.', ',')} (Total: R$ ${itemTotal.toFixed(2).replace('.', ',')})\n\n`;
    });
    
    message += `--------------------------------------\n`;
    message += `💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n\n`;
    message += `⚡ _Este pedido foi gerado no site e as peças foram solicitadas para separação e retirada na loja física._`;
    
    // Telefone da loja (exemplo: estilojeanstupa)
    const storeWhatsApp = "5514996463686";
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${storeWhatsApp}?text=${encodedText}`;
    
    // Limpa carrinho após finalizar
    cart = [];
    localStorage.removeItem("estilo_jeans_cart");
    updateCartBadge();
    renderCart();
    closeCart();
    
    // Abre no WhatsApp
    window.open(whatsappUrl, "_blank");
}

// Exibe notificação Toast premium na tela ao adicionar produto
function showToast(product, size, color) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    
    // Cria elemento do Toast
    const toast = document.createElement("div");
    toast.className = "toast-notification flex items-center gap-3";
    
    // Nome limpo do produto
    const title = getCleanTitle(product.caption);
    
    toast.innerHTML = `
        <div class="w-10 h-10 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
            <img src="${product.image_url}" alt="${title}" class="w-full h-full object-cover">
        </div>
        <div class="flex-grow min-w-0">
            <h5 class="text-xs font-bold text-white tracking-wide truncate">Adicionado ao Carrinho!</h5>
            <p class="text-[10px] text-slate-400 truncate">${title} (Tam: ${size})</p>
        </div>
        <div class="w-6 h-6 rounded-full bg-jeansNeon/10 flex items-center justify-center text-jeansNeon shrink-0 border border-jeansNeon/25">
            <i class="fas fa-check text-[10px]"></i>
        </div>
    `;
    
    // Adiciona ao container
    container.appendChild(toast);
    
    // Força reflow do DOM para animar
    void toast.offsetWidth;
    toast.classList.add("toast-show");
    
    // Configura o fechamento automático
    setTimeout(() => {
        toast.classList.remove("toast-show");
        toast.classList.add("toast-hide");
        
        // Remove do DOM após a animação de saída de 400ms
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3000);
}

// --- MODAL DE DETALHES DO PRODUTO (POP-UP) ---

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Preenche imagem do produto (Desktop e Mobile)
    const imgEl = document.getElementById("modal-product-img");
    if (imgEl) {
        imgEl.src = product.image_url;
        imgEl.alt = getCleanTitle(product.caption);
    }
    const imgMobileEl = document.getElementById("modal-product-img-mobile");
    if (imgMobileEl) {
        imgMobileEl.src = product.image_url;
        imgMobileEl.alt = getCleanTitle(product.caption);
    }
    
    // Link do post do Instagram (Desktop e Mobile)
    const instaLink = document.getElementById("modal-product-instagram");
    if (instaLink) instaLink.href = product.instagram_url;
    
    const instaMobileLink = document.getElementById("modal-product-instagram-mobile");
    if (instaMobileLink) instaMobileLink.href = product.instagram_url;
    
    // Título do Produto (Desktop e Mobile)
    const titleEl = document.getElementById("modal-product-title");
    if (titleEl) titleEl.innerText = getCleanTitle(product.caption);
    
    const titleMobileEl = document.getElementById("modal-product-title-mobile");
    if (titleMobileEl) titleMobileEl.innerText = getCleanTitle(product.caption);
    
    // Preço do Produto com Promoção se houver (Desktop e Mobile)
    const priceEl = document.getElementById("modal-product-price");
    const hasPromo = product.old_price && product.old_price > product.price;
    let priceHTML = "";
    if (hasPromo) {
        priceHTML = `
            <span class="text-xs sm:text-sm text-slate-500 line-through">De R$ ${product.old_price.toFixed(2).replace('.', ',')}</span>
            <span class="text-lg sm:text-xl font-extrabold text-jeansNeon">Por R$ ${product.price.toFixed(2).replace('.', ',')}</span>
        `;
    } else {
        priceHTML = `
            <span class="text-lg sm:text-xl font-extrabold text-jeansNeon">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
        `;
    }
    if (priceEl) priceEl.innerHTML = priceHTML;
    
    const priceMobileEl = document.getElementById("modal-product-price-mobile");
    if (priceMobileEl) priceMobileEl.innerHTML = priceHTML;
    
    // Descrição / Legenda completa
    const descEl = document.getElementById("modal-product-desc");
    descEl.innerText = product.caption || "";
    
    // Tamanhos
    let sizeOptionsHTML = "";
    product.sizes.forEach((size, idx) => {
        const inputId = `modal-size-${size}`;
        sizeOptionsHTML += `
            <div class="size-selector">
                <input type="radio" name="modal-size" id="${inputId}" value="${size}" ${idx === 0 ? 'checked' : ''} class="hidden">
                <label for="${inputId}" class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold flex items-center justify-center text-slate-300 cursor-pointer hover:border-slate-650 hover:text-white transition uppercase">${size}</label>
            </div>
        `;
    });
    document.getElementById("modal-product-sizes").innerHTML = sizeOptionsHTML;
    
    // Cores (se houver)
    const colorsContainer = document.getElementById("modal-product-colors-container");
    const colorsDiv = document.getElementById("modal-product-colors");
    if (product.colors && product.colors.length > 0) {
        colorsContainer.classList.remove("hidden");
        let colorOptionsHTML = "";
        product.colors.forEach((color, idx) => {
            const inputId = `modal-color-${color.replace(/\s+/g, '-')}`;
            colorOptionsHTML += `
                <div class="color-selector">
                    <input type="radio" name="modal-color" id="${inputId}" value="${color}" ${idx === 0 ? 'checked' : ''} class="hidden">
                    <label for="${inputId}" class="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-850 text-xs font-semibold text-slate-400 flex items-center justify-center cursor-pointer hover:border-slate-650 transition">${color}</label>
                </div>
            `;
        });
        colorsDiv.innerHTML = colorOptionsHTML;
    } else {
        colorsContainer.classList.add("hidden");
        colorsDiv.innerHTML = "";
    }
    
    // Botão de Compra / Esgotado
    const addBtn = document.getElementById("modal-product-add-btn");
    if (product.sold_out === true) {
        addBtn.disabled = true;
        addBtn.innerHTML = `<i class="fas fa-ban"></i> Esgotado / Indisponível`;
        addBtn.className = "w-full py-4 bg-slate-800 text-slate-500 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-not-allowed border border-slate-900";
    } else {
        addBtn.disabled = false;
        addBtn.innerHTML = `<i class="fas fa-shopping-bag"></i> Adicionar ao Carrinho`;
        addBtn.className = "w-full py-4 bg-jeansBlue hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition shadow-lg shadow-jeansBlue/25 flex items-center justify-center gap-2 border border-transparent hover:border-jeansNeon";
        addBtn.onclick = () => {
            const sizeInput = document.querySelector(`input[name="modal-size"]:checked`);
            const size = sizeInput ? sizeInput.value : (product.sizes[0] || "M");
            
            const colorInput = document.querySelector(`input[name="modal-color"]:checked`);
            const color = colorInput ? colorInput.value : (product.colors ? (product.colors[0] || "Padrão") : "Padrão");
            
            addToCart(product.id, size, color, 1);
            closeProductModal();
            openCart();
        };
    }
    
    // Exibe o modal com efeito suave
    const modal = document.getElementById("product-modal");
    const modalContent = document.getElementById("product-modal-content");
    modal.classList.remove("hidden");
    
    // Força reflow
    void modal.offsetWidth;
    
    modal.classList.remove("opacity-0");
    modal.classList.add("opacity-100");
    modalContent.classList.remove("scale-95");
    modalContent.classList.add("scale-100");
    document.body.classList.add("cart-open"); // Trava rolagem do fundo
}

function closeProductModal() {
    const modal = document.getElementById("product-modal");
    const modalContent = document.getElementById("product-modal-content");
    
    modal.classList.add("opacity-0");
    modal.classList.remove("opacity-100");
    modalContent.classList.add("scale-95");
    modalContent.classList.remove("scale-100");
    document.body.classList.remove("cart-open"); // Destrava rolagem
    
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 300);
}

function closeProductModalOnOverlay(event) {
    if (event.target === document.getElementById("product-modal")) {
        closeProductModal();
    }
}

