
// Tela de login


var formulario_login = document.querySelector('#login');
var formulario_registro = document.querySelector('#registro');
var btn_cor = document.querySelector('.btn-cor');

// Clique no botão de login
document.querySelector('#btn-login').addEventListener('click', () => {
    // Move o formulário de login para a esquerda
    formulario_login.style.left = "25px";
    // Move o formulário de registro para a direita
    formulario_registro.style.left = "450px";
    // Move o botão para a posição inicial
    btn_cor.style.left = "0px";
    btn_cor.style.width = "108px"; 
});

// Clique no botão de registro
document.querySelector('#btn-registro').addEventListener('click', () => {
    // Move o formulário de login para a esquerda (fora da tela)
    formulario_login.style.left = "-450px";
    // Move o formulário de registro para a esquerda
    formulario_registro.style.left = "25px";
    // Move o botão de cor para a nova posição
    btn_cor.style.left = "106px";
    btn_cor.style.width = "140px"; 
});












