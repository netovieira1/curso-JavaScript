function carregar(){
    //var hora = 19
    //var minuto = 23
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12){
        img.src ='fotomanha.png'
        document.body.style.background = '#eee35f'
    } else if (hora >=12 && hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#f38f39'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#070b87'
    }
}
