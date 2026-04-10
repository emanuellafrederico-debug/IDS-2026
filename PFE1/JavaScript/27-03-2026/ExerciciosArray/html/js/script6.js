let lista=["banana","uva","maça","limao","maracujá","romã","melancia","laranja"];
document.getElementById("resposta").innerText = lista;

document.getElementById("btnTransformar").addEventListener("click", function(){
    let resultado = lista.map(n => n.toUpperCase());
    
    document.getElementById("resposta").innerText = resultado;
});