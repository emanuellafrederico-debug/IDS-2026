function imprime() {
    let resultado = document.getElementById("resultado");
     resultado.innerHTML="";

    for (let i=2; i<=20; i+=2){
    resultado.innerText += i + "ㅤ";
    }
}