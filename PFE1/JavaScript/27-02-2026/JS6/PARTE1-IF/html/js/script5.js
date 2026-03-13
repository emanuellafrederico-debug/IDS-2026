let numero1 = document.getElementById("num1");
let numero2 = document.getElementById("num2");
let numero3 = document.getElementById("num3");
let resultado = document.getElementById("resultado");

function confereMaiorMenor() {
   let valor1 = Number(num1.value);
   let valor2 = Number(num2.value);
   let valor3 = Number(num3.value);
   
    if ((numero1==="") || (numero2==="") || (numero3==="")) {
        document.getElementById("resultado").innerText = "Favor preencher o campo.";
    }
    

    if ((valor1>valor2) && (valor1>valor3)) {
         document.getElementById("resultado").innerText = "O primeiro valor é maior... " + valor1 + " é maior que " + valor2 + " e " + valor3;
    } else if((valor2>valor1) && (valor1>valor3)){
         document.getElementById("resultado").innerText = "O segundo valor é maior..." + valor2 + " é maior que " + valor1 +  " e " + valor3;
    } else if((valor3>valor1) && (valor3>valor1)){
        document.getElementById("resultado").innerText = "O terceiro valor é maior..." + valor3 + " é maior que " + valor1 +  " e " + valor2;
    } else {
        document.getElementById("resultado").innerText = "Os valores são iguais..."
    }
}