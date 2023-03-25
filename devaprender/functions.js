//Padrão das funções é nomeiar verbo + substantivo. ex: nomeiarPessoa, eliminarPaticipante
//No momento q eu chamo a function resetaCor ela altera a 'letcorSite' pra cor desejada.
let corSite = 'azul'
function resetaCor(cor,tonalidade){
    corSite = cor + tonalidade

}
console.log(corSite)
resetaCor('Verde', ' Claro')
console.log(corSite)