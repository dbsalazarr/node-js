function hola(nombre){
    return new Promise( function(resolve, reject){
        setTimeout( () => {
            console.log("Hola, " + nombre)
            resolve(nombre)
        }, 1000)
    })
}

function hablar(mensaje ){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{    
            console.log("Estoy conversando con "+ mensaje)
            //resolve(mensaje);
            reject("Tienes tos y no puedes conversar, descansa sopenco :v ")
        }, 1000)
    })
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Adios, "+nombre)
            resolve(nombre)
        }, 1000)
    })
}

// EJECUCIÓN
console.log("Start Process")

hola("Ter")
    .then( (nombre) => {
        return hablar(nombre)
    })
    .then((nombre) => {
        return adios(nombre)
    })
    .then( (nombre)=>{
        console.log("End Process")
    })
    .catch( error => {
        console.error("Problemas en la comunicación: " + error)
    })