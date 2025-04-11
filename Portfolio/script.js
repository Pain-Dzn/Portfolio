// Dados dos Projetos (COMPLETO)
const projetos = {
    fotografia: [
        {
            title: "Retratos Urbanos",
            desc: "Série em preto e branco nas ruas da cidade",
            img: "assets/projetos/fotografia/me.jpg",
            tags: ["Retrato", "Preto e Branco"],
            colecao: [
                "assets/projetos/fotografia/me.jpg",
                "assets/projetos/fotografia/me3.jpg",
                "assets/projetos/fotografia/me2.jpg"
            ]
        },
        {
            title: "Paisagens Naturais",
            desc: "Cenários de tirar o fôlego ao redor do mundo",
            img: "assets/projetos/fotografia/ceu.jpg",
            tags: ["Natureza", "Viagem"],
            colecao: [
                "assets/projetos/fotografia/ceu.jpg",
                "assets/projetos/fotografia/ceu2.jpg",
                "assets/projetos/fotografia/ceu3.jpg"
            ]
        },
        {
            title: "Flores",
            desc: "Flores e outras plantas",
            img: "assets/projetos/fotografia/flor.jpg",
            tags: ["Flores", "Estúdio"],
            colecao: [
                "assets/projetos/fotografia/flor.jpg",
                "assets/projetos/fotografia/flor2.jpg",
                "assets/projetos/fotografia/flor3.jpg"
            ]
        }
    ],
    design: [
        {
            title: "Identidade Visual",
            desc: "Branding para marca da Loja UEM",
            img: "assets/projetos/design/LojaUEM.png",
            tags: ["Logo", "Branding"],
            colecao: [
                "assets/projetos/design/lojauem.png",
                "assets/projetos/design/mockup-UEM",
                "assets/projetos/design/mockup-UEM2.jpg"
            ]
        },
        {
            title: "App Mobile",
            desc: "UI/UX para aplicativo de fitness",
            img: "assets/projetos/design/app-fitness.jpg",
            tags: ["UI Design", "Figma"],
            colecao: [
                "assets/projetos/design/app-fitness.jpg",
                "assets/projetos/design/screen1.jpg",
                "assets/projetos/design/screen2.jpg"
            ]
        },
        {
            title: "Packaging",
            desc: "Design de embalagem para vinho premium",
            img: "assets/projetos/design/vinho.jpg",
            tags: ["Embalagem", "Tipografia"],
            colecao: [
                "assets/projetos/design/vinho.jpg",
                "assets/projetos/design/vinho-mockup1.jpg",
                "assets/projetos/design/vinho-mockup2.jpg"
            ]
        }
    ],
    programacao: [
        {
            title: "E-commerce React",
            desc: "Loja virtual com pagamento integrado",
            img: "assets/projetos/programacao/loja-uem.png",
            tags: ["React", " PHP"],
            colecao: [
                {
                    thumb: "assets/projetos/programacao/loja-uem.png",
                    url: "http://127.0.0.1:5500/index.html#home",
                    repo: "https://github.com/"
                },
                {
                    thumb: "assets/projetos/programacao/ecommerce-admin.jpg",
                    url: "https:// ",
                    repo: "https://github.com/seuusuario/ecommerce-admin"
                }
            ]
        },
        {
            title: "App de Fotografia",
            desc: "Filtros customizados com JS",
            img: "assets/projetos/programacao/mozscape.png",
            tags: ["CSS ", "JavaScript"],
            colecao: [
                {
                    thumb: "assets/projetos/programacao/mozscape2.png",
                    url: "https://github.com/Pain-Dzn/MozScape",
                    repo: "https://github.com/Pain-Dzn/MozScape"
                }
            ]
        },
        {
            title: "Dashboard Analytics",
            desc: "Visualização de dados em tempo real",
            img: "assets/projetos/programacao/dashboard.jpg",
            tags: ["D3.js", "API"],
            colecao: [
                {
                    thumb: "assets/projetos/programacao/dashboard-thumb.jpg",
                    url: "https://dashboard-exemplo.com",
                    repo: "https://github.com/seuusuario/dashboard"
                },
                {
                    thumb: "assets/projetos/programacao/dashboard-mobile.jpg",
                    url: "https://dashboard-exemplo.com/mobile"
                }
            ]
        }
    ]
};
// Sistema de Navegação SPA
function navigateTo(pageId) {
    // Esconde todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Mostra a página solicitada
    document.getElementById(pageId).classList.add('active');

    // Atualiza navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });

    // Scroll para o topo (exceto home)
    if (pageId !== 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Fecha menu mobile se aberto
    document.querySelector('.menu').classList.remove('active');
}

// Carrega projetos na grade principal
function loadProjects(category) {
    const grid = document.querySelector('.projetos-grid');
    grid.innerHTML = '';

    projetos[category].forEach((projeto, index) => {
        grid.innerHTML += `
            <div class="projeto-card" data-category="${category}" data-index="${index}">
                <img src="${projeto.img}" alt="${projeto.title}" loading="lazy">
                <div class="projeto-info">
                    <h3>${projeto.title}</h3>
                    <p>${projeto.desc}</p>
                    <div class="tags">
                        ${projeto.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <button class="explorar-btn btn">
                        <i class="fas fa-expand"></i> Explorar Coleção
                    </button>
                </div>
            </div>
        `;
    });
}// ... (mantenha todo o código anterior até a função loadColecao)

function loadColecao(category, projectIndex) {
    const projeto = projetos[category][projectIndex];
    const colecaoGrid = document.querySelector('.colecao-grid');

    document.getElementById('titulo-colecao').textContent = projeto.title;
    colecaoGrid.innerHTML = '';

    // Verifica se é programação (com links) ou outras categorias (imagens)
    const isCode = category === 'programacao';

    projeto.colecao.forEach((item, idx) => {
        if (isCode) {
            // Para programação: botão com link
            colecaoGrid.innerHTML += `
                <div class="colecao-item code-item">
                    <img src="${item.thumb || item}" alt="${projeto.title}">
                    <div class="code-actions">
                        <a href="${item.url}" target="_blank" class="btn">
                            <i class="fas fa-external-link-alt"></i> Ver Projeto
                        </a>
                        ${item.repo ? `
                        <a href="${item.repo}" target="_blank" class="btn btn-repo">
                            <i class="fab fa-github"></i> Código Fonte
                        </a>` : ''}
                    </div>
                </div>
            `;
        } else {
            // Para fotografia/design: imagem clicável (abre em nova aba)
            colecaoGrid.innerHTML += `
                <div class="colecao-item">
                    <a href="${item}" target="_blank" class="image-link">
                        <img src="${item}" alt="${projeto.title} - ${idx + 1}" loading="lazy">
                        <div class="open-newtab-hint">
                            <i class="fas fa-external-link-alt"></i> Abrir em nova aba
                        </div>
                    </a>
                </div>
            `;
        }
    });

    navigateTo('colecao');
}
function setupFullscreen() {
    // Overlay para fullscreen
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    overlay.innerHTML = `
        <img src="" alt="" class="fullscreen-img">
        <button class="close-fullscreen"><i class="fas fa-times"></i></button>
    `;
    document.body.appendChild(overlay);

    // Eventos
    document.querySelectorAll('.fullscreen-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const imgSrc = e.target.closest('.colecao-item').dataset.fullscreen;
            overlay.querySelector('img').src = imgSrc;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    overlay.querySelector('.close-fullscreen').addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}



// Função para atualizar imagens temáticas
function updateThemeImages() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('[data-theme-light], [data-theme-dark]').forEach(element => {
        element.src = isDark
            ? element.dataset.themeDark
            : element.dataset.themeLight;
    });
}

// Dark Mode Toggle (modifique a função existente)
function toggleDarkMode() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';

    // Alterna tema
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('darkMode', !isDark);

    // Atualiza ícone do botão
    document.getElementById('dark-mode-toggle').innerHTML = isDark
        ? '<i class="fas fa-moon"></i>'
        : '<i class="fas fa-sun"></i>';

    // Atualiza logo
    updateThemeImages();
}

// Inicialização (adicione no DOMContentLoaded)
if (localStorage.getItem('darkMode') === 'true') {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById('dark-mode-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    // Força atualização da logo após o carregamento
    setTimeout(updateThemeImages, 50);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Verifica preferência de Dark Mode
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('dark-mode-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Carrega página inicial
    navigateTo('home');
    loadProjects('fotografia');

    // Event Listeners
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(e.target.getAttribute('href').substring(1));
        });
    });

    // Botões de serviço
    document.querySelectorAll('.servico-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.servico-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadProjects(btn.dataset.category);
        });
    });

    // Botões "Explorar Coleção"
    document.addEventListener('click', (e) => {
        if (e.target.closest('.explorar-btn')) {
            const card = e.target.closest('.projeto-card');
            loadColecao(card.dataset.category, card.dataset.index);
        }
    });

    // Botão Voltar
    document.getElementById('voltar').addEventListener('click', () => {
        navigateTo('servicos');
    });

    // Dark Mode Toggle
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

    // Menu Mobile
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.menu').classList.toggle('active');
    });
});

// Atualiza URL sem recarregar
window.addEventListener('hashchange', () => {
    const pageId = window.location.hash.substring(1) || 'home';
    navigateTo(pageId);
});