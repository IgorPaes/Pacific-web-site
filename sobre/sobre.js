import navegacoes from '../geral/js/navegacoes.js';
navegacoes(3);

const blocosSobre = document.querySelectorAll('.categorys_block .item_block');
blocosSobre.forEach((bloco, i) => {
    const btnsSaibaMais = document.querySelectorAll('#learn_more');
    btnsSaibaMais[i].addEventListener('click', () => { 
        ativaDesativaTelas(bloco.id);
    });
});

function ativaDesativaTelas(idBloco) {
    document.querySelector(".main_container .categorys_block").style = "display: none";
    switch(idBloco) {
        case 'empresa':
            document.querySelector("#company").style = "";
        break;
        case 'logistica':
            document.querySelector("#logistics").style = "";
        break;
        case 'localizacao':
            document.querySelector("#location").style = "";
        break;
        case 'politicas':
            document.querySelector("#policies").style = "";
        break;
    }
}