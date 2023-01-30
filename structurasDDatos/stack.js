class Stack{
    constructor(){
      this.items =[]
    }
    apilar(e){
        this.items.push(e)
    }
    desapilar(){
        this.items.pop()
    }
}
const stack = new Stack()
stack.apilar("casa")
stack.apilar("casa")
stack.apilar("casa")
stack.apilar("casa")
stack.apilar("cas")
stack.desapilar()
console.log(stack.items)
//console.log(desapilar)