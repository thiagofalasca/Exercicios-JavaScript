class Fila {
  constructor() {
    this.itens = [];
  }

  enqueue(item) {
    this.itens.push(item);
  }

  isEmpty() {
    return this.itens.length == 0;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    return this.itens.shift();
  }

  front() {
    if (this.isEmpty()) return undefined;
    return this.itens[0];
  }
  rear() {
    if (this.isEmpty()) return undefined;
    return this.itens[this.itens.length - 1];
  }
}

const fila = new Fila();
fila.enqueue('Ferrari');
fila.enqueue('Masserati');
fila.enqueue('Camaro');
fila.enqueue('fusca');
fila.dequeue();

console.table(fila.itens);
console.log(fila.isEmpty());
console.log(fila.front());
console.log(fila.rear());
