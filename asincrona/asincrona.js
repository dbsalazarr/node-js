function hola(nombre, myCallback ){
    setTimeout( () => {
        console.log("Hola, " + nombre)
        myCallback(nombre)
    }, 1000)
}
function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log("Adios, "+nombre)
        otroCallback()
    }, 1000)
}

// EJECUCIÓN DE LAS FUNCIONES
console.log("Start Process")

hola("Bremdow", function(nombre){
    adios(nombre, function(){
        console.log("Terminando el proceso")
    })
})

// hola('Davis', ()=>{})
// adios('Davis', ()=>{})