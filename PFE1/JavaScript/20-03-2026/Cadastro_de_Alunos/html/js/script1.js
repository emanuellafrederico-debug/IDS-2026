let alunos = [];

window.onload = function () {
    this.document.getElementById("aluno").focus();
}

function adicionar() {
    let valorNome = document.getElementById("aluno").value;
    let valorNota1 = document.getElementById("nota1").value;
    let valorNota2 = document.getElementById("nota2").value;

    

    if (valorNome === "") {
        alert("Digite o nome do aluno!");
        return;
    }

    if ((valorNota1 === "") || (valorNota2 === "")) {
        alert("Digite uma nota válida!");
        return;
    }

    let aluno = {
        nome: valorNome,
        nota1: valorNota1,
        nota2: valorNota2
    };

    alunos.push(aluno);
    
    
    document.getElementById("resultado").innerText = "Aluno cadastrado!";
}


function listar() {
    let texto = "";

    let valorNome = document.getElementById("aluno").value;
    let valorNota1 = document.getElementById("nota1").value;
    let valorNota2 = document.getElementById("nota2").value;
    let valorMedia = (Number(valorNota1) + Number(valorNota2)/2);

    let aluno = {
        nome: valorNome,
        nota1: valorNota1,
        nota2: valorNota2,
        media: valorMedia,
    };

    alunos.forEach(function (item, index) {
        texto+= "RM:" + index + "  " + aluno.nome + " - " + "Nota 1: " + aluno.nota1 + " - " + "Nota 2: " + aluno.nota2;
    });

    document.getElementById("resultado").innerHTML = texto;
}


function buscar() {
    let valor = document.getElementById("aluno").value;

    if (alunos.includes(valor)) {
        let posicao = alunos.indexOf(valor);
        document.getElementById("resultado").innerText =
            "Aluno encontrado com o RM: " + posicao;
    } else {
        document.getElementById("resultado").innerText =
            "Aluno não encontrado.";
    }
}


function remover() {
    let valor = document.getElementById("aluno").value.toLowerCase();

    let indice = alunos.findIndex(function (item) {
        return item.toLowerCase() === valor;
    });

    if (indice !== -1) {
        let removido = alunos.splice(indice, 1);
        document.getElementById("resultado").innerText =
            "Aluno removido: " + removido;
    } else {
        document.getElementById("resultado").innerText =
            "Esse aluno não existe!";
    }
}

/*function adicionarNota() {
    let valor1 = document.getElementById("nota1").value;
    let valor2 = document.getElementById("nota2").value;
    let valor3 = document.getElementById("aluno").value;

    if (alunos.includes(valor3)) {
        document.getElementById("aluno").value = "";
        if ((valor1 === "") || (valor2 === "")) {
            alert("Digite uma nota válida!");
            return;
        }
        notas.push(valor1);
        notas.push(valor2);
        document.getElementById("nota").value = "";
        document.getElementById("resultado").innerText =
            "Nota atribuída.";
    } else {
        document.getElementById("aluno").value = "";
        document.getElementById("resultado").innerText =
            "Aluno não encontrado.";
    }
}*/