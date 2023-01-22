//let arr = [5, 6, 2, 8, 7, 8, 9, 1, 4]

// function simpleArraySum(ar) {
//   // Write your code here

//   return ar.reduce((a, b) => a + b)
// }
// console.log(simpleArraySum(ar))

// let a = [1, 2, 3]
// let b = [3, 3, 1]

// function comparar(a, b) {
//   let alice = 0
//   let bob = 0
//   let puntos = []
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       alice++
//     }
//     if (a[i] < b[i]) {
//       bob++
//     }
//   }
//   puntos = [alice, bob]
//   return [puntos]
// }
// console.log(comparar(a, b))
// function aVeryBigSum(ar) {
// Write your code here
// let result = 0
// for (let i = 0; i < ar.length; i++) {
//   result += ar[i]
// }
// return result
//   return ar.reduce((a, b) => a + b)
// }
// // console.log(aVeryBigSum(ar))
let arr = [
  [7, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]
// function diagonalDifference(arr) {
//   let n = arr.length
//   let diagonalX = 0
//   let diagonalY = 0
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i === j) {
//         diagonalX += arr[i][j]
//         console.log(diagonalX)
//       }
//       if (i + j === n - 1) {
//         diagonalY += arr[i][j]
//         console.log(diagonalY)
//       }
//     }
//   }
//   return Math.abs(diagonalX - diagonalY)
// }

// console.log(diagonalDifference(arr))

// console.log(
//   processData([
//     [1, 2, 3],
//     [4, 5, 6],
//     [9, 8, 9],
//   ])
// )

// let arr = [-4, 3, -9, 0, 4, 1]
// function plusMinus(arr) {
//   // Write your code here

//   let numbers = [0, 0, 0]
//   arr.forEach((num) => {
//     if (num > 0) numbers[0] += 1
//     else if (num < 0) numbers[1] += 1
//     else numbers[2] += 1
//   })
//   numbers.forEach((num) => console.log((num / arr.length).toFixed(6)))

//   return
// }
// console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
// let arr = [7, 69, 2, 221, 8974]
// function mini(arr) {
//   let min = arr[0]
//   let max = arr[0]

//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i]
//     }
//     if (min > arr[i]) {
//       min = arr[i]
//     }
//     sum += arr[i]
//   }
//   let maxResult = sum - min
//   let minResult = sum - max
//   console.log(minResult, maxResult)
// }
// console.log(mini(arr))

// let s = "12:01:00PM"
// // function timeConversion(s) {
// let [time, part] = [s.substring(0, s.length - 2), s.substring(s.length - 2)]
// console.log(time, part)
// time = time.split(":").map(Number)
// console.log(time)
// if (part === "PM" && time[0] === 12) time[0] = 12
// if (part === "PM" && time[0] !== 12) time[0] = (time[0] + 12) % 24
// if (part === "AM" && time[0] === 12) time[0] = 0
// return time
//   .map(String)
//   .map((s) => s.padStart(2, "0"))
//   .join(":")
// // }

let a = [1, 2, 3, 2, 3, 6, 1, 10, 2, 3, 2, 3, 6, 1]
// function media(arr) {

//   let r =arr.sort((a, b) => a - b)
//   let b = r.slice(r.length/2)
//   let m =b[0]

//   console.log(m)

// }
// console.log(media(arr))
// function elDenmedio(arr, e) {
//   let inicioDelArreglo = 0
//   let finalDelArreglo = arr.length - 1
//   while (inicioDelArreglo <= finalDelArreglo) {
//     let indiceDenmedio = Math.floor(inicioDelArreglo + finalDelArreglo) / 2

//     if (arr[indiceDenmedio] === e) {
//       console.log(indiceDenmedio)
//       return indiceDenmedio
//     } else if (arr[indiceDenmedio] < e) {
//       console.log((inicioDelArreglo = indiceDenmedio + 1))
//     } else {
//       console.log(finalDelArreglo - 1)
//     }
//   }
//   return -1
// }
// console.log(elDenmedio(arr, 6))
// n+=arr[i] esto solo me junta todo en un string
// n.push(arr[i]) repite el array tantas veces como su indice [ 2 ]
//[2, 2][(2, 2, 3)][(2, 2, 3, 7)][(2, 2, 3, 7, 3)]
// function elUnico(a) {
//  let unique = a.filter(function (value) {
//    return a.indexOf(value) === a.lastIndexOf(value)
//  })
//   return unique[0] 
// }
// console.log(elUnico(a))
// function h(arr) {
//   let derecha
//   for (let index = 0; index < arr.length; index++) {
//    if (arr[index]===arr.length[0]) {
//     derecha=arr[index]+=arr.length+1
//     console.log(derecha)
//    }
     
//   }
// console.log(derecha) 
// }
// console.log(h(arr))
// function fib(n) {
//   let f=[0,1]
//   for (let index = 2; index < n; index++) {
//     const element = f[index-1]+f[index-2];
//     f.push(element)
//   }
//   return f
// }
// console.log(fib(9))
// function fibonacciRecursive(n){
// if(n==0){
//   return 0
// }
// if(n==1){
//   return 1
// }
// console.log( fibonacciRecursive(n-1)+fibonacciRecursive(n-2))
// return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
// }
// console.log(fibonacciRecursive(6))
// function potencias(base,exponente) {
//   for (let index = 1; index < exponente; index++) {
    
//    base = base*base;
//     // console.log(base)
//   }
//   return base
// }
// console.log(potencias(4,4))

// let memo =[]
// function fiboRecursivoMemorizado(n,memo) {
//   console.log(memo)
//   if(memo[n]!==undefined){
//     return memo[n]
//   }if(n<=1){
//     memo[n]=n
//     return n
//   }else{
//     let result = fiboRecursivoMemorizado(n-1,memo)+fiboRecursivoMemorizado(n-2,memo)
//     memo[n]=result
//     return result
//   }
// }
// console.log(fiboRecursivoMemorizado(50,memo))
 let memo =[0,1]
function linearFibo(n, memo) {

  for (let index = 2; index <= n; index++) {
  memo[index]=memo[index-2]+memo[index-1]
    
  }
  return memo[n]
}
console.log(linearFibo(50, memo))
