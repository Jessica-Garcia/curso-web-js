let isAtivo = false
console.log(isAtivo) // false

isAtivo = true
console.log(isAtivo) // true

/* 
outros valores podem representar um valor true ou false, mas para imprimir o valor booleano 
quando se usa um valor não booleano que representa um valor true ou false é necessário fazer a 
conversão colocando !! na frente da variável em questão
*/

isAtivo = 1  
console.log(!!isAtivo) // imprime true

// Situações em que valores não booleanos se comportam como true

console.log('Os verdadeiros...')

// todos os números inteiros exceto o zero, representam true

console.log(!!3) 
console.log(!!-1) 

// String com espaço vazio  ' ' ou com algum texto representa true

console.log(!!' ') 
console.log(!!'texto') 

// um array vazio [] representa true

console.log(!![]) 

// um objeto literal {} representa true 

console.log(!![]) 

// o tipo Infinity (obtido por divisão por zero por exemplo)representa true

console.log(!!Infinity) 

/* 
Numa situação de atribuição, se o valor atribuido representar true, 
o resultado será true, se o que tiver do lado direito da atribuição 
for um valor que retorna true o resultado da atribuição será true
*/
console.log(!!(isAtivo = true)) // imprime true
console.log(!!(isAtivo = Infinity)) // imprime true
console.log(!!(isAtivo = 33)) // imprime true


// Situações em que valores não booleanos se comportam como false

console.log('Os falsos...')

// o valor zero representa false
console.log(!!0)

// string vazia '', "", `` , sem espaço, representa false

console.log(!!'')
console.log(!!"")
console.log(!!``)

// null, NaN (Not a Number) e undefined representam falso
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

 /* 
Numa situação de atribuição, se o valor atribuido representar false, 
o resultado será false, se o que tiver do lado direito da atribuição 
for um valor que retorna false o resultado da atribuição será false
*/

console.log(!!(isAtivo = NaN)) // imprime false, 
console.log(!!(isAtivo = null)) // imprime false, 
console.log(!!(isAtivo = undefined)) // imprime false, 
console.log(!!(isAtivo = 0)) // imprime false,

// no contexto de operação lógica pode-se usar os valores que representam true ou false

// retorna o único ou o primeiro valor true da operação com o operador ou || que é 'oi'
                                        
console.log(('' || null || 0 || 'oi')) // imprime oi

// retorna o true pq pelo pelo menos um valor é true, neste caso 'oi'

console.log(!!('' || null || 0 || 'oi')) // imprime true

// exeplo prático 

let nome = ''

console.log(nome || 'Desconhecido') //imprime Desconhecido pq o nome é igual a false (string vazia sem espaço)

nome = 'Lucas'

console.log(nome || 'Desconhecido') //imprime Lucas pq o nome é igual a true (string preenchida)