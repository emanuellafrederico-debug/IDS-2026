let lista=[13,24,31,12,16,64,24,52,78,976,2,6,7];
document.getElementById("resposta").innerText = lista;

document.getElementById("btnFiltrar").addEventListener("click", function(){
    let pares = lista.filter(n => n%2===0);
    
    document.getElementById("resposta").innerText = pares;
});