export default function traducaoPagina(numeroPagina) {
    if(localStorage.getItem('lang')) {
        
    }
    switch(localStorage.getItem('lang')) {
        case 'EN':
            
        break;
        case 'ES':
            
        break;
        case 'ZH':
            
        break;
    }
    fetch('../geral/jsons/linguas.json')
    .then(response => response.json()).then(blocoLinguas => {    
        // const nomePaginasNav = document.querySelectorAll('#nav_sup button span');
        // nomePaginasNav[1].textContent = blocoLinguas
        // console.log(blocoLinguas[1]);
    blocoLinguas.forEach((lingua) => {
        
    });
    }).catch(error => console.error('Erro:', error));

    switch(numeroPagina) {
        case 1:
            inicial();
        break;
        case 2:
            produtos();
        break;
        case 3:
            sobre();
        break;
        case 4:
            contato();
        break;
    }
}

function inicial() {
    
}

function produtos() {
    
}

function sobre() {
    
}

function contato() {
    
}
