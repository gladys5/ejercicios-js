// lista enlazada es una secuencia lineal construida por una secuencia de nodos en donde se guardan campos de datos  arbitrarios y una rederencia al siguiente nodo

//agregarlos en un lugar espesifico
//remover elementos
//remover a un lugar en espesifico
//la lista esta vacia
//el tamanio de la lista
//inprimir
class Node {
  constructor(data, next) {
    //data = la informacion que se guardara
    this.data = data
    //next = referencia al siguiente nodo
    this.next = next
  }
}
class LinkedList {
  constructor() {
    //la cabeza de la lista se inicializa en nulo porque empieza vacia
    this.head = null
    //como la lista empieza vacia su tamaño sera 0
    this.size = 0
  }
  //agregar elementos a la lista
  add(data){
    const newNode =new Node(data,null)
    //si la cabeza esta bacia establesemos la cabeza en newNode
    if (!this.head){
        this.head=newNode
    }
    //si hay elementos dentro de la lista iteramos hasta encontrar una referencia hacia el nodo que este en null
    else{
        //current es el valor actual de la cabeza
        let current=this.head
        //mientrar la cabeza tenga referencia al siguiente nodo osea mientrar exista
        while(current.next){
            //convertimos el valor de la cabeza en el siguiente nodo
            current=current.next
        }
        //cuando no encontremos la referencia al siguiente
        current.next=newNode
    }
    this.size++
  }
}
const linkedList=new LinkedList()
linkedList.add(30)
linkedList.add(30)
linkedList.add(30)
linkedList.add(30)
console.log(linkedList)
