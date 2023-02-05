// array = [
//   /*"c"*/
// ]
// //let x= ""
// let m = !((true && false) || true)

// console.log(m)

// console.log(2 + 2 * 2) // -> 6
// console.log(2 + 2 * 2) // -> 6
// console.log((2 + 2) * 2) // -> 8

// let str = "123"
// let n1 = +str
// let n2 = -str
// let n3 = -n2
// let n4 = +"abcd"

// console.log(`${str} : ${typeof str}`) // -> 123 : string
// console.log(`${n1} : ${typeof n1}`) // -> 123 : number
// console.log(`${n2} : ${typeof n2}`) // -> -123 : number
// console.log(`${n3} : ${typeof n3}`) // -> 123 : number
// console.log(`${n4} : ${typeof n4}`) // -> NaN : number

// console.log(0.2 + 0.1) // 0.30000000000000004
// console.log(0.2 * 0.1) // 0.020000000000000004
// console.log(0.3 / 0.1) // 2.9999999999999996
// console.log(n1++)
// console.log(n1)
// n1 = n1 + 1
// console.log(++n1)
// n1 = n1 + 1
// console.log(n1)
// console.log(true && 1991) // -> 1991
// console.log(false && 1991) // -> false
// console.log(2 && 5) // -> 5
// console.log(0 && 5) // -> 0
// console.log("Alice" && "Bob") // -> Bob
// console.log("" && "Bob") // -> empty string

// let nr = 0
// let year = 1970
// let name1 = "Alice"
// let empty = ""

// console.log(!nr) // -> true
// console.log(!year) // -> false
// console.log(!name1) // -> false
// console.log(!empty) // -> true

// console.log(!!nr) // -> false
// console.log(!!name1) // -> true

// console.log(true || 1991) // -> true
// console.log(false || 1991) // -> 1991
// console.log(2 || 5) // -> 2
// console.log(0 || 5) // -> 5
// console.log("Alice" || "Bob") // -> Alice
// console.log("" || "Bob") // -> Bob

// let x = 0
// let y = 0
// console.log(x++ && y++) // -> 0
// console.log(x) // -> 1
// console.log(y) // -> y == 0

// let a = true
// console.log(a) // -> true
// a &&= false
// console.log(a) // -> false

// let b = false
// console.log(b) // -> false
// b ||= true
// console.log(b) // -> true

// console.log(2 * 3 + 1) // expected 7
// console.log(2 ** 4) // expected 16
// console.log(5 * 1) // expected 5
// console.log(8 ** 2 - 5 ** 2) // expected 39

// let names = ["Patti", "Bob"]
// let name2 = names[0]
// console.log(names instanceof Array) // -> verdadero
// console.log(name2 instanceof Array) // -> false

// let name3 = 1 > 2 ? "Alice" : "Bob"
// console.log(name3) // -> Bob
// /*Precedence - continued
// Precedence	Operator	Associativity	Symbol
// 14         Grouping         n/a          ( … )
// 13       Field access	⇒ … . …           12
// Function call	⇒	    … ( … )
// 11       Postfix increment n/a           … ++

// Postfix decrement
// n/a
// … --
// 11
// Logical NOT	⇐
// ! …
// Unary plus	⇐
// + …
// Unary negation	⇐
// - …
// Prefix increment	⇐
// ++ …
// Prefix decrement	⇐
// -- …
// typeof	⇐
// typeof …
// delete	⇐
// delete …
// 9
// Exponentiation	⇐
// … ** …
// 8
// Multiplication	⇒
// … * …
// Division	⇒
// … / …
// Remainder	⇒
// … % …
// 7
// Addition	⇒
// … + …
// Subtraction	⇒
// … - …
// 6
// Less than	⇒
// … < …
// Less than or equal	⇒
// … <= …
// Greater than	⇒
// … > …
// Greater than or equal	⇒
// … >= …
// instanceof	⇒
// … instanceof …
// 5
// Equality	⇒
// … == …
// Inequality	⇒
// … != …
// Strict Equality	⇒
// … === …
// Strict Inequality	⇒
// … !== …
// 4
// Logical AND	⇒
// … && …
// 3
// Logical OR	⇒
// … || …
// 2
// Conditional (ternary)	⇐
// … ? … : …

// 1

// Assignment	⇐
// … = …
// … += …
// … *= …

// … and other assignment operators */

// // var height = 180
// // {
// //   var weight = 70
// //   console.log(height) // -> 180
// //   console.log(weight) // -> 70
// // }
// // console.log(height) // -> 180
// // console.log(weight) // -> 70
// // let first = "gytjlop"

// // const c = String(weight)
// // console.log(c)

// let estacion =["verano ","otonio","invierno","primavera"]
// let estacionDada="invierno"
// for (const buscandoEstacion of estacion) {
//   if (buscandoEstacion.includes(estacionDada)){
// console.log(estacion.indexOf(estacionDada),estacionDada)

//   }

//  }
// if(estacionDada){
//   console.log(estacionDada)
// }

// function calcular(numero1,operador,numero2) {

//   switch (operador) {
// case"+":
// console.log(numero1 + numero2)
// break
// case "/":
// console.log(numero1 / numero2)
// break
// case "-":
// console.log(numero1 - numero2)
//    break
//    case "*":
//     console.log(numero1 * numero2)

//   }
// }
//  calcular(2,"+",3)

// let arr = [
//   [1, 2, 3, 1, 2, 3],
//   [6, 7, 8, 1, 2, 3],
//   [5, 4, 3, 1, 2, 3],
//   [1, 2, 3, 1, 2, 3],
//   [1, 2, 3, 1, 2, 3],
//   [1, 2, 3, 1, 2, 3]
// ]
// function diagonalDifference(arr) {
//   // Write your code here
//   let n = arr.length
//   let diagonalX = 0
//   let diagonalY = 0

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i === j) {
//         diagonalX += arr[i][j]
//         //console.log(diagonalX)
//       }

//       if (i + j === n - 1) {
//         diagonalY += arr[i][j]
//         console.log([i], [j])
        
//       }
//     }
//   }
//   return Math.abs(diagonalX - diagonalY)
// }
// console.log(diagonalDifference(arr))


 
 /** */