let arrayString = ["lola", "paco", "mayo", "tapo"]
let arrayNumeros = [2, 3, 4, 5, 562, 3, 9, 1, 0]
let productos = [
  { articulo: "crema", precio: 110, clasificacion: "peresedero" },
  { articulo: "sopa", precio: 6, clasificacion: "peresedero" },
  { articulo: "arroz", precio: 30, clasificacion: "peresedero" },
  { articulo: "peine", precio: 100, clasificacion: "cuidado personal" },
  { articulo: "cafe", precio: 100, clasificacion: "peresedero" },
  { articulo: "pasta", precio: 7, clasificacion: "cuidado personal" },
  { articulo: "jabon", precio: 10, clasificacion: "cuidado personal" },
]
//forEach resive 3 valores y returna un undefined
let valorBuscado="peine"
   function descuento() {
    let descuento 
     productos.forEach(function (valor, indice) {
       let desestructurar = valor.articulo
       if (desestructurar === valorBuscado) {
       
        console.log((valor.precio*10)/100-valor.precio )
        console.log(indice)
       }
     })

   }
descuento(productos,valorBuscado)