function imprime() {
    let resultado = document.getElementById("resultado");
     resultado.innerHTML="";

    for (let i=10; i>=1; i--){
    resultado.innerText += i + "ㅤ";
    }
}