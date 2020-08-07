
// Atribuição referência

const a = {nome: 'Teste'} // armazena um endereço de memória e não o conteúdo do objeto

console.log(a) // { nome: 'Teste' }

const b = a // recebe o mesmo endereço de memória para o qual o a constatnte a aponta
console.log(b) // { nome: 'Teste' }

/* 
a constante a e a constante b apontam para o mesmo lugar na memória, de forma que se mudar 
algo do objeto apartir de b mudará também em a
*/

b.nome = 'Opa'

console.log(b) //{ nome: 'Opa' }
console.log(a) //{ nome: 'Opa' }

a.nome = 'hahah'

console.log(b) //{ nome: 'hahah' }
console.log(a) //{ nome: 'hahah' }

/*
Quando se trabalha com objetos e funções a cópia é por referência, a atribuição é por referência, 
aponta para o mesmo endereço de memória e se fizer uma mudança em algum dado, 
todos que apontarem para aquele dado serão mudados
*/

// Atribuição por valor

let c = 3
let d = c

d++

console.log(d) // 4
console.log(c) // 3

/*
Quando se trabalha com tipos primitivos a cópia é por valor, a atribuição é por valor, 
se fizer uma mudança no dado, os outros dados não mudam, os valores são independentes
*/

// null e undefined

let valor // não inicializada
console.log(valor) // imprime undefined, 
//porque a variável não foi inicializada, não tem valor atribuído, por padrão seu valor é undefined

valor = null // significa que não está apontando para nenhum objeto de memória, ausência de valor
console.log(valor)

/*quando se quer "zerar" o valor de uma variável do tipo referência que aponta para um objeto ou função, 
atribuir o null*/

/* quando se tenta acessar algo de uma varável com valor null, por exemplo (valor.toString) 
ocorre um erro do tipo TypeError
o indicado é sempre ter um valor padrão associado a uma determinada varável para não ocorrer esse tipo de erro
*/

const produto = {}

console.log(produto.preco) // undefined, pq o preco não está definido no produto

produto.preco = 3.50
console.log(produto) // { preco: 3.5 }

// para tirar o um atributo de um objeto
delete produto.preco
console.log(produto) // {}

produto.preco = null // sem preço
console.log(produto.preco) // null

console.log(!!produto.preco) //false