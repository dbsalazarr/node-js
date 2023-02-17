
// console.log(global)

i = 1
let intervalo = setInterval(() => {
    console.log("hello")
    if(i === 3){
        clearInterval(intervalo);
    }
    i++;
}, 1000)