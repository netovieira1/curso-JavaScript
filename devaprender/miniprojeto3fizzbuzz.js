//Se o valor for divisivel por 3 retorna Fizz
//Se o valor for divisivel por 5 retorna Buzz
//Se o valor for divisivel por 5 e 3 retorna FizzBuzz
//Não divisivel por 3 e por 5 retorna entrada
//Não é um numero retorna msg 'Não é um número.
const resultado = fizzBuzz()
console.log(resultado)

function fizzBuzz(entrada){
    if(typeof entrada!== 'number')
    return 'Não é um número'
    else if( entrada % 3 == 0 && entrada % 5 == 0)
    return 'FizzBuzz'
    else if(entrada % 3 == 0)
    return 'Fizz'
    else if(entrada % 5 == 0)
    return 'Buzz'
    
    else return entrada

}