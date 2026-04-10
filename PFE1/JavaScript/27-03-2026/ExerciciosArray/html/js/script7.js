
document.getElementById("btnQuadrado").addEventListener("click", function(){
    let valor = document.getElementById("valor").value;
    let numeros = valor.split(",").map(n => Number(n));
    
    let quadrado = numeros.map(n => n*2);

    document.getElementById("resposta").innerHTML = quadrado;
});