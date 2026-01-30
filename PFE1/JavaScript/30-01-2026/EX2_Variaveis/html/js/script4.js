var botao = document.getElementById('botao');
var entrada = document.getElementById('entrada');
var saida = document.getElementById('saida');

botao.onclick = function() {
    saida.textContent = "Você digitou: " + entrada.value;
    alert(entrada.value);
};