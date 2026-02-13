let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");


botao.onclick = function (){
    let resultado = Number(num1.value) + Number(num2.value) + Number(num3.value);
    document.getElementById("mensagem").textContent = "A sua média é: " + resultado;
}