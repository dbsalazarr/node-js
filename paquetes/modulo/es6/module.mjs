function saludar(nombre){
    console.log("Hola", nombre, "un placer poder saludarte")
}

function adios(nombre){
    console.log("Adios", nombre, "cuidate mucho por favor")
}



// export default saludar

// El exportación de funciones y propiedades también se puede realizar mediante objetos

export default {
    saludar,
    adios,
    prop1: "Soy un robot Kawai :v ",
    prop2: "Tengo una gran capacidad lógica"
}

export const 
    name = 'D Robot',
    age = 18