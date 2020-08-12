console.log(Math.ceil(6.1)) // 7, arredonda o valor definido para cima

const obj1 = {}
obj1.nome = 'Bola'

console.log(obj1.nome) // Bola

/*
a partir da palavra this, usando a notação ponto, cria-se tanto atrabutos, como funções
que serão expostas para fora da função quando ela for instanciada
usa-se a notação ponto para acessar os atributos que são visíveis dentro de determinado objeto
*/

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome) // Cadeira
console.log(obj3.nome) // Mesa
obj3.exec() // Exec...