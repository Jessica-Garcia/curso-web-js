const nome = 'Rebeca'
const concatenacaoComum = 'Olá ' + nome + '!'

/*
Concatenação com template considera espaços e quebras de linhas
abre-se um template com o "simbolo da crase"(back tick)
usa-se o nome da variável entre os simbolos ${}
*/

const template = `
       Olá
${nome}!`

console.log(concatenacaoComum) // Olá Rebeca!

//considera os espaços e quebras de linhas
console.log(template) /*       Olá
Rebeca! */

// pode-se colocar expressões dentro do template string, desde que dentro dos simbolos ${}

console.log(`1 + 1 = ${1+1}`) // resultado: 1 + 1 = 2

//pode-se chamar uma função dentro do template string, desde que dentro dos simbolos ${}

const up = texto => texto.toUpperCase() // função para trasnformar texto todo em letras maúsculas

console.log(`Oi ... ${up('tudo bem')}?`) // Oi ... TUDO BEM?