let num1 = 1
let num2 = 2

num1++ // maneira pós fixada, precedência menor
console.log(num1) // 2
--num1 // maneira pré fixada, precedência maior
console.log(num1) // 1

console.log(++num1 === num2--) // true, o ++ foi executado antes da comparação e o -- só executou depois de comparar
console.log(num1 === num2) // false, pq o -- foi executado e já não são mais iguais