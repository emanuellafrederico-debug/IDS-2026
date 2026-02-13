   //chamando variaveis por id
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let botao = document.getElementById("botao");
    let mensagem = document.getElementById("mensagem");

    
    //verifica se os valores são nulos
    if(num1 === "" || num2 === "") {
        mensagem.textContent = "Favor preencher ambos os campos.";
        return;
    }
    /*
    let valor1 = Number(num1);
    let valor2 = Number(num2);

    //verifica se os valores são validos
    if(isNaN(valor1)||isNaN(valor2)) {
        document.getElementById("mensagem").textContent = "Favor digitar um valor válido."
        return;
    }*/

    //criando a mensagem na tela
    botao.onclick = function () {
        let resultado = Number(num1.value) + Number(num2.value);
        document.getElementById("mensagem").textContent = "O seu resultado é: " + resultado;
    }

/*
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let mensagem = document.getElementById("mensagem");

//verifica se os valores são nulos
if (num1 === "" || num2 === "") {
    mensagem.textContent = "Favor preencher ambos os campos";
    return;
}

if (isNaN(num1) || isNaN(num2)) {
    mensagem.textContent = "Digite valor valido"
    return;
}

botao.onclick = function () {
    let resultado = Number(num1.value) + Number(num2.value);
    mensagem.textContent = "O seu resultado é: " + resultado;
}*/