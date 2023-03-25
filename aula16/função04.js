function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){     //c = contandor; enquanto for maior que 1; contador perde 1
        fat*= c     // fatorial é ele mesmo multiplicado pelo contador (c)
    }
    return fat
}
console.log(fatorial(5))
