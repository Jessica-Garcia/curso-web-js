// COMPARANDO VALOR APENAS, SEM COMPARAR TIPO ==

console.log('1' == 1) // true

console.log('3' != 3) // false

console.log(3 < 2) // false
console.log(3 > 2) // true

console.log(3 <= 2) // false
console.log(3 >= 2) // true


// COMPARANDO VALOR E TIPO === (estritamente igual, mais adequado de usar)

console.log('1' === 1) // false

console.log('3' !== 3) // true


//TESTES

const d1 = new Date(0) // data de referencia de javaScript 1 de janeiro de 1970
const d2 = new Date(0)

console.log(d1 === d2) // false, por que compara endereços de memória que são diferentes
console.log(d1 == d2) // false, por que compara endereços de memória que são diferentes

console.log(d1.getTime === d2.getTime) // true, compara os valores em milissegundos, tem mesmo tipo e valor
console.log(d1.getTime == d2.getTime) // true

console.log(undefined == null) // true

console.log(undefined === null) // false