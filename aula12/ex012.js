var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`)
//var hora = 9
//console.log(`São ${hora} horas`)
if (hora < 5){
    console.log('Boa madrugada!')
}else if (hora >= 5 && hora < 12){
    console.log('Bom dia!')
}else if (hora >= 12 && hora < 19){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite')
}