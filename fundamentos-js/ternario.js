/*
operador ternário possui 3 operandos
o primeiro operando é uma expressão relacional que vai retornar verdadeiro ou falso
se a expressão for verdadeira a expressão retorna o que estiver após o ?
se for falsa retorna o que estiver após o :
*/
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1)) // Aprovado
console.log(resultado(6.2)) // Reprovado