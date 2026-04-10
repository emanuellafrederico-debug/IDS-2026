let lista=[];

window.onload = function(){
    this.document.getElementById("valor").focus();
}

document.getElementById("btnAdicionar").addEventListener("click", function(){ 
    let valor = document.getElementById("valor").value;

    if (valor !== ""){
        lista.push(valor);
        window.alert("Adicionado com sucesso!");
        document.getElementById("resposta").innerText = lista;
    } else {
        window.alert("Digite algo!");
    }
    document.getElementById("valor").value = "";
});

document.getElementById("btnRemover").addEventListener("click", function remove(){
    let valor = document.getElementById("valor").value;
    let posicao = lista.indexOf(valor);
    if (posicao != -1){
       lista.splice(posicao,1);
    }
    else {
        alert("Valor não encontrado! Digite um valor válido.");
    }
    resposta.innerText = lista;
});