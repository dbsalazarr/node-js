function hola(nombre, myCallback ){
    setTimeout( () => {
        console.log("Hola, " + nombre)
        myCallback(nombre)
    }, 1000)
}

function hablar(mensaje, callbackHablar ){
    setTimeout(()=>{

        console.log(mensaje)
        callbackHablar();

    }, 1000)
}


function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log("Adios, "+nombre)
        otroCallback()
    }, 1000)
}

function conversacion(nombre, numeroVeces, callback){

    if(numeroVeces > 0){
        hablar(() => {
            conversacion(nombre, --numeroVeces, callback)
        })
    }else{
        callback()
    }

}

// EJECUCIÓN DE LAS FUNCIONES
console.log("Start Process")

hola("Bremdow", function(nombre){
    hablar("Hoy es un día agradable", function(){
        hablar("Si que lo es, pero ¿Por qué hablas solo?", function(){
            hablar("Deja de respondermeeee", function(){
                adios(nombre, function(){
                    console.log("Terminando el proceso")
                })
            })
        })
    })
})

// hola('Davis', ()=>{})
// adios('Davis', ()=>{})