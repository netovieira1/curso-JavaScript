//Natureza dinâmica de Objetos

const mouse = {
    cor: 'vermelho',
    marca: 'razer'
}

mouse.velocidade = 5000     //posso adicionar propriedades mesmo fora do objeto
mouse.trocarDPI = function () {     //posso adicionar uma função fora do objeto
    console.log('Mudando DPI...')
}


delete mouse.velocidade     //posso deletar propriedades fora do objeto
delete mouse.trocarDPI      //posso deletar funções fora do objeto

console.log(mouse)