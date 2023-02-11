//las listas enlazadas dobles tienen una doble referencia una al nodo anterior y otra al nodo siguiente de cada nodo 

class Node{
    //el constructor  contiene 3 parametros  1. hace referencia a ala informacion almacenada , 2. al siguiente nodo y 3. al nodo anterior
constructor(data,next,prev){
    //inicializamos las referencias a cada nodo que resivimos en el constructor
    this.data = data
    this.next = next
    this.prev =prev
}

}

class DobleLinkedList {
  constructor() {
    //este constructor no resive parametros pero inicializamos dentro de este la cabeza(que es el primer elemento de la lista), cola(el ultimo elemento de la lista) y tamanio(que es la cantidad total de posiciones en la lista)
    this.head = null
    this.tail = null
    this.size = 0
  }
  //funcion que imprima desde la cabeza a la cola de la lista
  print() {
    //guardamos el valor actual
    let current = this.head
    //guardamos el resultado en una hilera de caracteres vacia
    let result = ""
    //mientras haya un valor actual
    while (current) {
      //resultado guardara el valor que este guardado en el nodo actual le agregamos la flecha en string para representar la secuencia
      result += current.data + "<->"
      //despues de guardar el nodo actual decimos que el nodo actual sera el nodo siguiente
      current = current.next
    }
    //cuando no haya nodos siguientes devolveremos el resultado y le agregamos una x para indicar que llegamos al final
    return (result += "X")
  }
  //funcion que imprima desde la cola a la cabeza de la lista

  reversePrint() {
    //guardamos el valor actual
    let current = this.tail
    //guardamos el resultado en una hilera de caracteres vacia
    let result = ""
    //mientras haya un valor actual
    while (current) {
      //resultado guardara el valor que este guardado en el nodo actual le agregamos la flecha en string para representar la secuencia
      result += current.data + '<->'
      //nos movemos al nodo anterior
      current=current.prev
    }
    // devolvemos el resultado indicando que ya no hay valores con una X
    return result += 'X'
  }
}
