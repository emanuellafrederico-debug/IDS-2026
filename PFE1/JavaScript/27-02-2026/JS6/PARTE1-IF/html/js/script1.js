let numero = document.getElementById("num");
let resultado = document.getElementById("resultado");

window.onload = function(){
    this.document.getElementById("num").focus();
}

function confereNum() {
   let valor = Number(num.value);
   
    if (numero==="") {
        document.getElementById("resultado").innerText = "Favor preencher o campo.";
    }
    

    if (valor>0){
         document.getElementById("resultado").innerText = "O seu número é positivo.";
    } else if (valor<0){
        document.getElementById("resultado").innerText = "O seu número é negativo.";
    } else{
         document.getElementById("resultado").innerText = "O seu número é 0.";
    }
}

