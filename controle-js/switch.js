/*
O switch é uma seleção múltipla
switch não é uma expressão relacional que retorna um valor true ou false
pode-se passar valores e tipos para o switch para ele selecionar entre esses valores
por padrão usa-se o break para executar um dos casos e sair do bloco do switch
o case default se colocado no final não precisa break, caso contrário, break é necessário
*/
const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida')
    }
}

imprimirResultado(10)// Quadro de honra
imprimirResultado(8.9) // Aprovado
imprimirResultado(6.55) // Recuperação
imprimirResultado(2.3) // Reprovado
imprimirResultado(-1) // Nota Inválida
imprimirResultado(11) // Nota Inválida