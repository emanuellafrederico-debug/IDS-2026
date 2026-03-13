window.onload = function(){
    this.document.getElementById("escolha").focus();
}

function informacaoDoProduto() {
    let valorEscolha = Number(escolha.value)
    switch (true) {
        case [1].includes(valorEscolha):
            document.getElementById("imprimir").textContent = "Isso é um alimento não-perecível.";
            break;
        case [2 , 3, 4].includes(valorEscolha):
            document.getElementById("imprimir").textContent = "Isso é um alimento perecível.";
            break;
        case [5, 6].includes(valorEscolha):
            document.getElementById("imprimir").textContent = "Isso é um item de vestuário.";
            break;
        case [7].includes(valorEscolha):
            document.getElementById("imprimir").textContent = "Isso é um item de higiene pessoal.";
            break;
        case [8, 9 , 10, 11, 12, 13, 14, 15].includes(valorEscolha):
            document.getElementById("imprimir").textContent = "Isso é um item de limpeza e utensílios domésticos.";
            break;
        default:
            document.getElementById("imprimir").textContent = "Não foi possível identificar o código... Insira um código válido!"
            break;
    }
}