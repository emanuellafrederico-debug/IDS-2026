let numero = document.getElementById("num");

function imprime() {
    let resultado = document.getElementById("resultado");
     resultado.innerHTML="";
     valor = Number(num.value);
     let soma = 0;

    for (let i=0; i<=valor; i++){
        soma =  (i + soma);
    }
     resultado.innerText += "A sua somatória é igual à: " + soma;
}