let array = 
  ["jabon", 10, "cuidado personal", "alal", "arros", 1, "f","alal"]

//indexOf retorna la posicion del elemento buscado pero solo la del primer elemento que coinsida, su comparacion es estricta 
 console.log(array.indexOf("alal"))
showDom("array1",array)
show(array) 
function show(arr) {
for (let index = 0; index < arr.length; index++) {
     console.log(arr[index])
   
    
} 
  
}
function showDom(e,arr) {
    document.getElementById(e).innerHTML=""

    for (let index = 0; index < arr.length; index++) {
    document.getElementById(e).innerHTML += `<div>${arr[index]}</div>`
        
    }
}
