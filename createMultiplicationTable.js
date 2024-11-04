function createMultiplicationTable() {
    
    let numero = 1

    for (let index = 1; index <= 10; index++) {
        let resultado = numero * index 
        console.log(`${numero} * ${index} = ${resultado}`) 
    }
}

createMultiplicationTable()

//module.exports = createMultiplicationTable (para memorizar el code de exportacion, ignorar xd)