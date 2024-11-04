const prompt = require('prompt-sync')()

function bankBalanceApp() { //agrego una funcion padre para agilizar la exportacion e importacion

    let montoActual = 1000
    
    let operaciones = []
    
    console.log("Cargando sistema...") //mientras introduce tarjeta
    console.log("Tu monto actual es $" + montoActual + ".") 
    
    console.log("Que operacion desea realizar?")
    console.log("1. Deposito")
    console.log("2. Retiro")
    let operacionCliente = parseInt(prompt("Escriba un numero: "))
    
    if (operacionCliente === 1) {
        let deposito = parseInt(prompt("Monto a depositar: "))
        operaciones.push(deposito) // .push agrega el depósito al array
    
    } else if (operacionCliente === 2) {
        let retiro = parseInt(prompt("Monto a retirar: "));
        operaciones.push(-retiro) // agrega el retiro al array pero en valor negativo
    }
    
    function calculateBalances(operaciones) {
        let totalDepositos = 0
        let totalRetiros = 0
    
        for (let operacion of operaciones) { // cada valor dentro del array se convierte en variable "operacion"
            if (operacion > 0) {
                totalDepositos = totalDepositos + operacion
            } else {
                totalRetiros = totalRetiros + operacion
            }
        }
        
        let montoFinal = montoActual + totalDepositos + totalRetiros
    
        return {
            totalDepositos,
            totalRetiros,
            montoFinal
        }
    }
    
    function bankBalance(nombre, apellido, operaciones) { //ticket de transaccion
        let balances = calculateBalances(operaciones)
    
        let totalDepositos = balances.totalDepositos
        let totalRetiros = balances.totalRetiros
        let montoFinal = balances.montoFinal
    
        console.log("Estimado/a " + nombre + " " + apellido)
        console.log("El monto total de los depósitos es de: $" + totalDepositos)
        console.log("El monto total de los retiros es de: $" + totalRetiros)
        console.log("Por lo tanto, su saldo actual en la cuenta es de: $" + montoFinal)
    }
    
    bankBalance("Alex", "Lucero", operaciones)
    
}

bankBalanceApp() //agregar comentado o borrar este llamado a funcion en caso de exportarla ya que sino se ejecutara sola.

module.exports = bankBalanceApp
