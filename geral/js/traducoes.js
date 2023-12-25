export default function traducaoPagina() {
    let en, es, zh;
    // SEPARA AS LINGUAS NO JSON
    fetch('../geral/jsons/linguas.json')
    .then(response => response.json()).then(blocoLinguas => {   
        blocoLinguas.forEach((caixaLingua) => {
            switch(caixaLingua.lingua) {
                case 'EN':
                    en = caixaLingua;
                break;
                case 'ES':
                    es = caixaLingua;
                break;
                case 'ZH':
                    zh = caixaLingua;
                break;
            }
        });
    }).catch(error => console.error('Erro:', error));
    // CONTINUAR DAQUI... 
    switch(localStorage.getItem('lang')) {
        case 'PT-BR':
            location.reload();
        break;
        case 'EN':
            
        break;
        case 'ES':
            
        break;
        case 'ZH':
            
        break;
    }
    if(window.location.href.includes("/inicial")) {
        inicial();
    }else if(window.location.href.includes("/produtos")){
        produtos();
    }else if(window.location.href.includes("/sobre")){
        sobre();
    }else if(window.location.href.includes("/contato")){
        contato();
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
