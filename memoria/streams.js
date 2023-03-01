const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data = ''

let readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.setEncoding('UTF8')

readableStream.on('data', (chunk) =>{
    data += chunk
})

readableStream.on('end', () => {
    console.log("Se termino con la lectura del archivo")
    // console.log(data)
})


// Stream de escritura
// process ya es un buffer de escritura, por eso muestra los datos creados en la consola
// process.stdout.write('hola ')
// process.stdout.write('como ')
// process.stdout.write('estas ')

// este puede leer y escribir
const transform = stream.Transform

function mayus(){
    transform.call(this)
}

util.inherits(mayus, transform)

mayus.prototype._transform = function(chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase();

    this.push(chunkMayus)
    cb()
}

let mayuss = new mayus()

readableStream
    .pipe(mayuss)
    .pipe(process.stdout)