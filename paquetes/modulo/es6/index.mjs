// IMPORTANDO EL MÓDULO CON ES6
import modulo from './module.mjs'

console.log(modulo)

console.log(modulo.prop1)
console.log(modulo.prop2)

let nombre = "Davis"
modulo.saludar(nombre)
modulo.adios(nombre)