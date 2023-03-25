// Falsy é undefined, null, 0, false, ''(string vazia), NaN(Not a Number)
// Truthy é tudo aquilo que não é false. Basta um valor ser truthy pro retorno ser true e não false

let corPersonalizada = 'Vermelho'
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao
console.log(corPerfil)
//Quando o valor é verdadeiro ele executa a primeira operação e para.