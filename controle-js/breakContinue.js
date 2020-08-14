/*
break e continue não agem sobre um bloco if
o break vai interromper o laço e fazer a execução ir para a proxima sentença fora do laço

o continue interrompe a repetição atual e faz a execução ir para a próxima repetição, mas não sai do laço
só faz sentido usar em estruturas de repetição
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if(x == 5){
        break // neste caso imprime até o índice 4 e sai do laço quando o índice é igual a 5
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums){
    if(y == 5){
        continue //pula a impressão quando o índice = 5 e continua a execução do índice posterior em diante
    }
    console.log(`${y} = ${nums[y]}`)
}