let lista = [];

document.getElementById("btnAdicionar").addEventListener("click", function(){ 
    let valor = document.getElementById("valor").value;
    lista.push(valor);
});

document.getElementById("btnMostrar").addEventListener("click", function () {
    let listado = lista.join('-')
    document.getElementById("resposta").innerText = listado;
});