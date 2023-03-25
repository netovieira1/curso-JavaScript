//Adicionando Elementos

const numeros = [1, 2, 3, 4]

//Adicionar no inicio
numeros.unshift(0)


//Adicionar no meio
numeros.splice(1,0,'a') //1 é o índice(posição no array), 0 é o número de indices que quero deletar após  o '1'. E 'a' é o que quero adicionar naque indice


//Adicionar no final
numeros.push(5)


//Removendo elementos

//Fim
const nomes = ['Joao', 'Maria','Jose','Pedro']

const ultimo = nomes.pop() //Remove o ultimo indice do array

//Inicio
const primeiro = nomes.shift() //Remove o primeiro indice do array


//Meio
const meio = nomes.splice(1,2) //Quais indices e quantos

let marcas = ['Nike','Adidas','Puma']

//Esvaziando um array

let perifericos = ['mouse', 'teclado', 'headset', 'mousepad']

//solução 1
let remover = perifericos.splice(0, perifericos.length)//0 indica a partir de qual e dpois quantos, o length significa q sao todos.
console.log(perifericos)

//solução 2
perifericos.length = 0
console.log(perifericos)



