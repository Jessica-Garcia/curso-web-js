// par de chaves {} representa um objeto, é uma forma literal de escrever um objeto
// pode-se criar um objeto e ir definindo seus comportamento, atributos e funções dinamicamente

const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 4998.90

console.log(prod1) // { nome: 'Celular', preco: 4998.9 }

// criando um objeto já definindo algumas propriedades

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

//objetos podem conter outros objetos

const prod3 = {
    nome: 'Notebook Dell',
    preco: 4000.10,
    desconto1:{
        desconto: 0.40,
        desconto2:{
            desconto: 0.50
        }
    }
}

console.log(prod3)