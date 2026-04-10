let lista=[];

document.getElementById("btnAdicionar").addEventListener("click", function(){ 
    let valor = document.getElementById("valor").value;
    lista.push(valor);
    document.getElementById("resposta").innerText = lista;
});

document.getElementById("btnRemover").addEventListener("click", function(){
    let valor = document.getElementById("valor").value;
    let posicao = lista.indexOf(valor);
    if (posicao != -1){
       lista.splice(posicao,1);
    }
    resposta.innerText = lista;
});