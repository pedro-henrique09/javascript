let numero = parseInt(prompt("Insira um número!"));
for (let i = 1; i <= 10; i++) {
  let resultado = numero + i;
  alert(numero + "+" + i + "=" + resultado);
}

for (let i = 1; i <= 20; i++) {
  let inserirNome = prompt("Inserir nome(ou 'ESC' para sair):");

  alert("Turma N." + i + "Nome:" + inserirNome);
  if (inserirNome == "ESC") {
    break;
  }
}
