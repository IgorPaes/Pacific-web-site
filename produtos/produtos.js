import navegacoes from '../geral/js/navegacoes.js';
navegacoes(2);

// const blocoMain = document.querySelector('.main_container');
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

function carregaListaProdutos(nome, nomeQuimico, ncas, dados) {
    let engloba = document.createElement("div");
    engloba.innerHTML = `
    <li>
        <span>${nome}</span>
        <span>${nomeQuimico}</span>
        <span>${ncas}</span>
        <span>${dados}</span>
        <button>VER MAIS</button>
    </li>
    `
    return engloba.firstElementChild;
}

// fetch('../geral/json/categorias.json')
// .then(response => response.json()).then(categorias => {
//     categorias.forEach((produto) => {

//     });
// }).catch(error => console.error('Erro:', error));

function carregaBtn(categoria, numeroBtn) {
    const btnsVerMais = document.querySelectorAll('.item_block .learn_more_product');
    const blocoPrimario = document.querySelector(".category_name_block");
    btnsVerMais[numeroBtn].addEventListener('click', () => {
        console.log(1);
        console.log(categoria.listaPrdutos);
        contProdutos.style = "display: none"
        document.querySelector(".category_product_block").style = "";

        blocoPrimario.innerHTML = carregaBlocoPrimario(categoria.SrcImagem, categoria.titulo);
    });

}
