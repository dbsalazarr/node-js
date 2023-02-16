/*
    EL OBJETIVO DE ESTA PRÁCTICA ES EMULAR TODO LO APRENDIDO HASTA EL MOMENTO CON NODE JS Y ASINCRONISMO
    TODO: Código básico para emular la obtención, lectura, escritura y registro de información
    * Se debe tener en cuenta que este de funcionamiento es del tipo asincrono, pero que se debe ejecutar de manera secuencial para que todo este proceso se ejecute de manera correcta
*/

// OBTENIENDO EL REGISTRO
let dbFiles = [
    {
        nombre: "Bremdow",
        direccion: "Desconocido",
        edad: new Date().getFullYear() - 1996
    },
    {
        nombre: "Nancy",
        direccion: "Paradero Aeropuerto",
        edad: new Date().getFullYear() - 1972
    },
    {
        nombre: "Yenifer",
        direccion: "Avp. Wimpillay",
        edad: new Date().getFullYear() - 1995
    }
]

function obtenerRegistro(id){

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("1. Obteniendo el registro ...")
            resolve(id)
        }, 1000)
    })

}

function lecturaRegistro(id){
    return new Promise( (resolve, reject) => {
        console.log("2. Desencriptando los datos ....")
        setTimeout(()=>{
            let personalData = `
            Nombre: ${dbFiles[id].nombre}
            Dirección: ${dbFiles[id].direccion}
            Edad: ${dbFiles[id].edad}
            `
            console.log(personalData)
            resolve(id)

        }, 3000)
    })
}

function escrituraRegistro(id){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(`3. Usuario ${dbFiles[id].nombre} los registros se modificaron correctamente`)
            resolve(id)
        }, 500)
    })
}

function guardarRegistro(id){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(`4. Registros guardados para ${dbFiles[id].nombre}`)
            console.log("5. Finalizando la conexión")
        }, 1000)
    })
}

// LO QUE NORMALMENTE PASABA EN UNA FUNCIÓN ASINCRONA 

// saludar("nombre", () =>{
//     código para el callback
//     console.log(nombre)
// })

// EJECUTANDO EL ASINCRONISMO MEDIANTE PROMESAS
console.log("Start Process")
// [parametros] [then() para llamar al callback]
/*
    En then definimos el callback a ejecutar
 */
// El parametro es accessible desde todos los then()

// FILE
obtenerRegistro(1)
        .then( (id)=>{
            return lecturaRegistro(id)
        }) 
        .then( (id) => {
            return escrituraRegistro(id)
        })
        .then( (id) => {
            guardarRegistro(id)
            console.log("End Process")
        })

// FILE 1
async function main(){
    let idFile = await obtenerRegistro(0)
    await lecturaRegistro(idFile)
    await escrituraRegistro(idFile)
    await guardarRegistro(idFile)
    console.log("End Process")
}

main()



