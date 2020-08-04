// modos de declarar elementos tipo number
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2) // imprime 1 2

//para saber se o numero é inteiro:

console.log(Number.isInteger(peso1)) // imprime true para 1.0 e false para 1.1 por exemplo

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media) // resultado = 7.8709999999999996

// para definir a quantidade de casas decimais
console.log(media.toFixed(2)) // resultado = 7.87

// para transformar o number em uma string
console.log(media.toString())
console.log(typeof media.toString()) // string

// para converter o valor em binário
console.log(media.toString(2)) // 111.11011110111110011101101100100010110100001110010101

console.log(typeof media) // number
console.log(typeof media.toString(2)) //string

// ALGUNS CUIDADOS COM TIPOS NUMBER

console.log(7 / 0) // resultado = Infinity

//pode-se fazer operações com Strings que contenham números

console.log("10" / 2) // resultado = 5

console.log('3' + 2) // vai concatenar e não somar, resultado 32

console.log('3' - 2) // vai subtrair resultado 1

console.log("Show" * 2) // resultado = NaN

//existem imprecisões com ponto flutuante
console.log(0.1 + 0.7) // resultado = 0.7999999999999999 e não 0.8, 

console.log(Number((0.1 + 0.7).toFixed(2))) // resultado = 0.80

// console.log(10.toString()) gera exceção
