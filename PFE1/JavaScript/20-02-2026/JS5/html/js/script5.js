let nomes = [];

window.onload = function(){
    this.document.getElementById("resposta").focus();
}

function adicionarNomes(){
    let nomeDigitado = document.getElementById("resposta").value.trim();

    if (nomeDigitado!== "") {
        nomes.push(nomeDigitado);
        document.getElementById("resposta").value = "";
        document.getElementById("resposta").focus();
        window.alert("Nome adicionado com sucesso!");
    } else {
        window.alert("Favor insirir um nome!");
    }
}

function listarNomes(){
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i=0; i<nomes.length; i++){
        lista.innerHTML += "<li>" + nomes[i] + "</li>";
    }

    document.getElementById("resposta").focus();
}