//Igualdade dos Objetos

function endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new endereco('46','Maracanaú','61901-060')
const endereco2 = new endereco('46','Maracanaú', '61901-060')

function saoIguais(endereco1, endereco2){
    //Comparar se as propriedades são iguais
    return endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade && endereco1.cep === endereco2.cep
}
console.log(saoIguais(endereco1, endereco2))

function enderecoMemoria(endereco1, endereco2){
    //Comparar se a referencia do objeto aponta para o mesmo local da memoria
    return endereco1 === endereco2
}
console.log(enderecoMemoria(endereco1, endereco2))

