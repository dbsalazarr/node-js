process.on('beforeExit', () =>{
    console.log("El programa esta por terminar su ejecución")
})


process.on('exit', () =>{
    console.log("Vaya, el programa termino su ejecución")
})
// Capturar un error
process.on('uncaughtException', (err, origen) =>{
    console.error("Ups, se ha detectado un error que no sido controlado mediante un try/catch")
    console.error(err.message)
    setTimeout( () => {
        
    }, 0)
})

gaaaaaaaaaaaaaaa()

// Capturar promesas que se han rechazado
process.on('unhandledRejection', () => {

})