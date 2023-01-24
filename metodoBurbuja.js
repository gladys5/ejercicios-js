//el metodo burbuja
let lista =[6,3,5,1,7,8,2]
function burbuja(lista) {
    let i,n,j,aux
    n-lista.length

for(j=1;j<n;j++){
    for (let i = 0; i <( n-j); i++) {
        if (lista[i]>lista[i+1]){
            aux=lista[i]
            lista[i]=lista[i+1]
             lista[i+1]=aux
        }

        
    }
}
console.log(lista)
}
console.log(burbuja(lista))