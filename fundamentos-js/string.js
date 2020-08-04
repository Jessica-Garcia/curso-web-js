
const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna a letra do índice indicado. OBS.: ÍNDICE COMEÇA EM ZERO

// não retorna erro se não existir o índice indicado, retorna vazio
console.log(escola.charAt(5)) // índice não existe, retorna vazio

console.log(escola.charCodeAt(2)) // retorna valor na tabela unicode referente ao número do código html

console.log(escola.indexOf('d')) // retorna o índice onde se encontra o valor

console.log(escola.substring(1)) // recorta a string do índice indicado em diante, retorna od3r

console.log(escola.substring(0, 3)) // recorta a string do primeiro índice indicado até o último índice indicado 
//sem incluir o último índice indicado, retorna Cod

// para concatenar elementos na string 

console.log('Escola '.concat(escola).concat("!")) // retorna:  Escola Cod3r!

console.log('Escola ' + escola + '!') // retorna:  Escola Cod3r!

// para substituir elementos na string

console.log(escola.replace('d', 'e')) // retorna Coe3r
console.log(escola.replace(3, 'e')) // retorna Coder
console.log(escola.replace('3', 'e')) // retorna Coder

// passar uma string com vários elementos separados por vŕgula, por exemplo, e converter para um array
console.log('Maria,Ana,Pedro'.split(',')) // retorna [ 'Maria', 'Ana', 'Pedro' ]