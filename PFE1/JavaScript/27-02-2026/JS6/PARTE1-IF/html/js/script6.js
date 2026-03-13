let nota = document.getElementById("num");
let resultado = document.getElementById("resultado");

window.onload = function(){
    this.document.getElementById("num").focus();
}

function confereNota() {
   let valor = Number(num.value);
   
    if (nota==="") {
        document.getElementById("resultado").innerText = "Favor preencher o campo.";
    }
    

    if (valor>=7) {
         document.getElementById("resultado").innerText = "Você passou.";
    } else if((valor<6.9) && (valor>=5)){
         document.getElementById("resultado").innerText = "Você ficou de recuperação.";
    } else if(valor<5){
        document.getElementById("resultado").innerText = "Você foi reprovado.";
    } else {
        document.getElementById("resultado").innerText = "Não foi possível identificar uma nota válida."
    }
}