//Faixa de preço
//Criar um array de objetos de faixa de preço para que possa ser usado em um site
// tooltip, minimo e maximo

//Primeira opção:
let faixas1 = [
    {tooltip: 'Até R$700', minimo: 0, maximo: 700},
    {tooltip: 'De R$700 até R$ 1000', minimo: 700, maximo: 1000},
    {tooltip: 'Acima de R$1000', minimo: 1000, maximo: 99999}
]

//Segunda opção: (Factory function)
function criarFaixaPreco(tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}
let faixas2 = [
    criarFaixaPreco('Até R$700', 0, 700),
    criarFaixaPreco('De R$700 até R$1000', 700, 1000),
    criarFaixaPreco('Acima de R$1000', 1000, 99999)
]


//Terceira opção (Constructor function)
function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}
let faixas3 = [
    new FaixaPreco('Até R$700', 0, 700),
    new FaixaPreco('De R$ 700 até R$ 1000', 700, 1000),
    new FaixaPreco('Acima de R$1000', 1000, 99999)
]
console.log(faixas1)




