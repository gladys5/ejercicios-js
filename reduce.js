


let arrayString =["lola","paco","mayo","tapo"]
let arrayNumeros=[2,3,4,5,562,3,9,1,0]
let arrayObjetos = [
  { articulo: "crema", precio: 110, clasificacion: "peresedero" },
  { articulo: "sopa", precio: 6, clasificacion: "peresedero" },
  { articulo: "arroz", precio: 30, clasificacion: "peresedero" },
  { articulo: "peine", precio: 100, clasificacion: "cuidado personal" },
 
  { articulo: "cafe", precio: 100, clasificacion: "peresedero" },
  { articulo: "pasta", precio: 7, clasificacion: "cuidado personal" },
  { articulo: "jabon", precio: 10, clasificacion: "cuidado personal" },
]

 let resultado =arrayString.reduce((ac, item,index) => {
 // console.log(item, "tiene", item.length, " letras")
  return ac + item.length
}, 0)
  /** retornara
$ node reduce.js 
{ ac: 0, item: 'lola' }
lola tiene 4  letras
{ ac: 4, item: 'paco' }
paco tiene 4  letras
{ ac: 8, item: 'mayo' }
mayo tiene 4  letras
{ ac: 12, item: 'tapo' }
tapo tiene 4  letras

*/

//console.log(resultado)
//resultado sera igual a 16
//===============================================================================
function clasificacion(arrayObjetos) {
    let objetos =arrayObjetos.reduce((obj,arrayObjeto)=>{
  
  if (!obj[arrayObjeto.clasificacion]) {
    obj[arrayObjeto.clasificacion] = []
  }
  obj[arrayObjeto.clasificacion].push(arrayObjeto.clasificacion)
  return obj

},{})
//console.log(objetos)
return objetos
}

// clasificacion(arrayObjetos)



//===================================================




function compras() {
   let venta =arrayObjetos.reduce((acc,item)=>{
  return  acc + item.precio
   },0)
   return venta
}
//console.log(compras(arrayObjetos))
//===================================================

    
let indexacion = arrayObjetos.reduce(
  (acc, obj) => ({
    ...acc,
    [obj.articulo]: obj,
  }),
  {}
)
  console.log(indexacion['peine']) 

