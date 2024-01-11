export default function traducaoPagina() {
    let pt_br, en, es, zh;
    fetch('../geral/jsons/linguas.json')
    .then(response => response.json())
    .then(blocoLinguas => {
        // SEPARA AS LINGUAS NO JSON
        blocoLinguas.forEach((caixaLingua) => {
            switch(caixaLingua.language) {
                case 'PT-BR':
                    pt_br = caixaLingua;
                break;
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
        switch(localStorage.getItem('lang')) {
            case 'PT-BR':
                pagina(pt_br);
            break;
            case 'EN':
                pagina(en);
            break;
            case 'ES':
                pagina(es);
            break;
            case 'ZH':
                pagina(zh);
            break;
        }
    }).catch(error => console.error('Erro:', error));
}

function pagina(itensLingua) {        
    if(window.location.href.includes('/inicial')) {
        inicial(itensLingua);
    }else if(window.location.href.includes('/produtos')){
        produtos(itensLingua);
    }else if(window.location.href.includes('/sobre')){
        sobre(itensLingua);
    }else if(window.location.href.includes('/contato')){
        contato(itensLingua);
    }
}

// FUNÇÕES COM OS QUERYSELECTORS...
function inicial(linhasLingua) {
    navs(linhasLingua);
    const pi = linhasLingua.homePage;

    document.querySelector('.main_title h1').textContent = pi.title;
    document.querySelector('.main_informations p').textContent = pi.descSecondary;
    document.querySelector('.main_informations button').textContent = pi.button;
    document.querySelector('.info_balloon #descBalloon1').textContent = pi.descBalloon1;
    document.querySelector('.info_balloon #descBalloon2').textContent = pi.descBalloon2;
    document.querySelector('.info_balloon #descBalloon3').textContent = pi.descBalloon3;
    
}

function produtos(linhasLingua) {
    navs(linhasLingua);
    const pp = linhasLingua.productPage;

    document.querySelector('.columns_titles #descColumn1').textContent = pp.descColumn1;
    document.querySelector('.columns_titles #descColumn2').textContent = pp.descColumn2;
    document.querySelector('.columns_titles #descColumn3').textContent = pp.descColumn3;
    
    document.querySelector('#productData').textContent = pp.productData;

    //ORÇAMENTO
    document.querySelector('.budget_block h1').textContent = pp.budget.title;

    document.querySelector('.inputs_grid #name').textContent = pp.budget.name;
    document.querySelector('.inputs_grid #secName').textContent = pp.budget.secName;
    document.querySelector('.inputs_grid #email').textContent = pp.budget.email;
    document.querySelector('.budget_form #tel').textContent = pp.budget.tel;
    document.querySelector('.input_block #amount').textContent = pp.budget.amount;
}

function sobre(linhasLingua) {
    navs(linhasLingua);
    const ps = linhasLingua.aboutPage;

    //LOGISTICA
    document.querySelector('.main_title_box h1').textContent = ps.logistics.title;
    document.querySelector('.step_content #titleSubCategory1').textContent = ps.logistics.titleSubCategory;
    document.querySelector('.step_content #pSubCategory1').textContent = ps.logistics.descSubCategory;
    document.querySelector('.step_content #titleSubCategory2').textContent = ps.logistics.titleSubCategory2;
    document.querySelector('.step_content #pSubCategory2').textContent = ps.logistics.descSubCategory2;


}

function contato(linhasLingua) {
    navs(linhasLingua);
    const pc = linhasLingua.contactPage;
    

}

function navs(linhasLingua) {
    const tNav = linhasLingua.navigation;
    document.querySelector('#nav_sup #tInicio').textContent = tNav.homeButton;
    document.querySelector('#nav_sup #tProdutos').textContent = tNav.productsButton;
    document.querySelector('#nav_sup #tSobre').textContent = tNav.aboutButton;
    document.querySelector('#nav_sup #tContato').textContent = tNav.contactButton;

    document.querySelector('#ft_nav #tInicio').textContent = tNav.homeButton;
    document.querySelector('#ft_nav #tProdutos').textContent = tNav.productsButton;
    document.querySelector('#ft_nav #tSobre').textContent = tNav.aboutButton;
    document.querySelector('#ft_nav #tContato').textContent = tNav.contactButton;
}