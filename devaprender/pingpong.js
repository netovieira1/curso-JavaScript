let contador = 0

while (contador < 100) {
    ++contador

    if(contador % 3 === 0 && contador % 5 === 0){
        console.log(`${contador} PingPong`)
            
    }

    else if(contador % 3 === 0) {
        console.log(`${contador} Ping`)
            
    }
    else if(contador % 5 === 0){
        console.log(`${contador} Pong`)  

    }

    else {
        console.log(contador)
    }
    
       
}
    

    