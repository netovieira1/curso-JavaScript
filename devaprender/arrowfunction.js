//Arrow Functions

const marcas = [
    {id:01, nome: 'Nike'},
    {id:02, nome: 'Adidas'},
    {id:03, nome: 'Puma'}
]

const encontrar = marcas.find(marcas => marcas.nome === 'Adidas')
console.log(encontrar)
//A arrow '' => ''  busca o parametro dentro do objeto
