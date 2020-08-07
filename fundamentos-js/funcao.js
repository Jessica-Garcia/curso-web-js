// função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) // 5

// pode-se passar apenas um paramatro para essa função mas o outro parâmetro será undefined e imprimirá um NaN
imprimirSoma(2) //NaN

//pode-se adicionar mais parâmetros, mas a função vai pegar os dois primeiros e ignorar o restante
imprimirSoma(2, 3, 4, 5, 6) // 5

// pode-se não passar nenhum parâmetro, vai imprimir NaN
imprimirSoma()// NaN

// Função com retorno

function soma(a, b = 1){
    return a + b
}
// como um parametro já está configurado pode-se passar apenas um parâmetro que vai imprimir a soma
console.log(soma(2)) // 3

// mas pode-se mudar o valor configurado passando outrovalor como parÂmetro
console.log(soma(2, 3)) // 5

// se não passar nenhum parâmetro imprimirá NaN, pq o primeiro parâmetro não foi configurado como o segundo

console.log(soma()) //NaN

// ARMAZENANDO UMA FUNÇÃO EM UMA VARIÁVEL (MUITO IMPORTANTE)

const imprimeSoma = function (a, b) {
    console.log(a + b)
}

imprimeSoma(2, 3) // 5

// ARMAZENANDO UMA FUNÇÃO ARROW EM UMA VARÁVEL

const somar = (a, b) => {
    return a + b
}

console.log(somar(2, 3)) // 5

// retorno implicito
//para funções de apenas uma única linha, executa apenas uma sentença de código (não precisa chaves neste caso)

const subtrai = (a, b) => a - b

console.log(subtrai(5, 2)) // 3

// função com apenas um parâmetro
const imprimir = a => console.log(a)

imprimir('Legal!!!') // Legal!!!