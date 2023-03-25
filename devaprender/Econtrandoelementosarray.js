//Encontrando elementos tipo PRIMITIVOS

const numeros = [1, 2, 3, 1, 4, 9]
console.log(numeros.indexOf(1)) //Procura a posição do indice do inicio pro fim
console.log(numeros.lastIndexOf(1))//Procura a posição do indice do fim para o inicio
console.log(numeros.includes(9))//Se tiver esse indice é TRUE senao FALSE

//Encontrando elementos  tipo REFERENCIA

const marcas = [
    {id:01, nome: 'Nike'},
    {id:02, nome: 'Adidas'},
    {id:03, nome: 'Puma'}
]
//.find serve pra procurar um indice no array
const marca1 = marcas.find(function(encontrar){
    return encontrar.nome === 'Adidas'  //cria um function dentro do marcas.find pra achar o indice e depois retorna ela
})
console.log(marca1)