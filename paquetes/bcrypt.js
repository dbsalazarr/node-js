const bcrypt = require('bcrypt')

const password = '1234Gaaa&'

// Un hash es un algoritmo para encriptar un cadena de caracteres
// Es un algoritmo cryptográfico
bcrypt.hash(password, 5, (err, hash) => {
    //  Ver error o los resultados
    if(err == undefined){
        console.log("No esta definido")
    }

    // comparar cifrados
    bcrypt.compare(password, hash, function(errC, res) {
        console.log(errC)
        console.log(res)
    })
    console.log(hash)
    
})