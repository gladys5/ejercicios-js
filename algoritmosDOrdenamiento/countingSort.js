//ORDENAMIENTO POR CONTEO
//Ordenamos el conjunto de elementos agrupandolos con una clasificasion y luego la usamos para volver a armar el conjunto pero ya ordenado esta clasificasion o llaves usualmente son los mismos valores numericos de los elementos que queremos ordenar
// let array = [2, 1, 1, 0, 2, 4, 4, 0, 2, 8, 5, 7, 3, 2, 0, 1, 9]

// function countingSort(arr) {
//   let result = new Array(100).fill(0)

//   for (let i = 0; i < arr.length; i++) {
//     result[arr[i]]++
//   }

//   return result
// }

// console.log(countingSort(array))

// const countingSort2 = (arr, min, max) => {
//   const count = {}
//   for (let i = min; i <= max; i++) {
//     count[i] = 0
//   }
//   for (let i = 0; i < arr.length; i++) {
//     count[arr[i]] += 1
//   }

//   const sortedArr = []
//   for (let i = min; i <= max; i++) {
//     while (count[i] > 0) {
//       sortedArr.push(i)
//       count[i]--
//     }
//   }
//   return sortedArr
// }

// console.log(countingSort2([3, 6, 5, 5, 9], 3, 9))
let matrix = [
  [7, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]


function flippingMatrix(matrix) {
  // Write your code here
   let n = matrix.length / 2
   let max = 0
   let total = 0
   for (let i = 0; i < n; i++) {
     for (let j = 0; j < n; j++) {
       max = Number.MIN_VALUE
       max = Math.max(matrix[i][j], max)
      

       max = Math.max(matrix[i][2 * n - j - 1], max) 
       console.log(max)
       max = Math.max(matrix[2 * n - i - 1][j], max)
       max = Math.max(matrix[2 * n - i - 1][2 * n - j - 1], max)

       total += max
     }
   }
   return total
}
console.log(flippingMatrix([
  [7, 4, 3],
  [4, 4, 6],
  [9, 8, 9],
]))
