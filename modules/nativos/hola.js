// IMPORTANDO EL MODULO CREADO DESDE C++
const addon = require("./build/Release/addon")
// EJECUTANDO LA FUNCIÓN DEFINIDA
addon.hola()
// Mostrando lo importado en addon
console.log(addon)
// Imprimiendo lo que muestra la función hola
console.log(addon.hola())