function imprime() {
    let resultado = document.getElementById("resultado");
     resultado.innerHTML="";

    for (let i=1; i<=50; i++){
         if ((i % 2) === 0){
            resultado.innerText += i + " : O número é par. \n";
        } else {
            resultado.innerText += i + " : O número é ímpar. \n";
         }
    }
}