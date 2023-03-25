//Objeto postagem de blog
//Criar um objeto de postagem de blog que vai conter as seguintes propriedades:
//postagem, titulo, mensagem, autor, visualizações, comentários (autor, mensagem) estaAovivo

let postagem = {
    titulo: 'O fim',
    mensagem: 'Bem-vindo!',
    autor: 'Joao',
    vizualizacoes: 5000,
    comentario: [
        {autor: 'Joao', mensagem: 'Bem-vindo!'},
        {autor: 'Joao', mensagem: 'Bem-vindo!'}
    ],
    aovivo: true
}
console.log(postagem)
