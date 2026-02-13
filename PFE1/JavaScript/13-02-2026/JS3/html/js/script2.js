function mostrarMensagem(){
    //criando variaveis e buscando com id
    let nome = document.getElementById("nome");
    let botao = document.getElementById("botao");
    let mensagem = document.getElementById("mensagem");

    //criando a mensagem na tela
    botao.onclick = function() {
        mensagem.textContent = "Olá " + nome.value + ".......";
    };
}
