// IMPORTANDO EL MÓDUlO
/*
    En el require va la ruta y el nombre del módulo
*/
const modulo = require('./modulo')

// si no exportamos nada desde el módulo el objeto que retorna en la variable modulo, estará vacio

// Ejecutando el módulo
console.log(modulo)

// Mostrando una propiedad

console.log(modulo.prop1)
console.log(modulo.prop2)

// ejecutar la función 
modulo.saludar("Bremdow")