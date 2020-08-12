/* 
operador destructuring, novo recurso do ES2015
forma simplificada de tirar atributos de dentro de uma estrutura 
*/

// USANDO O DESTRUCTURING COM OBJETOS

const pessoa = {
    nome: 'Ana',
    idade: 25,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
}

// usando o destructuring para tirar do objeto pessoa os atributos nome e idade

const { nome, idade } = pessoa // tira do objeto pessoa o atributo nome e idade

console.log(nome, idade) // Ana 25

// outra forma de usar o destructuring é atribuindo "apelidos" para as variáveis que serão extraídas da estrutura

const { nome: n, idade: i } = pessoa 
console.log(n, i) // Ana 25

//se tentar extarir um atributo que não existe na estrutura vai retornar undefined

const { sobrenome } = pessoa
console.log(sobrenome) // undefined

// para extrair traibutos de objeto dentro do objeto

const { endereco: {logradouro: l, numero: num}} = pessoa
console.log(l, num) // Rua Abc 1000


// USANDO O DESTRUCTURING COM ARRAYS

const [a] = [10]

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]

console.log(n1, n3, n5, n6) // 10 9 undefined 0

const [b, [c, d]] = [[8, 8, 8], [9, 6, 8]]

console.log(c) // 9

const empresas = ['Apple', 'Google', 'Amazon']

const [emp1, , emp3] = empresas
console.log(emp1, emp3) // Apple Amazon


// USANDO DESTRUCTURING COM FUNÇÕES QUE RECEBEM OBJETOS COMO PARÂMETRO

/* 
função que retorna um número aleatório na qual são passados dois atributos min e max, dentro de {} que vai 
representar um operador destructuring, significando que será passado um objeto para essa função
e será tirado de dentro desse objeto o atributo min e o max, sem usar notação ponto
*/

function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//para executar essa função passa-se um objeto com os valores maxímos e mínimos desejados

const obj = {min: 40, max: 50}

console.log(rand(obj)) // console.log(rand({min: 40, max: 50}))

// passando seomente o valor de mínimo, já que o valor de máximo já está configurado
console.log(rand({min: 900}))

// pode-se passar o objeto vazio, já que os valores mínimo e máximo já estão configurados

console.log(rand({}))

/* 
deve-se passar algum objeto nesse caso, mesmo que vazio por que já tem parâmetros padrões, 
mas nunca passar objeto nenhum
*/


// USANDO DESTRUCTURING COM FUNÇÕES QUE RECEBEM ARRAYS COMO PARÂMETRO


function random([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor2 = Math.random() * (max - min) + min
    return Math.floor(valor2)
}
// chamando a função a partir do array

// passando máximo e mínimo
console.log(random([50, 40]))

// passando somente mínimo
console.log(random([900]))

//passando somente máximo
console.log(random([, 50]))

//passando array vazio, vai usar como valores mínimo e máximo os valores padrões configurados na função
console.log(random([]))