/* 
com var a variável var fica visível mesmo fora do escopo, 
mesmo fora do bloco de código onde foi declarada,
exceto se estiver dentro de uma função*/

{
    {
        {
            var visivel = 'Visível???'
        }
    }
}

console.log(visivel) // Visivel???

// a variável var não fica visível fora do escopo de uma funcão

function teste() {
    var local = 123
    console.log(local)
}
teste() // 123

//console.log(local) vai resultar ReferenceError: local is not defined

/* 
var tem dois escopos possíveis, ou ele é global, e a variável é visível na aplicação inteira, 
ou ele é um escopo de função, e a variável é visível apenas no escopo da função
evitar criar variáveis que vão para o escopo global
*/

//o var ignora o escopo e sobrescreve o valor

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero) // 2
}
console.log('fora = ', numero) // 2

// USANDO VAR EM LOOP

// a variavel var fica visível fora do escopo do laço

for(var i = 0; i < 10; i++){
    console.log(i) // imprime de 1 a 9
}
console.log('i =', i) // vai imprimir 10, valor que faz com que ele saia do laço

// outro exemplo 

const funcs = []

for(var j = 0; j < 10; j++){
    funcs.push(function(){
        console.log(j)
    })
}
// vai imprimir para todos os indices o valor 10, que é o último valor da varável i, que faz com que saia do laço

funcs[2]() // 10
funcs[8]()// 10