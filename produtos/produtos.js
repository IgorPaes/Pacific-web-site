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
                <img src="${imgSrc}" alt="Imagem da categoria do produto">
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

function nova() {
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
        })

        return pt_br, en, es, zh;

    }).catch(error => console.error('Erro:', error));
}

async function carregaMaisInfos(nome, dados, nomeCompleto, nomeQuimico, nCas, aplicacoes) {
    let pt_br, en, es, zh;
    let productDataTitle, characteristicsTitle, typeTitle, nameChemicalTitle, nCasTitle, aplicationsTitle;

    const response = await fetch('../geral/jsons/linguas.json');
    const blocoLinguas = await response.json();

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
    })

    switch(localStorage.getItem('lang')) {
        case 'PT-BR':
            const lang_pt = pt_br.productPage;
            productDataTitle = lang_pt.productData;
            characteristicsTitle = lang_pt.characteristics;
            typeTitle = lang_pt.type;
            nameChemicalTitle = lang_pt.nameChemical;
            nCasTitle = lang_pt.nCas;
            aplicationsTitle = lang_pt.aplications;
            return carregaMaisInfos2(nome, dados, nomeCompleto, nomeQuimico, nCas, aplicacoes, productDataTitle, characteristicsTitle, typeTitle, nameChemicalTitle, nCasTitle, aplicationsTitle)
        case 'EN':
            const lang_en = en.productPage;
            productDataTitle = lang_en.productData;
            characteristicsTitle = lang_en.characteristics;
            typeTitle = lang_en.type;
            nameChemicalTitle = lang_en.nameChemical;
            nCasTitle = lang_en.nCas;
            aplicationsTitle = lang_en.aplications;
            return carregaMaisInfos2(nome, dados, nomeCompleto, nomeQuimico, nCas, aplicacoes, productDataTitle, characteristicsTitle, typeTitle, nameChemicalTitle, nCasTitle, aplicationsTitle)
        case 'ES':
            const lang_es = es.productPage;
            productDataTitle = lang_es.productData;
            characteristicsTitle = lang_es.characteristics;
            typeTitle = lang_es.type;
            nameChemicalTitle = lang_es.nameChemical;
            nCasTitle = lang_es.nCas;
            aplicationsTitle = lang_es.aplications;
            return carregaMaisInfos2(nome, dados, nomeCompleto, nomeQuimico, nCas, aplicacoes, productDataTitle, characteristicsTitle, typeTitle, nameChemicalTitle, nCasTitle, aplicationsTitle)
        case 'ZH':
            const lang_zh = zh.productPage;
            productDataTitle = lang_zh.productData;
            characteristicsTitle = lang_zh.characteristics;
            typeTitle = lang_zh.type;
            nameChemicalTitle = lang_zh.nameChemical;
            nCasTitle = lang_zh.nCas;
            aplicationsTitle = lang_zh.aplications;
            return carregaMaisInfos2(nome, dados, nomeCompleto, nomeQuimico, nCas, aplicacoes, productDataTitle, characteristicsTitle, typeTitle, nameChemicalTitle, nCasTitle, aplicationsTitle)
    }
}

// VER MAIS DE CADA PRODUTO
function carregaMaisInfos2(nome, dados, nomeCompleto, nomeQuimico, nCas, aplicacoes, productDataTitle, characteristicsTitle, typeTitle, nameChemicalTitle, nCasTitle, aplicationsTitle) {
    let engloba = document.createElement("div");
    engloba.innerHTML = `
    <div>
        <h1>${nome}</h1>
    </div>
    <div>
        <h2>${productDataTitle}</h2>
        <p>${dados}</p>
    </div>
    <div>
        <h2>${characteristicsTitle}</h2>
        <p><span>${typeTitle} </span>${nomeCompleto} (${nome})</p>
        <p><span>${nameChemicalTitle} </span>${nomeQuimico}</p>
        <p><span>${nCasTitle} </span>${nCas}</p>
    </div>
    <div>
        <h2>${aplicationsTitle}</h2>
        <p>${aplicacoes}</p>
    </div>
    `

    return engloba.children;
}

async function carregaVerMais(produto) {
    const infosProduto = produto.verMais;
    const blocoInfosProd = await carregaMaisInfos(produto.nome, infosProduto.dados, infosProduto.nomeCompleto, produto.nomeQuimico, infosProduto.nCas, infosProduto.aplicacoes);
    document.querySelector(".category_product_block").style = "display: none";
    document.querySelector(".block_see_more").style = "display: block";
    const blocoInfos = document.querySelector(".block_see_more .see_more_background");
    for(let i = 0; i < blocoInfosProd.length; i++) {
        let clone = blocoInfosProd[i].cloneNode(true);
        blocoInfos.insertAdjacentElement('beforeend', clone);
    }
}

document.querySelector('.btn_form_box button').addEventListener('click', () => {
    const nome = document.querySelector('.input_block #name');
    const secName = document.querySelector('.input_block #secName');
    const company = document.querySelector('.input_block #company');
    const vecCampos = [nome, secName, company];

    if(validaInputs(vecCampos)) {
        window.open(`https://wa.me//5511910014777?text=Olá,%20sou%20${nome.value}%20${secName.value},%20da%20empresa%20${company.value},%20e%20gostaria%20de%20fazer%20um%20orçamento.`, '_blank');
    }else {
        nome.placeholder = "Preencha o campo.";
        secName.placeholder = "Preencha o campo.";
        company.placeholder = "Preencha o campo.";
    }
});

function validaInputs(campos) {

    for(let i = 0; i < campos.length; i++) {
        const campo = campos[i].value.split(" ").join("");
        if(campo == '') {
            return false;
        }  
    }

    return true;
}