// lista ordenada o estructura de datos que permite almacenar y recuperar datos y el modo de acceso a sus elementos es  de tipo LIFO
class Stack {
  //this.item almacena toda la informacion
  constructor() {
    this.items = {}
    //el ultimo elemento de la fila
    this.top = 0
  }
  //lo que vamos a insertar
  push(data) {
    //aumentamos el tope de la fila
    this.top++
    //introducimos los datos en el valor de this.top
    this.items[this.top]
  }
  //sacara el elemento siguiente de la fila
  pop() {
    let deletedData
    //si this.top es diferente de 0 es que hay elementos  
    if (this.top) {

      deletedData = this.items[this.top]
      //eliminamos el valor
      delete this.items[this.top]
      //disminuimos por el valor eliminado 
      this.top--
      //regresamos el valor eliminado
      return deletedData
    }
  }
}
const stack = new Stack()
stack.push("platillo #1")
console.log(stack)
