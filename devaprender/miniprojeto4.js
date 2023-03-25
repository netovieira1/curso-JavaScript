//Velocidade máxima até 70
//A cada 5km acima do limite você ganha 1 ponto
//Math.Floor()
//caso pontos maior que 12 => 'Carteira Suspensa'

verificarVelocidade(50)

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70
    const kmPorPonto = 5
    if(velocidade <= velocidadeMaxima){
        console.log('Ok.')
    }else{
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto)
        if(pontos > 12){
            console.log('Carteira suspensa.')
        }else
        console.log(pontos, 'pontos')
    }
}

