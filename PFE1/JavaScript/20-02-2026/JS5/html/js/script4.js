let nomes = [];

function adicionarNomes(){
    let nomeDigitado = document.getElementById("resposta").value;
    if (nomeDigitado!== "") {
        nomes.push(nomeDigitado);
        document.getElementById("resposta").value = "";
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

}
