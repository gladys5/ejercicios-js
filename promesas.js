
// //Notification.requestPermission solicita permisos de notificasion al usuario
//  const promesa =  Notification.requestPermission()
//  //proporcionamos una funcion que se ejecute cuando la promesa se haya ejecutado es ta es la forma en la que sabemos si lo hizo o no podemos encadenar promesas cuantas se requieran
//  promesa.then(function(param){
//     //param contiene el return de la promesa
//     if (param==="granted"){
//         console.log("si quiere notificasiones, al ataqueee!!")
//     }else{
//         console.log("dijo que no =(")
//     }
//  })
//  //atrapando el error
//  promesa.catch(function(err){
//     console.error(err)
//  })
//  //finally se ejecutara si o si 
//  promesa.finally(function(){
//     console.log("ya estaria")
//  })

// //======================================================
// fetch("/api/data").then(response=>{
//     console.log("el estatus es"+ response.status)
//     return response.json()
// }).then(body=>{
//     console.log(body)
// }).catch(e=>console.error(e))
//=====================================================
//puedo crear mi propia promesa
const prom=new Promise(function(resolve,reject){
    Promise.resolve("soy una promesa rapida")
    setTimeout(function(){
resolve("aqui va lo que resolvera esta promesa")

    },1000)
})
//esta el return de nuestra promesa
prom.then((res)=>console.log(res))

console.log("estoy al final pero me ejecutare primero por que no soy parte de la promesa")