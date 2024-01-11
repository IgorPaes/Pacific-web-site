export default function traducaoPagina() {
    let pt_br, en, es, zh;
    fetch('../geral/jsons/linguas.json')
    .then(response => response.json())
    .then(blocoLinguas => {
        // SEPARA AS LINGUAS NO JSON
        blocoLinguas.forEach((caixaLingua) => {
            switch(caixaLingua.lingua) {
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
    const pi = linhasLingua.paginaInicial;

    document.querySelector('.main_title h1').textContent = pi.tituloInicial;
    document.querySelector('.main_informations p').textContent = pi.descSecundaria;
    document.querySelector('.main_informations button').textContent = pi.btn1;
    document.querySelector('.info_balloon #descCaixa1').textContent = pi.descCaixa1;
    document.querySelector('.info_balloon #descCaixa2').textContent = pi.descCaixa2;
    document.querySelector('.info_balloon #descCaixa3').textContent = pi.descCaixa3;
    
}

function produtos(linhasLingua) {
    navs(linhasLingua);
    const pp = linhasLingua.paginaProdutos;

    document.querySelector('.columns_titles #descColuna1').textContent = pp.descColuna1;
    document.querySelector('.columns_titles #descColuna2').textContent = pp.descColuna2;
    document.querySelector('.columns_titles #descColuna3').textContent = pp.descColuna3;
    
    document.querySelector('#productData').textContent = pp.productData;

    //ORÇAMENTO
    document.querySelector('.budget_block h1').textContent = pp.orcamento.title;

    document.querySelector('.inputs_grid #name').textContent = pp.orcamento.name;
    document.querySelector('.inputs_grid #secName').textContent = pp.orcamento.secName;
    document.querySelector('.inputs_grid #email').textContent = pp.orcamento.email;
    document.querySelector('.budget_form #tel').textContent = pp.orcamento.tel;
    document.querySelector('.input_block #amount').textContent = pp.orcamento.amount;
}

function sobre(linhasLingua) {
    navs(linhasLingua);
    const ps = linhasLingua.paginaSobre;


}

function contato(linhasLingua) {
    navs(linhasLingua);
    const pc = linhasLingua.paginaContato;
    

}

function navs(linhasLingua) {
    const tNav = linhasLingua.navegacao;
    document.querySelector('#nav_sup #tInicio').textContent = tNav.txt1;
    document.querySelector('#nav_sup #tProdutos').textContent = tNav.txt2;
    document.querySelector('#nav_sup #tSobre').textContent = tNav.txt3;
    document.querySelector('#nav_sup #tContato').textContent = tNav.txt4;

    document.querySelector('#ft_nav #tInicio').textContent = tNav.txt1;
    document.querySelector('#ft_nav #tProdutos').textContent = tNav.txt2;
    document.querySelector('#ft_nav #tSobre').textContent = tNav.txt3;
    document.querySelector('#ft_nav #tContato').textContent = tNav.txt4;
}