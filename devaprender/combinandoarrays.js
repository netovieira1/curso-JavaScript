//Combinando e cortando arrays

const  primeiro = [1,2,3,]
const segundo = [4,5,6]
//Combinar
//const combinado = primeiro.concat(segundo)
const combinado = [...primeiro,'%',...segundo,] //Operador spread
console.log(combinado)
//Dividir
//const cortado = combinado.slice(2,3)

const clonado = [...combinado]
console.log(clonado)

/*const ident = [
    {id:01},
    {id:02},
    {id:03}
]
const nom = [
    {nome: 'Neto'},
    {nome: 'Joao'},
    {nome: 'Jose'}
]
const combinar = ident.concat(nom)


const cortar = combinar.splice(1,5)
console.log(cortar)*/