let botao = document.getElementById("botao");

botao.onclick = function mostrarNomes(){
    let nomes = ["josézinho", "john lenon", "diano", "ville valo", "serj", "fabiana", "lelolelo","ze da silva"]
    document.getElementById("lista").innerHTML = "";

    for (let i=0; i<nomes.length; i++){
        lista.innerHTML += "<li>" + nomes[i] + "</li>";
    }
}