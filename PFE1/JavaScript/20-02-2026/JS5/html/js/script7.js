let nomes = [];
let input = document.getElementById("resposta");

window.onload = function(){
    this.document.getElementById("resposta").focus();
}

input.addEventListener("keypress",function(event){
    if (event.key === "Enter"){
        adicionarNomes();
    }
})

function adicionarNomes(){
    let nome = input.value;
    if (nome!==""){
        nomes.push(nome);

        input.value="";
        input.focus();
        window.alert("Nome adicionado com sucesso!");
    } else {
        window.alert("Favor insirir um nome!");
    }
}

function listarNomes(){
    let lista = document.getElementById("lista");
    lista.innerHTML="";

    for (let i=0; i<nomes.length; i++){
         lista.innerHTML += "<li>" + nomes[i] + "</li>";
     }
    this.document.getElementById("resposta").focus();
}

function removerNomes(){
    let nomeDigitado = document.getElementById("resposta").value;

    for (let i=0; i<nomes.length; i++){
        if(nomes[i]==nomeDigitado){
            nomes.splice(i, 1);
            window.alert("Nome removido com sucesso.");
            listarNomes();
            break;
        }
        
     }
    document.getElementById("resposta").focus();
    
}