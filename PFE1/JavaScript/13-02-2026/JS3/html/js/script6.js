
    let num = document.getElementById("num").value;
    let mensagem = getElementById("mensagem");
    let botao = document.getElementById("botao");

    if (num==="") {
        document.getElementById("mensagem").textContent = "Favor preencher ambos o campo.";
        mensagem.style = "Orange";
        return;
    }

    let resultado = Number(num);

    if(num>0){
        mensagem.textContent = "O número é positivo"
        mensagem.style = "Green";
    } else {
        mensagem.textContent = "O número é negativo"
        mensagem.style = "Red";
    };

     botao.onclick = function () {
        let resultado = Number(num.value);
        document.getElementById("mensagem").textContent = "O seu resultado é: " + resultado + "...";
    };
