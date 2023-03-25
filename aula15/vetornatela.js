let valores = [8, 1, 7, 4, 2, 9]
/*for(let pos = 0; pos < valores.length; pos ++){      //Enquanto a var 'pos' for menor que comprimento da var 'valores'  //pos recebe ela + 1 
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)                            
}*/
for(let pos in valores){                    //o 'in' já adiciona a var 'pos' na var 'valores'
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)     //pos entre colchetes pra idicar a posição
}

