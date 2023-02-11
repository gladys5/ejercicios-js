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

class DoubleLinkedList {
  constructor() {
    //este constructor no resive parametros pero inicializamos dentro de este la cabeza(que es el primer elemento de la lista), cola(el ultimo elemento de la lista) y tamanio(que es la cantidad total de posiciones en la lista)
    //mientras la lista este vacia this.head y tail apuntaran a null mientras que size a puntara a 0
    this.head = null
    this.tail = null
    this.size = 0
  }
  //agregamos informacion a la cabeza
  addToHead(data) {
    //hacemos una instancia a nuestra clase nodo para obtener sus referencias data(el valor que aqui agregaremos) y head(el inicio de la lsita)como no requerimos la cola nuestro ultima referencia apunta a nulo esto es necesario para evitar esperar esta referencia
    const newNode = new Node(data, this.head, null)
    if (this.head) {
        //la referencia al nodo siguiente del nodo que acabamos de crear va a serla cabeza
        newNode.next = this.head
        //el valor anterior a la cabeza es igual al nuevo nodo
        this.prev = newNode
        //la cabeza de nuestra lista enlaza ya no va a ser la cabeza anterior si no que sera el nuevo nodo que acabamos de crear
        this.head =newNode
    }else{
      //cuando solo tengamos un valor la cabeza como la cola apuntara al mismo nodo
      this.head = newNode
      this.tail = newNode
    }
    //al final ingrementamos el tamanio de nuestra lista
    this.size++
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
      result += current.data + "<->"
      //nos movemos al nodo anterior
      current = current.prev
    }
    // devolvemos el resultado indicando que ya no hay valores con una X
    return (result += "X")
  }
}



const doubleLinkedList = new DoubleLinkedList()
doubleLinkedList.addToHead(3)


console.log(doubleLinkedList.print())