import navegacoes from '../geral/js/navegacoes.js';
navegacoes(2);

const contProdutos = document.querySelector('.category_block');

fetch('../geral/json/categorias.json')
.then(response => response.json()).then(categorias => {
    categorias.forEach((categoria, numeroBtn) => {
        const blocoProduto = carregaBlocoCategoria(categoria.SrcImagem,  categoria.titulo, categoria.descricao);
        contProdutos.insertAdjacentElement('beforeend', blocoProduto);
        carregaBtn(categoria, numeroBtn);
    });
}).catch(error => console.error('Erro:', error));

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

function carregaBlocoPrimario(imgSrc, titulo) {
    return `
    <figure>
        <img src="${imgSrc}" alt="Imagem do produto">
    </figure>
    <div>
        <h2>${titulo}</h2>
        <p>veja todos os produtos abaixo</p>
    </div>
    `
}

function carregaListaProdutos(nome, nomeQuimico, nCas, dados) {
    let engloba = document.createElement("div");
    engloba.innerHTML = `
    <li>
        <span>${nome}</span>
        <span>${nomeQuimico}</span>
        <span>${nCas}</span>
        <span>${dados}</span>
        <button>VER MAIS</button>
    </li>
    `
    return engloba.firstElementChild;
}

const blocoLista = document.querySelector(".itens_main_table .rows_boxs");
const blocoPrimario = document.querySelector(".category_product_block .category_name_block");
function carregaBtn(categoria, numeroBtn) {
    const btnsSaibaMais = document.querySelectorAll('.item_block .learn_more_product');
    const listaProdutos = categoria.listaPrdutos;
    btnsSaibaMais[numeroBtn].addEventListener('click', () => {
        contProdutos.style = "display: none"
        document.querySelector(".category_product_block").style = "";
        blocoPrimario.innerHTML = carregaBlocoPrimario(categoria.SrcImagem, categoria.titulo);
        listaProdutos.forEach((produto) => {
            const linhaProduto = carregaListaProdutos(produto.nome, produto.nomeQuimico, produto.ncas, produto.dados);
            blocoLista.insertAdjacentElement('beforeend', linhaProduto);
        });
    });

}

// VER MAIS DE CADA PRODUTO

const blocoInfos = document.querySelector(".block_see_more .see_more_background");

function carregaMaisInfos(nome, dados, nomeCompleto, nomeQuimico, nCas, aplicacoes) {
    return `
    <div>
        <h1>${nome}</h1>
    </div>
    <div>
        <h2>DADOS DO PRODUTO</h2>
        <p>${dados}</p>
    </div>
    <div>
        <h2>Características</h2>
        <p><span>TIPO: </span>${nomeCompleto} (${nome})</p>
        <p><span>NOME QUÍMICO: </span>${nomeQuimico}</p>
        <p><span>Nº CAS: </span>${nCas}</p>
    </div>
    <div>
        <h2>Aplicações</h2>
        <p>${aplicacoes}</p>
    </div>
    `
}

const btnsVerMais = document.querySelector("");

function carregaVerMais() {
    
}