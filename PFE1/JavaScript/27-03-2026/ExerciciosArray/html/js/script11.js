let nomes = ["Zezinho", "Zuzuca", "Zoninho", "Zeca"];
const lista = document.getElementById("lista");

document.getElementById("btnMostrar").addEventListener("click", function () {
    nomes.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = `${index} - ${nome}`;
        lista.appendChild(li);
    })
});