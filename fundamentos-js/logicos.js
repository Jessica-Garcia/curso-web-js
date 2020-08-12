/*
TABELA VERDADE

e, basta um falso para o resultado ser falso

v e v = v
v e f = f
f e ? = f

ou inclusivo, basta um verdadeiro para o resultado ser verdadeiro

v ou ? = v
f ou v = v
f ou f = f

xor, (ou exclusivo), se forem iguais o resultado é falso, se forem diferentes o resultado é verdadeiro

v xor v = f
v xor f = v
f xor v = v
f xor f = f
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //duas formas para xor (ou exclusivo)
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor (compara bit a bit)
    const comprarTv32 = trabalho1 != trabalho2 // no xor se forem diferentes o resultado é true, != simula um xor
    
    const manterSaudavel = !comprarSorvete

    //o retorno será um objeto com as 4 constantes

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true)) // true, true, false, false
console.log(compras(true, false)) // true, false, true, false
console.log(compras(false, false)) // false, false, false, true
console.log(compras(false, true)) // true, false, true, false