function imprime() {
    let resultado = document.getElementById("resultado");
     resultado.innerHTML="";

    for (let i=1; i<=10; i++){
    resultado.innerText += i + "ㅤ";
    }
}