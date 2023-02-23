// const { os } = require('os') ¿Por qué no funciona con este?
const os = require('os')

// Obtener la arquitectura del SO
console.log( os.arch() )

// Obtener el tipo de SO en la cual se esta ejecutando el código
console.log(os.platform() )

// Obtener la información de las CPU del SO
/*
    NOS MUESTRA LA INFORMACIÓN DE CADA NUCLEO E INDIRECTAMENTE OBTENER LA CANTIDAD DE NUCLEOS DEL SO
*/
console.table( os.cpus()) 
console.log( os.cpus()) 
// CANTIDAD DE NUCLEOS 
/* Con la cantidad de nucleos es posible saber cuantos procesos se pueden ejecutar */
console.log( os.cpus().length )

// VER ERRORES DEL SISTEMA
console.log(os.constants)


// OBTENER LA MEMORIA RAM DEL SO EN BYTES
/* Conocer la cantidad de memoría disponible puede ser util para saber si se cuenta con el espacio necesario para ejecutar nuestra aplicación */
const SIZE = 1024
function kb(bytes){return bytes/SIZE}
function mb(bytes){return kb(bytes)/SIZE}
function gb(bytes){return mb(bytes)/SIZE}

console.log( gb( os.freemem()) )
console.log( gb( os.freemem()) )

// OBTENER EL TOTAL DE LA MEMORIA RAM DISPONIBLE
console.log( gb( os.totalmem()) )

// OBTENER DIRECTORIOS
// RETORNA LA DIRECCIÓN DE LA CARPETA DEL USUARIO DEL SO
console.log(os.homedir())
// RETORNA LA CARPETA DE LOS ARCHIVOS TEMPORALES
console.log(os.tmpdir())

// OBTENER EL NOMBRE DEL HOST
/*
    Sirve para cuando se hace uso de microservicios 
    Retorna el nombre de la computadora
*/
console.log(os.hostname())

// OBTENER TODAS LAS CONEXIONES DE RED
/*
    Retorna todas las conexiones de red
 */
console.table( os.networkInterfaces() )