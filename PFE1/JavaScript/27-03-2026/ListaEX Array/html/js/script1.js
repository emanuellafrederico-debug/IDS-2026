let lista=[];

document.getElementById("btnAdicionar").addEventListener("click", function(){
    let valor = document.getElementById("valor").value;
    lista.push(valor);
    
    document.getElementById("resposta").innerText = lista;
});