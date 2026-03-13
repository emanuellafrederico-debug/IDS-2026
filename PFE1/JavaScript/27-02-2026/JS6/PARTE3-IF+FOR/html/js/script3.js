let numero = document.getElementById("numero");

let par = 0;
let impar = 0;

function quantosParesImpares() {
   for (let i = 1; i < 5; i++) {
      document.getElementById("num").value = "";
      let valor = Number(num.value);
      if (valor !== "") {
         if ((valor % 2) === 0) {
            par = (par + 1);
         } else {
            impar = (impar + 1);
         }
      } else {
         window.alert("Favor insirir um número.")
      }
   }
   document.getElementById("resultado").innerText += "Há, no total, " + par + " números pares, e " + impar + " números ímpares.";
}

