//shift,unshift ,pop y push son metodos mutables

let arrayString = ["lola", "paco", "mayo", "tapo"]
let arrayNumeros = [2, 3, 4, 5, 562, 3, 9, 1, 5]
let elemento = 5
//arrayNumeros.unshift("pepito")
let eliminado =arrayNumeros.shift()//elimina el primer elemento si se require inmutabilidad es mejor usar slice
//let metodoPush = arrayNumeros.push(arrayString[0])
//let metodoPop =arrayNumeros.pop()//elimina el ultimo elemento
console.log(eliminado)

//console.log(metodoPop)//0
//console.log(metodoPush)//10


console.log(arrayNumeros)