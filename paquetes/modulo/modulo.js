// CREANDO EL MÓDULO

// Creando un módulo 
function saludar(nombre){
    console.log("Hola", nombre, "un placer poder saludarte")
}
// para que se utilizar tal módulo es necesario exportar las funciones y propiedades que se requieran, por ejemplo

// Solo la funcíón saludar
// module.exports = saludar

// función y propiedades
module.exports = {
    saludar,
    prop1: 'Mi nombre es Bot-D',
    prop2: 'Tengo $/%! de edad'
}