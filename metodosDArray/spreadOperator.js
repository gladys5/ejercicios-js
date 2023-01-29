//el operador spread copia el array original 
let arrayNumeros = [2, 3, 4, 5, 562, 3, 9, 1, 5]
let arrayString = ["lola", "paco", "mayo", "tapo"]



function suma(a,b,c) {
 
 return  a + b + c 
}
console.log(suma(...arrayNumeros))
let concatenacion = [...arrayNumeros,"gallina", ...arrayString]
console.log(concatenacion)
let copia =[...arrayString]
console.log(copia)


