 //RECURSIVIDADE
function fatorial(n){
    if(n == 1){             //O fatorial de 1 é 1
        return 1
    }else{
        return n * (fatorial(n-1))  //n! = n * (n-1)! o fatorial de um numero é ele x ele -1. ex: !5 = 5 * 4!
    }
}
console.log(fatorial(5))

