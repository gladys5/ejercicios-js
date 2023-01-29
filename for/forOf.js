

let arrayObjetos = [
  { articulo: "crema", precio: 110, clasificacion: "peresedero" },
  { articulo: "sopa", precio: 6, clasificacion: "peresedero" },
  { articulo: "arroz", precio: 30, clasificacion: "peresedero" },
  { articulo: "peine", precio: 100, clasificacion: "cuidado personal" },

  { articulo: "cafe", precio: 100, clasificacion: "peresedero" },
  { articulo: "pasta", precio: 7, clasificacion: "cuidado personal" },
  { articulo: "jabon", precio: 10, clasificacion: "cuidado personal" },
]
//el primer parametro es el objeto uno a uno el segundo parametro es el array
for (const iterator of arrayObjetos) {
    console.log(iterator.precio)
}
