function otroErrorcito(){
    return vamoEquivocano()
}

function vamoEquivocano(){
    return 3 + z
}

function errorcitoAsincrono(){
    setTimeout( () => {
        try {
            return a + 5
        }catch(error){
            console.error(error.message)
        }
    })
}
try{    
    // otroErrorcito()
    errorcitoAsincrono()
    // vamoEquivocano()
}catch(error){
    console.error("Tuviste un error en:" + error)
    console.error(error.message)
}


console.log("Me ejecuto luego de error")

function seRompeAsin(){
    setTimeout( () => {
        try{
            return a + b 
        }catch(err){
            console.error("Error F. Asíncrona")
            console.error(err.message)
        }
    })
}

seRompeAsin()
