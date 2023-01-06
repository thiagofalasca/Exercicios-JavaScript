class Pilha {
  constructor() {
    this.itens = [];
  }

  push(item) {
    this.itens.push(item);
  }
  pop() {
    this.itens.pop();
  }
  top() {
    return this.itens[this.itens.length - 1];
  }
  isEmpty() {
    return this.itens.length == 0;
  }
}

const pilha = new Pilha();

pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40);
pilha.pop();

console.log('Elemento do topo: ' + pilha.top());
console.table(pilha.itens);
console.log('Pilha vazia? ' + pilha.isEmpty());