let num = [5, 8, 2, 9, 3]
num.push(4)     // o push adiciona um elemento no final da variavel, se for depois do sort a ordem dele não muda
num.sort()      // sort poe os elementos da var (let) em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)  //length mostra a quantidade de elementos na var
console.log(`O primeiro vetor é ${num[0]}`)
let pos = num.indexOf(2)          //indexOf indica qual a posição do elemento que ta no parentese
if(pos == -1){          //Quando o valor não é encontrado na variavel ele recebe -1
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos}`)

}
