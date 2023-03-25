//Factory function - Funções de fábricas

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria, cor, modelo){     //Aqui declara os valores
    return{                         //É preciso retornar o objeto
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        cor,
        modelo,
        ligar() {
            console.log('Fazendo ligação...')
        }
    }
}
const celular1 = criarCelular('Samsung', 5.5, 5000, 'Preto', 'A71') //  <= Chamo método(criarCelular) ponho os parametros e coloco dentro de uma variável (celular1)
console.log(celular1)