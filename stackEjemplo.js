//nos dan una frace que puede o no traer palabras repetidas y tenemos que sacarlas del stack si estas estas estan 2 palabras repetidas juntas
class Stack{
    constructor(){
        this.items=[]
    }
    apilar(e){
        this.items.push(e)
    }
    desapilar(){
        this.items.pop()
    }
    //metodo complementario con el que podremos ver el ultimo elemento que se le aya entregado al stack
    ver(){
        return this.items[this.items.length-1]
    }
}

