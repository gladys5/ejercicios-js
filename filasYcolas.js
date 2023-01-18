//Fila es una secuencia de elementos en la que la operacion  de insercion (enqueue)se realiza por un extremo y la operacion de extracion (dequeue)por el otro FIFO 

class Queue {
  constructor() {
    this.items = {}
    this.front = 0
    this.end = 0
  }
  //  La funcion enqueue se encarga de resivir valores e introducirlos dentro de el objeto items,require resivir un paramentro que es  el del valor  que se introducira  ala fila
  enqueue(data) {
    this.items[this.end] = data
    this.end++
  }
  // dequeue no resive parametros permite eliminar valores o sacar valores de la fila
  dequeue() {
    //revisa si la fila esta vacia retorna null

    if (this.front === this.end) {
      return null
    }
    //si tenemos valores dentro de la fila creamos la variable data y la igualamos a el objeto items en this.from porque quiere decir que es el primer elemento que entro y por esto deveria ser el primero en salir
    const data = this.items[this.front]
    //borramos la informacion que sale de la fila
    delete this.items[this.front]
    //le sumamos un valor para que apunte al siguiente valor que al inicio sera 1 y al final retornamos data
    this.front++
    return data
  }
  //obtenemos el tamanio de la fila
  getSize() {
    //si la fila esta vacia nos retorna 0 si la fila tiene elementos retorna el tamanio total de la fila
    return this.end - this.front
  }
  //si cuando se llame a getsize, este devuelve 0, no hay valores dentro de la fila,entonces retornara true y false de lo contrario

  isEmpty() {
    if (this.getSize() === 0) {
      return true
    } else {
      return false
    }
  }
  //obtenemos el primer valor de la fila sin sacarlo nesesaria mente
  peek() {
    //si getSize esta vacio devuelve null
    if (this.getSize() === 0) {
      return null
    }
    //si getsize tiene valores retorna this.from que es el principio de la fila
    return this.items[this.front]
  }
  print() {
    if (this.getSize() === 0) {
      return null
    }
    let result = ""
    for (let index = this.front; index < this.end; index++) {
      result = this.items[index]
    }
    return result
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

console.log(queue.dequeue()) // retorna el objeto eliminado

console.log(queue.getSize()) //retorna el tamanio de la fila
console.log(queue.isEmpty()) //verifica que este no este vacia
console.log(queue.peek()) //regresa los valores
console.log(queue.print()) //

//console.log(queue)//Queue { items: {}, front: 0, end: 0 }
