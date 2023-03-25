//Clonando Objetos

const celular = {
    marcaCelular: 'Samsung',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function(){
        console.log('Ligando...')
    }
}

const novoObjeto = Object.assign({     //as chaves indicam pra onde vai o novo objeto        
    cor: 'Azul'                       //E vc pode adicionar novos parametros ('cor' nesse caso)
},celular)                      //sem adicionar parametro fica assim: Object.assign({},celular)
console.log(novoObjeto)

const objeto2 = {...celular}       //metodo SPREAD = {...nome do Objeto}
console.log(objeto2)                //armazena numa variavel