// pode-se acessar um Number a partir da variável this
Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)){
        console.log('A')
    }
    else if(nota.entre(7, 8.99)){
        console.log('B')
    }
    else if(nota.entre(6, 6.99)){
        console.log('C')
    }
    else if(nota.entre(0, 5.99)){
        console.log('D')
    }
    else{
        console.log('Nota inválida')
    }
}

imprimirResultado(10) // A
imprimirResultado(8.9) // B
imprimirResultado(6.55) // C
imprimirResultado(2.3) // D
imprimirResultado(-1) // Nota Inválida
imprimirResultado(11) // Nota Inválida