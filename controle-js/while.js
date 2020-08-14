/*
while é uma estrutura de repetição mais apripriada quando se tem uma quantidade indeterminada de repetições
mas pode ser usada com quantidade determinada de repetições também
enquanto a expressão for verdadeira dentro do while o laço será executado até que a expressão fique falsa
dentro do laço é necessario uma execução que faça com que em algum momento a expressão fique falsa
*/

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 6)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')