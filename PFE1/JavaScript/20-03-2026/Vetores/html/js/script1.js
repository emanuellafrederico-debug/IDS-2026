let produtos = [];


function adicionar() {
    let valor = document.getElementById("produto").value;

    if (valor === "") {
        alert("Digite um produto!");
        return;
    }
    produtos.push(valor);
    document.getElementById("resultado").innerText = "Produto adicionado!";
}


function listar() {
    let texto = "";

    produtos.forEach(function(item, index) {
        texto += index + " - " + item + "<br>";
    });

    document.getElementById("resultado").innerHTML = texto;
}


function buscar() {
    let valor = document.getElementById("produto").value;

    if (produtos.includes(valor)) {
        let posicao = produtos.indexOf(valor);
        document.getElementById("resultado").innerText =
            "Encontrado na posição: " + posicao;
    } else {
        document.getElementById("resultado").innerText =
            "Produto não encontrado!";
    }
}


function remover() {
    let valor = document.getElementById("produto").value.toLowerCase();

    let indice = produtos.findIndex(function(item) {
        return item.toLowerCase() === valor;
    });

    if (indice !== -1) {
        let removido = produtos.splice(indice, 1);
        document.getElementById("resultado").innerText =
            "Removido: " + removido;
    } else {
        document.getElementById("resultado").innerText =
            "Produto não existe!";
    }
}


function removerPrimeiro() {
    if (produtos.length === 0) {
        document.getElementById("resultado").innerText = "Lista vazia!";
        return;
    }

    let removido = produtos.shift();
    document.getElementById("resultado").innerText =
        "Removido: " + removido;
}


function removerUltimo() {
    if (produtos.length === 0) {
        document.getElementById("resultado").innerText = "Lista vazia!";
        return;
    }

    let removido = produtos.pop();
    document.getElementById("resultado").innerText =
        "Removido: " + removido;
}


function ordena() {
    produtos.sort();
    document.getElementById("resultado").innerText =
        "Lista ordenada!";
}


function maiuscula() {
    produtos = produtos.map(function(item) {
        return item.toUpperCase();
    });

    document.getElementById("resultado").innerText =
        "Todos em MAIÚSCULO!";
}


function listarFormatado() {
    let lista = produtos.map(function(item) {
        return "Produto: " + item;
    });

    document.getElementById("resultado").innerText =
        lista.join(" | ");
}
