window.onload = function(){
    this.document.getElementById("escolha").focus();
}

function informacaoDaEstacao() {
    let valorEscolha = Number(escolha.value)
    switch (valorEscolha) {
        case 1:
            document.getElementById("imprimir").textContent = "Você escolheu primavera! Aqui estão algumas informações... \n Apresenta temperaturas amenas e agradáveis. Os dias começam a ficar mais longos, e as noites passam a ser mais curtas..";
            break;
        case 2:
            document.getElementById("imprimir").textContent = "Você escolheu verão! Aqui estão algumas informações... \n Apresenta temperaturas elevadas e dias mais longos que as noites. Essa estação do ano sucede a primavera e antecede o outono.";
            break;
        case 3:
            document.getElementById("imprimir").textContent = "Você escolheu outono! Aqui estão algumas informações... \n É considerado um período de transição e caracteriza-se pelo declínio das temperaturas, com exceção das regiões que se localizam próximo ao Equador.";
            break;
        case 4:
            document.getElementById("imprimir").textContent = "Você escolheu inverno! Aqui estão algumas informações... \n Caracteriza-se pela queda das temperaturas e, em alguns lugares do Hemisfério Sul, pela ocorrência de geadas e nevascas. Apresenta dias mais curtos e noite mais longas.";
            break;
        default:
            document.getElementById("imprimir").textContent = "Não foi possível identificar o seu resultado... Insira um número válido!";
            break;
    }
}