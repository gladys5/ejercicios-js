
//funcion de primer orden
let funcionDePrimerOrden= function () {
    return "soy una funcion de primer orden me guardo en una variable"
}
//arrow fuction
let funcionFlecha=(name)=>{
return"mi nombre es"+name
}
//funciones de orden superior 
function funcionDeOrdenSuperior(r) {
 //console.log()
 let proceso ="soy una ejecucion,o proceso interno de esta funcion"
return `${funcionFlecha(" yomaira")}
${funcionDePrimerOrden()}
${r}
${proceso}`

  //console.log(  )
}
console.log(funcionDeOrdenSuperior("soy un parametro con algun comportamiento"))

