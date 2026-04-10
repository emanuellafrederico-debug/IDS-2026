let lista=[];

document.getElementById("btnAdicionar").addEventListener("click", function(){
    let valor = document.getElementById("valor").value;
    lista.unshift(valor);
    
    document.getElementById("resposta").innerText = lista;
});