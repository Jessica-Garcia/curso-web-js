/* 
Função em JS é First-Class Object ou First-Class Citizens ou Higher-order function
significa que função pode ser tratada com um dado, a função pode ser passada como parâmetro, pode ser retornada 
como resposta de uma função, pode ser armazenada em uma variável
e uma função pode ter outra função dentro dela
*/

/*
CRIANDO  FUNÇÃO DE FORMA LITERAL: function fun1() {}
pode receber parâmetros e retornar um valor, 
o retorno de um valor de uma função em JavaScript é opcional
caso não retorne nada especificamente a função retornará undefined
toda função em JS retorna pelo menos undefined caso não seja chamado explicitamente o return
*/
function fun1() { }

/*
ARMAZENANDO UMA FUNÇÃO EM UMA VARIÁVEL OU CONSTANTE: const fun2 = function() {}
neste caso a função é anônima atribuída a uma constante e com isso pode-se referenciar essa 
função a partir dessa constante que tem que ser invocada com os parênteses
*/
const fun2 = function() { }

// ARMAZENANDO FUNÇÕES DENTRO DE UM ARRAY

const array = [function (a, b){ return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// ARMAZENANDO FUNÇÕES EM UM ATRIBUTO DE OBJETO

const obj = {}
obj.falar = function () {return 'Opa!'}
console.log(obj.falar())

//PASSANDO FUNÇÃO COMO PARÂMTRO PARA OUTRA FUNÇÃO

function run(fun){
    fun()
}
run(function(){ console.log('Executando...')})

//UMA FUNÇÃO PODE RETORNAR E CONTER UMA FUNÇÃO
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)

// outra forma

const fun3 = soma(2, 3)
fun3(4)