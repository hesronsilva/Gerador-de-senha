
let sliderElement = document.querySelector("#slider");
let botaoElement = document.querySelector("#botao");

let tamanhoSenha = document.querySelector("#valor");
let senha = document.querySelector("#senha");

let containerSenha = document.querySelector("#container-senha");

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?";
let novaSenha = "";

tamanhoSenha.innerHTML = sliderElement.value;

slider.oninput = function(){
    tamanhoSenha.innerHTML = this.value;
}

function gerarSenha(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i)(
        pass += charset.charAt(Math.floor(Math.random() * n)));

    senha.innerHTML = pass;
    novaSenha = pass;
}

function copiarSenha(){
    navigator.clipboard.writeText(novaSenha);
    alert("Senha copiada");
}
