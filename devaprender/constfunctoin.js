//Constructor function
//Criar um objeto postagem
//titulo, mensagem, autor, visualizaçoes, comentarios, esta ao vivo

function Postagem(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor
    this.visualizacoes = 0
    this.comentarios = [],
    this.aovivo = false
}
let postagem = new Postagem('Batman','Olá!', 'Christopher Nolan',)
console.log(postagem)

