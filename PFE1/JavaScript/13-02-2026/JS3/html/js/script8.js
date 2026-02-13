//criando variaveis e buscando com id
    let idade = document.getElementById("idade");
    let botao = document.getElementById("botao");
    let mensagem =  document.getElementById("mensagem");

    //criando a mensagem na tela
    botao.onclick = function() {
        if(idade < 18){
           mensagem.textContent = "Você é menor de idade."
        } else {
            mensagem.textContent = "Você é maior de idade."
        }
    };