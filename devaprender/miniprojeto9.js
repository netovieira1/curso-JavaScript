//Criar uma função que exibe uma quantidade de * que aquela possui

exibirAsteriscos(10)

function exibirAsteriscos(linhas){
    for(let linha = 1; linha <= linhas; linha++){
        padrao = ''
        for(i = 1; i < linha; i++){
            padrao += '*'
        }
        console.log(padrao)
    }
}



/*function exibirAsteriscos(linhas){
    let padrao = ''
    for(let linha = 1 ; linha <= linhas; linha++){
        padrao += '*'
        console.log(padrao)
    }

}*/