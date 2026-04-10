let lista=["banana","uva","maça","limão"];
document.getElementById("resposta").innerText = lista;

document.getElementById("btnRemover").addEventListener("click", function(){
    lista.pop();
    
    document.getElementById("resposta").innerText = lista;
});