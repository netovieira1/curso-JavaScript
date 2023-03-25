function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value
    ConvidadosCristian = ['João', 'Sabrina', 'Sara', 'Pedro', 'Maria', 'Neto']
    if(ConvidadosCristian.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 
        'Você pode entrar!'

    }
    else {
        document.getElementById('PermissaoDeEntrada').innerText = 
        'Você não pode entrar!'
    }

}