// Se a hora estiver entre 06:00 e 11:59 = Bom dia!
// Se estiver entre 12:00 e 18:59 = Boa Tarde!
// Se estiver entre 19:00 e 23:59 = Boa Noite!
//Senão = Boa madrugada
let agora = new Date()
let hora = agora.getHours()
let minutos = agora.getMinutes()
console.log(`São ${hora} horas e ${minutos} minutos.`)
if(hora >= 6 && hora <= 12){
    console.log('Bom dia!')
}else if(hora >= 12 && hora < 19){
    console.log('Boa tarde!')
}else if(hora >= 19 && hora < 24){
    console.log('Boa Noite!')
}else{
    console.log('Boa Madrugada')
}
