let palavra = prompt("Insira uma palavra");
let cor = "Azul";
if (palavra === "Azul") {
  console.log("A palavra é Azul");
} else {
  console.log("A palavra é", palavra);
}

let numero = prompt("Insira um número");

if (numero > 1000) {
  alert("O numero inserido é maior que 1000");
} else if (numero < 1000) {
  console.log("O número é menor que 1000");
}

let numero2 = prompt("Insira um segundo número");

if (numero2 > 10 && numero2 < 50) {
  alert("O numero inserido está entre 10 e 50");
}
