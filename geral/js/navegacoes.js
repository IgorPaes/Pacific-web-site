export default function navegacoes(selecionado) {
    const buttonsNavSup = document.querySelectorAll('#nav_sup button');
    const buttonsNavInf = document.querySelectorAll('#ft_nav button');
    switch(selecionado) {
        case 1:
            buttonsNavSup[0].classList.add('selecionado');
            buttonsNavSup[0].insertAdjacentHTML('afterbegin', iconeLogo());
            buttonsNavInf[0].classList.add('selecionado');
            buttonsNavInf[0].insertAdjacentHTML('beforeend', underline());
        break;
        case 2:
            buttonsNavSup[1].classList.add('selecionado');
            buttonsNavSup[1].insertAdjacentHTML('afterbegin', iconeLogo());
            buttonsNavInf[1].classList.add('selecionado');
            buttonsNavInf[1].insertAdjacentHTML('beforeend', underline());
        break;
        case 3:
            buttonsNavSup[2].classList.add('selecionado');
            buttonsNavSup[2].insertAdjacentHTML('afterbegin', iconeLogo());
            buttonsNavInf[2].classList.add('selecionado');
            buttonsNavInf[2].insertAdjacentHTML('beforeend', underline());
        break;
        case 4:
            buttonsNavInf[3].classList.add('selecionado');
            buttonsNavInf[3].insertAdjacentHTML('beforeend', underline());
        break;
    }
    function iconeLogo() {
        return `
            <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="31" height="23.9766" transform="matrix(-1 0 0 1 31 0.927956)" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_966_32" transform="matrix(0.00251935 0 0 0.00325733 -0.0038696 0)"/></pattern>
            <image id="image0_966_32" width="400" height="307" xlink:href="data:image/png;base64,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"/></defs>
            </svg>    
        `
    }
    function underline() {
        return `
            <div class="txt_underline"></div>
        `
    }
}

let primeiroClick = true;
document.getElementById("drop_block").addEventListener('click', () => {
    document.querySelector('#icon_box_id svg').classList.toggle('ativo');
    const listaSelect = document.getElementById('select_list');
    listaSelect.style.display = (listaSelect.style.display === 'flex') ? 'none' : 'flex';
    if(primeiroClick) {
        primeiroClick = false;
        const opcoes = listaSelect.querySelectorAll('#select_list li');
        opcoes.forEach((opcao) => {        
            opcao.addEventListener('click', () => {
                const salvaImgPrincipal = document.querySelector('#ti_select img').getAttribute("src");
                const salvaTxtPrincipal = document.querySelector('#ti_select span').textContent;
                const ultImg = opcao.querySelector('img');
                const ultTxt = opcao.querySelector('span');
                
                document.querySelector('#ti_select img').setAttribute("src", ultImg.getAttribute("src"));
                document.querySelector('#ti_select span').textContent = ultTxt.textContent;
                ultImg.setAttribute("src", salvaImgPrincipal);
                ultTxt.textContent = salvaTxtPrincipal;
            
                listaSelect.style.display = 'none';
            });
        });
        document.addEventListener('click', (event) => {
            if(event.target.classList[0] === 'main_container') {
                listaSelect.style.display = 'none';
            }
        });
    }
});