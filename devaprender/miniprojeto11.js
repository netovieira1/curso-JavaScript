//Objeto endereço
//Criar um objeto endereço que contem Rua, Cidade, CEP

let endereco = {
    rua: '46',
    cidade: 'Maracanaú',
    cep: '61901-060'
}

function exibirEndereco(endereco){
    for(chave in endereco)
    console.log(chave, endereco[chave]) //chave = 'rua, cidade e cep'
}                                       //endereco[chave] os colchetes significa os dados  
                                        //(46, Maracanaú) dentro de chave
exibirEndereco(endereco)

/*function exibirEndereco(rua,cidade,cep){
    return{
        rua,
        cidade,
        cep
    }
}
const endereco = exibirEndereco(46, 'Maracanaú', 61901060)
console.log(endereco)*/