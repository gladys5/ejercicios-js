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
        this.head.prev = newNode
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
  //agregando valores a la cola
  addToTail(data){
    //hacemos una instancia a nuestra clase nodo para obtener sus referencias data(el valor que prosesamos)el segundo valor corresponde a la cabeza pero como no la nesecitamos le pasamos null y la referencia a la cola 
    const newNode = new Node(data, null, this.tail)
   
    if (this.tail){
 //si la cola existe movemos los valores y pasamos el valor que queremos agregar correctamente portanto el valor que acabamos de crear va  a ser la nueva cola y la cola anterior el valor anterior de el nuevo nodo
 newNode.prev = this.tail
 //el valor siguiente  a la cola va  a ser el nuevo nodo
 this.tail.next =newNode
 this.tail = newNode
    }else {
        //si  no tenemos una cola cabeza y cola hacen referencia al mismo nodo
        this.tail=newNode
        this.head=newNode
    }
    //ingrementamos el tamanio
    this.size++
  }
  //implementar un valor en un lugar espesifico de la cola
  insertAt(data,index){
    //si el indice es mayor al tamanio de nuestra lista sera este un valor invalido al igual que si es menor a el indice 0
    if(index < 0 || index > this.size){
        return null
    }
    //las referencias a la cola y a la cabeza sera nula
    const newNode =new Node(data,null,null)
    //tendremos que hacer una interacion atravez de toda la lista hasta encontrar el indice correcto
    //tendremos que hacer referencia de dos valores 1. el valor actual que estamos revisando(current)que enpezara en la cabeza 2.el valor previo
    let current =this.head
    let previous
    if (index === 0) {
        //el valor siguiente es igual al actual
        newNode.next = current
        //el valor anterior va a ser el nuevo nodo
        current.prev =newNode
        //la cabeza sera igual al nuevo nodo
        this.head =newNode
    }else{
        //si el indice que estamos resiviendo es diferente haremos una iteracion para llegar a encontrar la posicion de nuestro valor
        for (let i = 0; i < index; i++) {
            //previous es igual al valor actual
        previous = current
        //el valor actual es igual siguiente nodo
        current= current.next
            
        }
        //el nodo siguiente de nuestro nuevo nodo va a ser el nodo actual
        newNode.next= current
        //la referencia anterior al nuevo nodo va a ser el valor anterior
        newNode.prev = previous
        //referencia al nodo actual es igual al nuevo nodo
        current.prev =newNode
        //la referencia al nodo siguiente de nuestro nodo anterior es igual al nuevo nodo
        previous.next = newNode
    }
    //incrementamos el tamanio de la lista
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
    return result += "X"
  }
}



const doubleLinkedList = new DoubleLinkedList()





doubleLinkedList.addToHead(3)
doubleLinkedList.addToHead(2)

doubleLinkedList.addToTail(7)
doubleLinkedList.addToTail(8)
doubleLinkedList.insertAt(4,2)




console.log(doubleLinkedList.print())
console.log(doubleLinkedList.reversePrint())