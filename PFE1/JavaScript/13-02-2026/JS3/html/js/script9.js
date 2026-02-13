//criando variaveis e buscando com id
    let nota = document.getElementById("nota");
    let botao = document.getElementById("botao");
    let mensagem =  document.getElementById("mensagem");

    //criando a mensagem na tela
    botao.onclick = function() {
        if(nota >= 6) {
           mensagem.textContent = "Você foi aprovado."
        } else {
            mensagem.textContent = "Você foi reprovado."
        }
    };