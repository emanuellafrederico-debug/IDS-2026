let lista=[1,2,3,4,5];
document.getElementById("resposta").innerText = lista;

document.getElementById("btnFiltrar").addEventListener("click", function(){
    let total = lista.reduce((soma, n)=>soma + n);
    
    document.getElementById("resposta").innerText = total;
});