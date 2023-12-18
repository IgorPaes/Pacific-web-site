import navegacoes from '../geral/js/navegacoes.js';
// import carregaBtns from '../geral/js/geraVReSB.js'
navegacoes(1);

const blocoCat = document.querySelector(".products_list");
fetch('../geral/json/categorias.json')
.then(response => response.json()).then(categorias => {
    categorias.forEach((categoria, i) => {
        if(categoria.ativoInicial) {            
            const blocoGerado = criaBlocoCat(categoria);
            blocoCat.insertAdjacentElement('beforeend', blocoGerado);
            carregaBtnsSM(i);
        }
    });
}).catch(error => console.error('Erro:', error));

function criaBlocoCat(categoria) {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="item_box">
        <div class="item_image">
            <img src="${categoria.SrcImagemInicial}" alt="Imagem">
        </div>
        <div class="main_item_information">
            <h2>${categoria.titulo}</h2>
            <div class="additional_infos">
                <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.36 14.35C7.36 10.42 11.65 9.43 11.65 7.18C11.65 5.98 10.54 5.26 9.01 5.26C7.39 5.26 6.04 6.07 5.26 7.42L0.79 5.02C2.38 2.35 5.29 0.579999 9.7 0.579999C14.32 0.579999 17.62 2.56 17.62 6.22C17.62 10.9 12.7 11.59 12.7 14.35H7.36ZM10.03 22.27C8.02 22.27 6.64 20.86 6.64 19.12C6.64 17.35 8.02 16.03 10.03 16.03C12.04 16.03 13.45 17.35 13.45 19.12C13.45 20.86 12.04 22.27 10.03 22.27Z" fill="white"/>
                </svg>                                
                <span>SAIBA O QUE É ${categoria.titulo}</span>
            </div>
            <div class="bar"></div>
            <p>${categoria.descricao}</p>
            <button type="button" id="learn_more">Saiba Mais</button>
        </div>
    </div>
    `
    return div.firstElementChild;
}

function carregaBtnsSM(posicaoLista) {
    const listaBtns = document.querySelectorAll('button#learn_more');
    listaBtns[posicaoLista].addEventListener('click', () => {
        sessionStorage.setItem('localPage', posicaoLista);
        window.location.href = "/produtos/produtos.html";
    });
}