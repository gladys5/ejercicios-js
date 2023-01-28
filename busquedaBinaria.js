// se parte de un pibote en las esquinas y otro en el medio
//el arreglo ya deve estar ordenado
//

function busquedaBinaria(arregloOrdenado,elemento) {
    let inicio =0
    let fin =arregloOrdenado.length-1
    while (inicio<=fin) {
        let mitadDelArreglo=Math.floor((inicio + fin)/2)
        if (arregloOrdenado[mitadDelArreglo]===elemento) {
            return mitadDelArreglo
        }else if(arregloOrdenado[mitadDelArreglo]<elemento){
          inicio= mitadDelArreglo + 1
        }else{
            fin = mitadDelArreglo -1
        }
        return -1
    }
}
console.log(busquedaBinaria([1, 2, 3, 4, 5, 6, 7], 4))