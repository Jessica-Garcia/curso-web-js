const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) // this chamando o atributo saudação do objeto pessoa que é o dono da função falar
    }
}

pessoa.falar() // Bom dia!

/* se a função falar for armazenada em uma outra variável ou constante, 
o atributo saudação vai apontar para um objeto diferente do objeto pessoa,
e a função falar não vai encontrar o atributo saudação e ficará undefined*/

const falar = pessoa.falar
falar() // undefined

/* o que pode ser feito neste caso é o uso da função bind, onde se passa como argumento
objeto do qual se trata o this,
usa-se para garantir que determinada função que foi definida dentro de um componente, 
de fato sempre aponte para o componente, independente de onde seja executada essa função
*/

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Bom dia!
