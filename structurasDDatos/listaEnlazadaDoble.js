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

class DobleLinkedList{
    constructor(){
        //este constructor no resive parametros pero inicializamos dentro de este la cabeza(que es el primer elemento de la lista), cola(el ultimo elemento de la lista) y tamanio(que es la cantidad total de posiciones en la lista) 
        this.head = null
        this.tail = null
        this.size =0
        
    }
}