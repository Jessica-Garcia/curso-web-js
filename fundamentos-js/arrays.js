
// Em JavaScript o array é uma estrutura indexada, heterogênea e com tamanho dinâmico
// índice começa em zero

const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])

// se tentar imprimir índice inexistente imprime undefined, não dá erro

console.log(valores[4]) // undefined

// adicionando valores no índice posterior ao último índice preenchido

valores[4] = 10
console.log(valores) // [ 7.7, 8.9, 6.3, 9.2, 10 ]

// adicionando valores em índices mais a frente do último índice preenchido
// avisa quantos índices estão vazios

valores[7] = 15
console.log(valores) // [ 7.7, 8.9, 6.3, 9.2, 10, <2 empty items>, 15 ]

// acessar quantidade de elementos do array com length

console.log(valores.length) 

// push() novos elementos no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores) //[ 7.7, 8.9, 6.3, 9.2, 10, <2 empty items>, 15, { id: 3 }, false, null, 'teste' ]

console.log(valores.length) //12
/* 
Não é uma boa prática, embora seja possível, fazer um array heterogêneo (com vários tipos), 
o ideal é ter um array com apenas um tipo, homogêneo
*/

//pop() retira o último valor do array e retorna esse valor, altera o tamanho do array 

console.log(valores.pop()) // imprime o último valor do array e retira esse valor do array e o índice
console.log(valores.length) //11
/* 
delete também exclui valores do array usar delete + nome do array + índice do elemento que quer excluir
mantém o índice, porém vazio, não altera o tamanho do array
*/

delete valores[0]
console.log(valores) //[ <1 empty item>, 8.9, 6.3, 9.2, 10, <2 empty items>, 15, { id: 3 }, false, null ]
console.log(valores.length) // 11

// em JavaScript um array é do tipo object

console.log(typeof valores) // imprime object
