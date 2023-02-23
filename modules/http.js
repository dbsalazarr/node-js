const http = require('http');

http.createServer(router).listen(3000)


function router(req, res){
    // mensaje para informar que existe una nueva petición
    console.log("Nueva petición")
    // muestra la URL desde la cual se esta realizando dicha petición
    console.log(req.url)

    switch(req.url){
        case '/hola':
            res.write('Gracias por el saludo, hola')
            res.end()
        break
        default :
            res.write("Error 404: como que te has perdido un poco")
            res.end()
        break
    }
    res.writeHead(201, {'Content-Type' : 'text/plain'})
    // respuesta
    // res.write("Hola, bienvenido al server")
    // res.write("Estas accediendo a un servidor desde Node JS")
    //res.end()
}

console.log("Escuchando http en el puerto 3000")