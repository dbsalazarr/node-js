// CONVIRTIENDO LAS FUNCIONES ASINCRONAS EN ASYN AWAIT
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
            // resolve(mensaje);
            resolve("Tienes tos y no puedes conversar, repose en cama >:v ")
        }, 1000)
    })
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("Adios, "+nombre)
            resolve(nombre)
        }, 500)
    })
}

// EJECUCIÓN DEL AWAIT
async function main(){
    let nombre = await hola("Bremdow")
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    adios(nombre)
    console.log("End Process")
}
console.log("Start Process")
main()
