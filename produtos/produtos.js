import navegacoes from '../geral/js/navegacoes.js';
navegacoes(2);

const contProdutos = document.querySelector('.category_block');
fetch('../geral/jsons/produtos.json')
.then(response => response.json()).then(categorias => {
    const posicaoLista = sessionStorage.getItem("localPage");
    if(posicaoLista === null) {
        categorias.forEach((categoria, i) => {                
            const blocoProduto = carregaBlocoCategoria(categoria.srcImagemPadrao, categoria.titulo, categoria.descricao);
            contProdutos.insertAdjacentElement('beforeend', blocoProduto);        
            carregaBtns(categoria, i);
        });
    }else {
        sessionStorage.removeItem("localPage");
        contProdutos.style = "display: none";
        document.querySelector(".category_product_block").style = "";
        const blocoPrimario = document.querySelector(".category_product_block .category_name_block");
        const categoria = categorias[Number(posicaoLista)];
        blocoPrimario.innerHTML = carregaBlocoPrimario(categoria.srcImagemPadrao, categoria.titulo);
        carregaSubTela(categoria.listaPrdutos);
    }
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
            <button type="button" class="learn_more_product" id="learn_more">
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

function carregaBtns(categoria, numeroBtn) {
    const blocoPrimario = document.querySelector(".category_product_block .category_name_block");
    const btnsSaibaMais = document.querySelectorAll('#learn_more');
    const listaProdutos = categoria.listaPrdutos;
    btnsSaibaMais[numeroBtn].addEventListener('click', () => { 
        contProdutos.style = "display: none";
        document.querySelector(".category_product_block").style = "";
        blocoPrimario.innerHTML = carregaBlocoPrimario(categoria.srcImagemPadrao, categoria.titulo);
        carregaSubTela(listaProdutos);
    });
}

function carregaSubTela(listaProdutos) {
    const blocoLista = document.querySelector(".itens_main_table .rows_boxs");
    listaProdutos.forEach((produto) => {
        const linhaProduto = carregaListaProdutos(produto.nome, produto.nomeQuimico, produto.ncm);
        blocoLista.insertAdjacentElement('beforeend', linhaProduto);
        const btn = linhaProduto.querySelector('.rows_boxs #see_more_btn');
        btn.addEventListener('click', () => {
            carregaVerMais(produto);
        });
    });
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

function carregaListaProdutos(nome, nomeQuimico, ncm) {
    let engloba = document.createElement("div");
    engloba.innerHTML = `
    <li>
        <span>${nome}</span>
        <span>${nomeQuimico}</span>
        <span>${ncm}</span>
        <button id="see_more_btn">VER MAIS</button>
    </li>
    `
    return engloba.firstElementChild;
}

// VER MAIS DE CADA PRODUTO
function carregaMaisInfos(nome, dados, nomeCompleto, nomeQuimico, nCas, aplicacoes) {
    let engloba = document.createElement("div");
    engloba.innerHTML = `
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
    return engloba.children;
}

function carregaVerMais(produto) {
    const infosProduto = produto.verMais;
    const blocoInfosProd = carregaMaisInfos(produto.nome, infosProduto.dados, infosProduto.nomeCompleto, produto.nomeQuimico, infosProduto.nCas, infosProduto.aplicacoes);
    document.querySelector(".category_product_block").style = "display: none";
    document.querySelector(".block_see_more").style = "display: block";
    const blocoInfos = document.querySelector(".block_see_more .see_more_background");
    for(let i = 0; i < blocoInfosProd.length; i++) {
        let clone = blocoInfosProd[i].cloneNode(true);
        blocoInfos.insertAdjacentElement('beforeend', clone);
    }
}