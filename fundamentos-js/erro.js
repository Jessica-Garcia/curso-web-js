function tratarErroELancar(erro){
    //throw new Error ('Ocorreu um erro')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.msg,
        date: new Date
    }
}

function imprimirNomeMaiusculo(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (e) {
        tratarErroELancar(e)
    }
    finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeMaiusculo(obj)