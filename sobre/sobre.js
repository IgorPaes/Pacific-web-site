import navegacoes from '../geral/js/navegacoes.js';
navegacoes(3);

const contCategorias = document.querySelector('.categorys_block');
fetch('../geral/jsons/sobre.json')
.then(response => response.json()).then(categorias => {
    categorias.forEach((categoria, i) => {                
        const blocoCategoria = carregaBlocoCategoria(categoria.srcImagem, categoria.titulo, categoria.descricao);
        contCategorias.insertAdjacentElement('beforeend', blocoCategoria);
        carregaBtns(i);
    });
}).catch(error => console.error('Erro:', error));

function carregaBlocoCategoria(imgSrc, titulo, desc) {
    let engloba = document.createElement("div");
    engloba.innerHTML = `
    <div class="item_block">
        <div class="category_imagem_block">
            <figure>
                <img src="${imgSrc}" alt="Img">
            </figure>
        </div>
        <div class="category_description">
            <h3>${titulo}</h3>
            <p>${desc}</p>
            <button type="button" class="learn_more_category" id="learn_more">
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

function carregaBtns(numeroBtn) {
    const btnsSaibaMais = document.querySelectorAll('#learn_more');
    btnsSaibaMais[numeroBtn].addEventListener('click', () => { 
        ativaDesativaTelas(numeroBtn + 1);
    });
}

function ativaDesativaTelas(numeroTela) {
    document.querySelector(".main_container .categorys_block").style = "display: none";;
    switch(numeroTela) {
        case 1:
            document.querySelector("").style = "";
        break;
        case 2:
            document.querySelector("#logistics").style = "";
        break;
        case 3:
            document.querySelector("").style = "";
        break;
        case 4:
            document.querySelector("").style = "";
        break;
    }
}