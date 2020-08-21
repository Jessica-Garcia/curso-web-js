/* 
o fato de uma função não receber nenhum parâmetro não significa que não se possa passar parâmetros para ela 
e dentro da função pode-se recuperar esses parâmetros a partir da propriedade arguments
arguments é um array interno de uma função que tem todos os argumentos que serão passados
toda a função tem esse array interno arguments disponível
quando nenhum parâmetro é passado ese array está vazio
*/

function soma() {
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) // sem nenhum parâmetro o valor será zero, pois não tem argumentos e não entra no for
console.log(soma(1.1, 2.2 ,3.3)) // 6.6 somou todos os elementos passados

console.log(soma(1.1, 2.2 ,'Teste')) // 3.3000000000000003Teste soma os dois primeiros e concatena com a string

console.log(soma('a', 'b', 'c')) // 0abc