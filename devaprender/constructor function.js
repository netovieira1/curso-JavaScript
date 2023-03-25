//camelCase - umDoisTres
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }
}
const celular1 = criarCelular('Motorolla', 5.5, 6.000)
console.log(celular1)

//Pascal Case - UmDoisTres

function Lutador(nomeLutador,pesoLutador,idadeLutador,escialidadeLutador){
    this.nomeLutador = nomeLutador,     
    this.pesoLutador = pesoLutador,
    this.idadeLutador = idadeLutador,
    this.escialidadeLutador = escialidadeLutador,
    this.anunciar = function() {
        console.log('Anunciando lutador')
//O 'this' serve pra referenciar o objeto que ta sendo manipulado
    }
    
}

const lutador = new Lutador('Charles Oliveira', '70kg', 33, 'Jiu-Jitsu')
console.log(lutador)

//com o 'new' se cria um objeto passando todas as propriedades dele (nome, idade etc) atraves dos parametros de 'Lutador
