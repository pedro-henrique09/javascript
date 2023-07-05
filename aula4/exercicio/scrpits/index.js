let idade1 = Number(prompt("Insira a idade do aluno 1"));
let idade2 = Number(prompt("Insira a idade do aluno 2"));
let idade3 = Number(prompt("Insira a idade do aluno 3"));

function calcularMedia(a, b, c) {
  const resultadoMedia = (a + b + c) / 3;
  console.log("A média das idades é: " + resultadoMedia);
}

calcularMedia(idade1, idade2, idade3);
