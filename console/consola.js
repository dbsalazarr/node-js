let tabla = [
    {
        a: "Mensaje 1",
        b: "Otro mensaje"
    },
    {
        a: "Dato 1",
        b: "Dato 2"
    }
]
console.error("Ideal para mostrar un error")
console.warn("Mostrar una advertencia")
// Mostrar información en formato de tabla
// console.table(tabla);

// AGRUPAR VARIOS MENSAJES
console.log("Conversación")
console.group('Start Conversación')
console.log("hola")
console.log("Hoy es un día agradable")
console.log("Si, tienes razón, si que es un día agradable")
console.log("Adios")
console.groupEnd("End Conversación")

console.log("Un nuevo hilo de mensajes")

function function1(){
    console.group("Funcion 1")
    console.log("Pertenezco a la función 1")
    console.log("La función 1 es mi pastor :v ")
    function2()
    console.groupEnd("End Funcion 1")
}
function function2(){
    console.group("Start Funcion 2")
    console.log("Leal a la función 2")
    console.log("Tenemos que conversar, función 2 tiene que ser su mayor prioridad y creencia")
    console.groupEnd("End Funcion 2")
    console.log("Se regreso al grupo de la f1 ._.")
    console.log("gaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
}

function1()


// PODER CONTAR CON UN LOG

console.count("número")
console.count("número")
console.count("número")
console.count("número")
console.count("número")
console.countReset("número")
console.count("número")
console.count("número")