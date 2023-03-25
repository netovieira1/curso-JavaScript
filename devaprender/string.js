const mensagem = 'Minha primeira mensagem'
console.log(typeof mensagem)    //tipo, se é string, numero, objeto etc
console.log(mensagem.length)    //ver o tamanho
console.log(mensagem.indexOf('g')) //Indice de algo dentro do String
console.log(mensagem.replace('Minha', 'Sua')) //Substituir qualque palavra ou letra
console.log(mensagem.trim()) //Remove os espaços excedentes
console.log(mensagem.split(' ')) //Separa as palavras entre espaços


//Comandos de true of false
console.log(mensagem.includes('primeira')) //se tem a palavra 'primeira'
console.log(mensagem.startsWith('Minha')) //Começa com 'Minha'
console.log(mensagem.endsWith('mensagem')) //Termina com 'mensagem'

