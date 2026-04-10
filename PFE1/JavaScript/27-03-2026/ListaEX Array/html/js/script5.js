let lista=[];

document.getElementById("btnAdicionar").addEventListener("click", function(){ 
    let valor = document.getElementById("valor").value;
    lista.push(valor);
    document.getElementById("resposta").innerText = lista;
});

document.getElementById("btnBuscar").addEventListener("click", function(){
    let valor = document.getElementById("valor").value;
    let posicao = lista.indexOf(valor);
    if (posicao != -1){
       resposta.innerText = "Valor encontrado na posição " + posicao + "!";
    }
    else {
        alert("Valor não encontrado!");
    }
});