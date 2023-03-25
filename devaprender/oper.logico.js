//Operador lógico e (&&)
//Retorna true se os dois operadores forem true
//Operador lógico ou (||)
//Retorna true se um dos operadores forem true
let maiordeIdade = false
let carteiraTrabalho = false
let podeAplicar = maiordeIdade || carteiraTrabalho
console.log('pode aplicar',podeAplicar)
//Operador NOT (!)
let candidatoRecusado = !podeAplicar
console.log('Candidato recusado' ,candidatoRecusado)

