//resive la posicion del array que queremos acceder

let arrayString = ["lola", "paco", "mayo", "tapo"]
let arrayNumeros = [2, 3, 4, 5, 562, 3, 9, 1, 0]
let elemento =582
function at() {
 let indice= arrayString.at(-2)
return indice
}
console.log(at(arrayString))