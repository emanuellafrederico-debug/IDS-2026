let botao = document.getElementById("botao")

botao.onclick = function mostrar(){
    let valor = document.getElementById("texto").value;
    document.getElementById("resultado").innerHTML = valor;
}