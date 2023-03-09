console.time('bucle')
let suma = 0
for (let i = 0; i < 1000000; i++) {
    suma++
}
console.timeEnd('bucle')

console.time('Async')
    asincrona()
    .then( () => {
        console.timeEnd('Async')
    })


function asincrona( ){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("La función ha terminado de ejecutarse")
            resolve()
        }, 2500)
    })
}