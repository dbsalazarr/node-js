// forma nueva de importar una libreria, esto se llama destructuring
const { exec, spawn } = require('child_process')

// su equivalente es y trae solo el módulo exec
// const exec = require('child_process').exec 

/*
    exec
    permite ejecutar comandos del SO
*/


exec('ls -la', (err, stdout, sterr) => {
    // si hay un error no lo ejecuta
    if(err){
        console.error(err)
        return false
    }
    // mostrar la salida si todo se ejecuta correctamente 
    console.log(stdout)
    // console.log(sterr)
})

// EJECUTANDO UN ARCHIVO DE NODE JS
/*
    Esto se podría modificar para ejecutar un código en Python
*/
// exec( 'node ./console/consola.js', (err, stdout, sterr) => {
//     if(err){
//         console.error(err)
//         return false
//     }
//     console.log(stdout)
// })

// EJECUTANDO UN ARCHIVO DE PYTHON

exec('py ./procesos-hijo/hola_mundo.py ', (err, stdout, sterr) => {
    if(err){
        console.error(err)
        return false 
    }
    if( stdout.trim() == "Hola mundo"){
        console.log("Hola papi soy JS un placer Python")
    }

    console.log(stdout.length)
    console.log(typeof stdout)
})

/*
    spawn
    nos permite ejecutar otro proceso hilo de ejecución al proceso ya existente
*/
let proceso = spawn('ls', ['-la'])
console.log(proceso)
console.log(proceso.pid)
console.log(proceso.connected)
console.log(proceso._server)

proceso.stdout.on('data', (dato) => {
    console.log("¿Esta muerto?")
    console.log(proceso.killed)
    console.log(dato.toString())
})

proceso.on('exit', ()=>{
    console.log("El proceso termino")
    console.log(proceso.killed)
})