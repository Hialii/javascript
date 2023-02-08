class Queue {
   constructor() {
      this.data = [];
   }

   enqueue(item) {
      this.data.push(item);
      console.log(`${item} chegou na fila`);
   }

   dequeue() {
      const item = this.data.shift()
      console.log(`${item} saiu da fila`)
   }
}

const fila = new Queue();

fila.enqueue("José");
fila.enqueue("Amanda");
fila.enqueue("Bianca");

fila.dequeue();
fila.dequeue();
fila.dequeue();