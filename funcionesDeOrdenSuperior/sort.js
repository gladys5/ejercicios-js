//ordena los arreglos y objetos pasados
let arrayNumeros = [2, 3, 4, 5, 562, 3, 9, 1, 5]
console.log(arrayNumeros.sort((a,b)=>a-b))
let arrayObjetos = [
  { articulo: "crema", precio: 110, clasificacion: "peresedero" },
  { articulo: "sopa", precio: 6, clasificacion: "peresedero" },
  { articulo: "arroz", precio: 30, clasificacion: "peresedero" },
  { articulo: "peine", precio: 100, clasificacion: "cuidado personal" },

  { articulo: "cafe", precio: 100, clasificacion: "peresedero" },
  { articulo: "pasta", precio: 7, clasificacion: "cuidado personal" },
  { articulo: "jabon", precio: 10, clasificacion: "cuidado personal" },
]
console.log(arrayObjetos.sort((a, b) => a.precio - b.precio))