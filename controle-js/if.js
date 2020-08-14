function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1) // Aprovado com 8.1
soBoaNoticia(6.1) // não imprime nada

function seForVerdadeEuFalo(valor){
    /* 
    no caso deste if o valor deve ser verdadeiro ou falso, automaticamente esse valor vai ser convertido 
    para true ou false, e só vai imprimir no console se o valor for convertido para true
    */
    if(valor){
        console.log('É verdade... ' + valor)
    }
}
/*se não passar nada como valor para a função o valor fica undefined que representa false,
e, neste caso, não imprime nada*/
seForVerdadeEuFalo()

seForVerdadeEuFalo(null) // null representa false e, neste caso, não imprime nada
seForVerdadeEuFalo(NaN) // NaN também representa false
seForVerdadeEuFalo('') // string vazia também representa false
seForVerdadeEuFalo(0) // o número zero também representa false

seForVerdadeEuFalo(-1) // qualquer outro número representa true, então imprime: É verdade... -1
seForVerdadeEuFalo(' ') // string com espaço representa true, então imprime: É verdade...
seForVerdadeEuFalo('?') // qualquer string preenchida representa true, então imprime: É verdade... ?
seForVerdadeEuFalo([]) // array vazio representa true, então imprime: É verdade...
seForVerdadeEuFalo([1, 2]) // array com elementos representa true, então imprime: É verdade...1,2
seForVerdadeEuFalo({}) // objeto vazio representa true, então imprime: É verdade... [object Object]

