function imprime() {
    let resultado = document.getElementById("resultado");
     resultado.innerHTML="";

    document.getElementById("resultado").innerText = "Números multiplos de 3:\n"
    for (let i=1; i<=100; i++){
         if ((i % 3) === 0){
            resultado.innerText +=  i + "\n";
        } 
    }
}