import navegacoes from '../geral/js/navegacoes.js';
navegacoes(2);

const blocoMain = document.querySelector('.main_container');
const btnsVerMais = document.querySelectorAll('.item_block .learn_more_product');
const contProdutos = document.querySelector('.products_blocks');

function carregaBlocoCategoria(imgSrc, titulo, desc) {
    let engloba = document.createElement("div");
    engloba.innerHTML = `
    <div class="item_block">
        <div class="product_imagem_block">
            <figure>
                <img src="${imgSrc}" alt="Imagem do produto">
            </figure>
        </div>
        <div class="product_description">
            <h3>${titulo}</h3>
            <p>${desc}</p>
            <button type="button" class="learn_more_product">
                <span>SAIBA MAIS</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="24" viewBox="0 0 52 24" fill="none">
                    <path d="M37.4356 1.73196L48.3261 12L37.4356 22.268L39.2725 24L52 12L39.2725 -1.35101e-06L37.4356 1.73196Z" fill="white"/>
                    <path d="M50.163 13.2371L50.163 10.7629L-5.78613e-07 10.7629L-4.70461e-07 13.2371L50.163 13.2371Z" fill="white"/>
                </svg>
            </button>
        </div>
    </div>
    `
    return engloba.firstElementChild;
}

let produtos = [
    {
        "SrcImagem": "https://media.discordapp.net/attachments/715757159651999788/1182087050292375632/um.png?ex=65836b5a&is=6570f65a&hm=9f1a09cb27f838bbab0f8c38199b7212791f68899db489e621f8646d741bea81&=&format=webp&quality=lossless&width=171&height=171",
        "titulo": "BARRILHA",
        "descricao": "A barrilha, também conhecida como carbonato de sódio, é um composto..."
    },
    {
        "SrcImagem": "https://media.discordapp.net/attachments/715757159651999788/1182087050292375632/um.png?ex=65836b5a&is=6570f65a&hm=9f1a09cb27f838bbab0f8c38199b7212791f68899db489e621f8646d741bea81&=&format=webp&quality=lossless&width=171&height=171",
        "titulo": "Bicarbonato de Sódio",
        "descricao": "O bicarbonato de sódio é um composto químico versátil e de ampla utilização..."
    }
];

produtos.forEach((produto) => {

    const SrcImagem = produto.SrcImagem;
    const titulo = produto.titulo;
    const descricao = produto.descricao;
    
    const blocoProduto = carregaBlocoCategoria(SrcImagem, titulo, descricao);
    contProdutos.insertAdjacentElement('beforeend', blocoProduto)

});

function carregaListaProdutos() {
    return `
    <div class="category_product_block">
        <div class="category_name_block">
            <figure>
                <img src="https://media.discordapp.net/attachments/715757159651999788/1182087050292375632/um.png?ex=65836b5a&is=6570f65a&hm=9f1a09cb27f838bbab0f8c38199b7212791f68899db489e621f8646d741bea81&=&format=webp&quality=lossless&width=171&height=171" alt="Imagem do produto">
            </figure>
            <div>
                <h2>plastificantes</h2>
                <p>veja todos os produtos abaixo</p>
            </div>
        </div>
        <ul class="itens_main_table">
            <li class="columns_titles">
                <span>NOME</span>
                <span>NOME QUÍMICO</span>
                <span>Nº CAS</span>
                <span>DADOS</span>
                <span></span>
            </li>
            <ul class="rows_boxs">
                <li>
                    <span>ATBC</span>
                    <span>C20H34O8</span>
                    <span>77-90-7</span>
                    <span>Baixa volatilidade</span>
                    <button>VER MAIS</button>
                </li>
                <li>
                    <span>DBM</span>
                    <span>C20H34O8</span>
                    <span>77-90-7</span>
                    <span>Baixa volatilidade</span>
                    <button>VER MAIS</button>
                </li>
                <li>
                    <span>DBM</span>
                    <span>C20H34O8</span>
                    <span>77-90-7</span>
                    <span>Baixa volatilidade</span>
                    <button>VER MAIS</button>
                </li>
                <li>
                    <span>DBM</span>
                    <span>C20H34O8</span>
                    <span>77-90-7</span>
                    <span>Baixa volatilidade</span>
                    <button>VER MAIS</button>
                </li>
                <li>
                    <span>DBM</span>
                    <span>C20H34O8</span>
                    <span>77-90-7</span>
                    <span>Baixa volatilidade</span>
                    <button>VER MAIS</button>
                </li>
                <li>
                    <span>DBM</span>
                    <span>C20H34O8</span>
                    <span>77-90-7</span>
                    <span>Baixa volatilidade</span>
                    <button>VER MAIS</button>
                </li>
                <li>
                    <span>DBM</span>
                    <span>C20H34O8</span>
                    <span>77-90-7</span>
                    <span>Baixa volatilidade</span>
                    <button>VER MAIS</button>
                </li>
                <li>
                    <span>DBM</span>
                    <span>C20H34O8</span>
                    <span>77-90-7</span>
                    <span>Baixa volatilidade</span>
                    <button>VER MAIS</button>
                </li>
                <li>
                    <span>DBM</span>
                    <span>C20H34O8</span>
                    <span>77-90-7</span>
                    <span>Baixa volatilidade</span>
                    <button>VER MAIS</button>
                </li>
                <li>
                    <span>DBM</span>
                    <span>C20H34O8</span>
                    <span>77-90-7</span>
                    <span>Baixa volatilidade</span>
                    <button>VER MAIS</button>
                </li>
                <li>
                    <span>DBM</span>
                    <span>C20H34O8</span>
                    <span>77-90-7</span>
                    <span>Baixa volatilidade</span>
                    <button>VER MAIS</button>
                </li>
            </ul>
        </ul>
    </div>
    ` 
}