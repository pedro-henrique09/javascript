class Produto {
  constructor(nome, tamanho, preco) {
    this.nome = nome;
    this.tamanho = tamanho;
    this.preco = preco;
  }
}

const produtos = [];

produtos.push(new Produto("Camisa Azul", "P", 90));
produtos.push(new Produto("Camisa Amarelo", "P", 900));
produtos.push(new Produto("Camisa Vermelho", "P", 40));
produtos.push(new Produto("Camisa Flamengo", "G", 90));

console.log(produtos);
console.log(produtos.length);

let corte = produtos.slice(3);
console.log(corte);
