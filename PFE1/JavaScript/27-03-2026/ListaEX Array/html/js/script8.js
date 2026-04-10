let listaLetra=[];
let listaNum=[];

document.getElementById("btnAdicionar1").addEventListener("click", function(){ 
    let valor = document.getElementById("valor1").value;
    listaLetra.push(valor);
    document.getElementById("resposta1").innerText = listaLetra;
});

document.getElementById("btnInverter1").addEventListener("click", function(){
    listaLetra.sort();
    listaLetra.reverse();
    document.getElementById("resposta1").innerText = listaLetra;
});

document.getElementById("btnAdicionar2").addEventListener("click", function(){ 
    let valor = document.getElementById("valor2").value;
    listaNum.push(valor);
    document.getElementById("resposta2").innerText = listaNum;
});

document.getElementById("btnInverter2").addEventListener("click", function(){
    listaNum.sort((a, b) => b-a);
    document.getElementById("resposta2").innerText = listaNum;
});