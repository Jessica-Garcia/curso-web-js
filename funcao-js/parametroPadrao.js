/* ESTRATÉGIA 1 PARA GERAR VALOR PADRÃO
usando o operador || para, caso a primeira parte da expressão se resolva para falso, retornar o valor definido
caso mais usado para criar variaveis dentro da função com valor padrão
*/
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
/*Não passando valores para a função todas as variaveis ficarão undefined que representa o valor falso 
isso fará com que as variáveis assumam o valor padrão definido que neste caso é 1 */

console.log(soma1())// 3

console.log(soma1(3))// 5

console.log(soma1(1, 2, 3))// 6

/*vai ocorrer problema nessa estratégia quando for passado valores zero, pq zero retorna falso, fazendo com que
as variáveis assumam o valor padrão definido*/

console.log(soma1(0, 0, 0))// 3

/* ESTRETÉGIAS 2, 3, 4 PARA GERAR VALOR PADRÃO
2- se a variável a for diferente de undefined retorna o valor de a, caso contrário retorna o valor definido
3- se existe o índice do argumento passado na função retorne o valor da variável desse índice, senão, retorne 
o valor padrão definido
4- se a variavel não for um número (isNaN) retorne o valor padrão definido, caso contrário, retorne seu valor
*/
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // estratégia MAIS SEGURA para valores numéricos
    return a + b + c
}
console.log(soma2()) // 3
console.log(soma2(3)) // 5
console.log(soma2(1, 2, 3)) // 6
console.log(soma2(0, 0, 0)) // 0

/*VALOR PADRÃO DO ES2015
forma mais adequada
neste caso, o valor padrão serve para ser usado em parâmetros de função, 
mas não para varáveis criadas dentro da função
*/
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3()) // 3
console.log(soma3(3)) // 5
console.log(soma3(1, 2, 3)) // 6
console.log(soma3(0, 0, 0)) // 0