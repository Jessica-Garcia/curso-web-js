// par nome/valor
const saudacao = 'Olá' // contexto léxico 1

function exec() {
    const saudacao = 'Oi' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 70,
    endereco: {
        logradouro: 'Rua Praia de Belas',
        numero: 1
    }
}

console.log(saudacao) // Olá
console.log(exec()) // Oi
console.log(cliente) //{ nome: 'Pedro', idade: 32, peso: 70, endereco:{ logradouro: 'Rua Praia de Belas', numero: 1 } }