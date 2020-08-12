console.log(typeof Object) // function

console.log(typeof new Object()) // object - um objeto criado a partir de uma função

const Cliente = function() {}

console.log(typeof Cliente) // function

console.log(typeof new Cliente()) // object

class Produto {} // (ES6)
console.log(typeof Produto) // function
console.log(typeof new Produto()) // object

// uma das formas de criar um objeto em JavaScript é a partir de uma função, instanciando uma função
// funções podem ser instanciadas a partir da palavra reservada new