let idade = document.getElementById("num");
let resultado = document.getElementById("resultado");

window.onload = function(){
    this.document.getElementById("num").focus();
}

function confereIdade() {
   let valor = Number(num.value);
   
    if (idade==="") {
        document.getElementById("resultado").innerText = "Favor preencher o campo.";
    }
    

    if (valor>=18){
         document.getElementById("resultado").innerText = "Você é maior de idade.";
    } else{
         document.getElementById("resultado").innerText = "Você é menor de idade.";
    }
}
