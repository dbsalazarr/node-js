function asincrona( callback ){
    // Verificar los errores
    setTimeout( () => {
        try{
            let a = 3 + z
            callback(null, a)
        }catch(err){
            console.log("El error es:")
            console.log(err)
            callback(err)
        }
    }, 1000)
}

  
asincrona( (err, dato) => {
    if(err){
        console.error("Se tiene un error")
        console.error(err)
        // throw err  (No sirve en función asincronas)
        return false
    }
    console.log("Todo esta bien, el dato e")
})
