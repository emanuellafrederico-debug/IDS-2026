let numero = document.getElementById("num");

function imprime() {
    let resultado = document.getElementById("resultado");
     resultado.innerHTML="";

    for (let i=1; i<=10; i++){
        valor = Number(num.value);
        let multiplicacao =  (valor * i);
        resultado.innerText += valor + "x" + i + "= " + multiplicacao + "\n";
    }
}