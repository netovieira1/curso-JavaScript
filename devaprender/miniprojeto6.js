//Criar um método para ler propriedades de um objeto e
//exibir somente as propriedades do tipo string

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor: 'Fulano',
    persongem : 'Thor'
}
exibirPropriedades(filme)

function exibirPropriedades(obj){
    for(prop in obj)
        if(typeof obj [prop] === 'string')     //se as propriedades do obj forem tipo string
            console.log(prop, obj[prop])      // mostrar as propriedades do objetos tipo string
        

}
    
