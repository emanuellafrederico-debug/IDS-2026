   //chamando variaveis por id
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let botao = document.getElementById("botao");
    let mensagem =  document.getElementById("mensagem");

    //criando a mensagem na tela
    botao.onclick = function () {
        if(num1 > num2) {
           mensagem.textContent = "O primeiro número é maior."
        } else {
            mensagem.textContent = "O segundo número é maior."
        }
    };