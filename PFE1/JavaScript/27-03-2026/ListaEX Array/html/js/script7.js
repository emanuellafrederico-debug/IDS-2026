let listaLetra=[];
let listaNum=[];

document.getElementById("btnAdicionar1").addEventListener("click", function(){ 
    let valor = document.getElementById("valor1").value;
    listaLetra.push(valor);
    document.getElementById("resposta1").innerText = listaLetra;
});

document.getElementById("btnOrdenar1").addEventListener("click", function(){
    listaLetra.sort();
    document.getElementById("resposta1").innerText = listaLetra;
});

document.getElementById("btnAdicionar2").addEventListener("click", function(){ 
    let valor = document.getElementById("valor2").value;
    listaNum.push(valor);
    document.getElementById("resposta2").innerText = listaNum;
});

document.getElementById("btnOrdenar2").addEventListener("click", function(){
    listaNum.sort((a, b) => a-b);
    document.getElementById("resposta2").innerText = listaNum;
});