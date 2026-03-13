let numero = document.getElementById("num");
let resultado = document.getElementById("resultado");

window.onload = function(){
    this.document.getElementById("num").focus();
}

 if (numero==="") {
        document.getElementById("resultado").textContent = "Favor preencher o campo.";
    }

function confereNum() {
    let valor = Number(num.value);

    if ((valor %= 2) === 0){
        document.getElementById("resultado").innerText = "O seu número é par.";
    } else {
        document.getElementById("resultado").innerText = "O seu número é ímpar.";
    }
}
