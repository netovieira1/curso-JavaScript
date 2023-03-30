




parOuImpar(50)

function parOuImpar(numero){
    if(numero % 2 === 0){
        console.log('Par')
    }
    else{
        console.log('Impar')
    }   

}


function dados(nome, idade, endereco, ...complementos){
    console.log(nome)
   console.log(idade)
    console.log(endereco)
    console.log(complementos)
}

let result = dados('Neto', 28, 'Rua 46', 'Programador', 'Solteiro', 'Sim')
console.log(result)


