import navegacoes from '../geral/js/navegacoes.js';
navegacoes(4);

document.querySelector('.form_block #sent_button').addEventListener('click', () => {

    const nome = document.querySelector('.form_block #nome').value;
    const email = document.querySelector('.form_block #email').value;
    const assunto = document.querySelector('.form_block #assunto').value;
    const mensagem = document.querySelector('.form_block #msg').value;

});
