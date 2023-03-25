let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
    
}

function inLista(n, l){
if(l.indexof(Number(n)) != -1){
    return true
}else{
    return false
}

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))     //Sempre que um valor for adicionado ele vai pro final da lista
        let item = document.createElement('option')     //Cria um elemento pra página.
        item.text = `Valor ${num.value} adicionado.`    //text significa o texto colocado no item        
        lista.appendChild(item)     //adicionei o 'item' na lista
        res.innerHTML = ''
    }else {
        alert('Número inválido ou já econtrado na lista.')
    }
  
}

