// AGREGANDO UN MODULO

// * MODULO FILE SYSTEM PARA CONTROLAR ARCHIVOS
const fs = require('fs')

// leer un archivo
function leer(ruta, callback){
    fs.readFile(ruta, (error, data) => {
        // Leyendo archivo
        // console.log(data.toString())
        // SE PUEDE REEMPLAZAR 
        callback(data.toString())
    })
}
leer(__dirname + "/file.txt", console.log)

// ESCRIBIR
function escribir(ruta, contenido, callback){
    fs.writeFile(ruta, contenido, (error) => {
        if(!error){
            console.log("Se terminado correctamente la lectura")
        }else{
            console.log("Hubo un error en la escritura")
        }
    })
}
let addLinea = "Linea 4: Ahora regreso a casa feliz por enfrentar a lo que hacía falta"
//escribir(__dirname + "/file.txt", addLinea)

leer(__dirname + "/file.txt", console.log)

function borrar(ruta, callback){
    fs.unlink(ruta, callback)
}

borrar(__dirname + '/file.txt', console.log)