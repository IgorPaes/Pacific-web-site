function navegacao(selecionado) {
    const itensNav = document.querySelectorAll('.top_nav button');
    switch(selecionado) {
        case 1:
            itensNav[0].classList.add('selecionado');
        break;
        case 2:
            itensNav[1].classList.add('selecionado');
        break;
        case 3:
            itensNav[2].classList.add('selecionado');
        break;
    }
    `
        123
    `
}

let primeiraVez = true;
document.getElementById("bloco_drop").addEventListener('click', () => {
    document.querySelector('#icon_box_id svg').classList.toggle('ativo');
    const listaSelect = document.getElementById('lista_select');
    listaSelect.style.display = (listaSelect.style.display === 'flex') ? 'none' : 'flex';
    if(primeiraVez) {
        primeiraVez = false;
        const options = listaSelect.querySelectorAll('#lista_select li');
        options.forEach((option) => {        
            option.addEventListener('click', () => {      
  
                // ARRUMAR INVERSÃO DE BANDEIRAS
                // const imgPrincipal = document.querySelector('#ti_select img');
                // const txtPrincipal = document.querySelector('#ti_select span').textContent;

                // const ultImg = option.querySelector('img');
                // const ultTxt = option.querySelector('span').textContent;
                
                // imgPrincipal.setAttribute("src", ultImg.getAttribute("src"));
                // txtPrincipal = ultTxt;

                // ultImg.setAttribute("src", imgPrincipal.getAttribute("src"));
                // ultTxt = txtPrincipal;
                
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