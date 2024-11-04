const prompt = require('prompt-sync')()

function numerosSiguientes(){
    let num = parseInt(prompt("Escriba un numero y le mostrare los 10 siguientes: "))
    for (let index = 1; index <=10; index++) {
        let resultado = num + index
        console.log(resultado)
    }
}
//numerosSiguientes()
//--------------------------------------
function numerosEntre1y57() { //la consigna decia 1, pero supongo que fue un error, en caso contrario el ultimo numero sera 55
    for (let index = 0; index <=57; index+= 3) {
        console.log(index)
    }
}
//numerosEntre1y57()
//--------------------------------------
function sumatoria0y100(){ //se van mostrando los resultados que se van sumando ([1]+[2]=3+[3]=6+[4]=10+[5]=15...)
    let resultado = 0
    for (let index = 0; index <=100; index++) {
    resultado = resultado + index
        console.log(resultado)
    }
}
//sumatoria0y100()
//--------------------------------------
function mayusculizador() { //existe esa palabra?!!
    let palabra = prompt("No sabes deletrear? yo te ayudo papa, escribe una palabra: ").toUpperCase()
    for (let index = 0; index < palabra.length; index++) {
        console.log(palabra[index])
    }
}
//mayusculizador()
//--------------------------------------
function soloParesContainer(){  //para exportar la funcion completa
    let num = [10,20,5,1,345,50]
    function soloPares(num) {
        let pares = []
        for (let index = 0; index < num.length; index++) {
            if (num[index] % 2 === 0){
                pares.push(num[index])
            }
        }
        return pares
    }
    let resultado = soloPares(num)
    console.log(resultado)
}
//soloParesContainer()
//--------------------------------------
module.exports = {
    numerosSiguientes,
    numerosEntre1y57,
    sumatoria0y100,
    mayusculizador,
    soloParesContainer
}

