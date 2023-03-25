/*for of
const cores = ['Vermelho', 'Azul', 'Amarelo']
for(cor of cores){              //cor é o idice que indica quais aos valores da variavel cores
    console.log(cor)
}




for in
const pessoa = {
    nome:'Neto',
    idade: 28
}*/
//(key value) 'nome' é uma key e 'Neto' é um value.
for (let chave in pessoa){
    console.log(chave, pessoa.nome)
}

const cores = ['Vermelho', 'Azul', 'Verde']
for(indice in cores){                   //indice = Vermelho, Azul e Verde
    console.log(indice, cores[indice])  //se colocar so cores aparece 0,1,2 etc
}                                       //indice entre colchetes indica os valores.
