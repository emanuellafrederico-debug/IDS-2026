
function calculadora() {
    let imprimir = document.getElementById("imprimir");
    let resultado;

    valor1 = Number(num1.value);
    valor2 = Number(num2.value);

    escolha = Number(escolha.value);

    switch (escolha) {
        case 1:
            resultado = ((valor1 + valor2) / 2);
            imprimir.textContent = "O resultado da sua média é: " + resultado;
            break;
        case 2:
            resultado = (valor1 - valor2);
            imprimir.textContent = "O resultado do seu resto é: " + resultado;
            break;
        case 3:
            resultado = (valor1 * valor2);
            imprimir.textContent = "O resultado do seu produto é: " + resultado;
            break;
        case 4:
            resultado = (valor1 / valor2);
            imprimir.textContent = "O resultado da sua divisão é: " + resultado;
            break;
            default:
                imprimir.textContent = "Não foi possível identificar sua escolha... tente novamente. "
                break;
    }
}

