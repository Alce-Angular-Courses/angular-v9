function suma(a = 0 , b = 0) {
    return a + b
}

console.log(suma())
console.log(suma(2))
console.log(suma(2,8))
console.log(suma(2,8,7,5,6,))

const resta = function (a = 0, b = 0) {
    return a - b
}
console.log(resta(12, 6))

// ES6

/* const prod =  (a = 1, b = 1) => {
    return a * b
} */

const prod =  (a = 1, b = 1) => a * b
console.log(prod(3,6))

const cubo = a => a * a * a
console.log(cubo(3))

/* setTimeout ( () => {
    console.log(cubo(10))
}, 2000) */


const data = [12, 43, 67, 36]

/* for (let i = 0; i < data.length; i++) {
    const item = data[i];
    console.log(item)
} */

data.forEach( (item, i) => { console.log(`El valor ${i} es ${item}`)})

const cuads = data.map( item => item*item )
console.log(cuads)
