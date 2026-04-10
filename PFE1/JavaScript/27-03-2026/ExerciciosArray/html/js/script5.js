let lista=[13,24,31,12,16,64,24,52,78,976,2];
document.getElementById("resposta").innerText = lista;

document.getElementById("btnOrdenar").addEventListener("click", function(){
    lista.sort((a, b) => a-b);
    
    document.getElementById("resposta").innerText = lista;
});