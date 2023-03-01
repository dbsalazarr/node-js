// EL buffer nos permite trabajor 
// Guardar 1 en el buffer
// let buffer = Buffer.alloc(4);
let buffer = Buffer.from( [1, 2, 3, 4, 'hola', true, false, {}, 24.1,  ["hola"] ] )
console.log("buffer", buffer)

// Un buffer nos permite trabajar con la información en binario y expresada en hexadecimal
buffer = Buffer.from('Bremdow')

console.log(buffer);

/**
 * Abecedario
 */

let abc = Buffer.alloc(26)
console.log(abc)

for(let i = 0; i < 26; i++){
    // se le agrega 97 (código ascii) para generar cada letra del abecedario
    abc[i] = i + 97
}

console.log(abc.toString())