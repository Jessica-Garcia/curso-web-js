// let tem escopo de bloco, estará visível apenas dentro do bloco de código onde foi declarado
// a preferencia  de busca de valor é sempre do escopo mais interno

let numero = 1 
{
    let numero = 2
    console.log('dentro', numero) // dentro 2
}
console.log('fora', numero) // fora 1

// USANDO LET EM LOOP

// a variável let i não ficará visível fora do for

for(let i = 0; i < 10; i++){
    console.log(i) // imprime de 1 a 9
}

//console.log('i =', i) gera ReferenceError: i is not defined

// outro exemplo 

const funcs = []

for(let j = 0; j < 10; j++){
    funcs.push(function(){
        console.log(j)
    })
}
// vai imprimir o valor definido pela função para cada índice do array 
funcs[2]() // 2
funcs[8]()// 8