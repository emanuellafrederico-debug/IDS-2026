   //chamando variaveis por id
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let botao = document.getElementById("botao");

    //criando a mensagem na tela
    botao.onclick = function () {
        let resultado = Number(num1.value) + Number(num2.value);
        document.getElementById("mensagem").textContent = "O seu resultado é: " + resultado + "...";
    };
