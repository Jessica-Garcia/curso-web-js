let contador = 1

while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador ++
}

// fazendo o mesmo com for

for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i = 0; i < notas.length; i++){
    console.log(`notas = ${notas[i]}`)
}

/*
FOR/IN (PERCORRE OS ATRIBUTOS DE UMA DETEREMINADA ESTRUTURA) 
não é uma alternativa muito interessante para array!
*/
const notas2 = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas2){
    console.log(`índice ${i}, nota ${notas2[i]}`)
}

// para percorre todos os atributos de um objeto com for in

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
