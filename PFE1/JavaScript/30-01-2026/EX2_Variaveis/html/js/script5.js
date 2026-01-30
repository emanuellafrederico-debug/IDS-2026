var botao = document.getElementById('botao');
var entrada1 = document.getElementById('entrada1');
var entrada2 = document.getElementById('entrada2');
var saida = document.getElementById('saida');


botao.onclick = function() {
    var resultado = Number(entrada1.value) + Number(entrada2.value);
    saida.textContent = "O resultado é: " + resultado;
};