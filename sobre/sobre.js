import navegacoes from '../geral/js/navegacoes.js';
navegacoes(3);


for (let index = 0; index < 4; index++) {        
    const btnsSaibaMais = document.querySelectorAll('#learn_more');
    btnsSaibaMais[index].addEventListener('click', () => { 
        ativaDesativaTelas(index + 1);
    });
}


function ativaDesativaTelas(numeroTela) {
    document.querySelector(".main_container .categorys_block").style = "display: none";
    switch(numeroTela) {
        case 1:
            document.querySelector("").style = "";
        break;
        case 2:
            document.querySelector("#logistics").style = "";
        break;
        case 3:
            document.querySelector("#location").style = "";
        break;
        case 4:
            document.querySelector("").style = "";
        break;
    }
}