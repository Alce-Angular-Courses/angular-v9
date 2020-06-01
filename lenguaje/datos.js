console.log('Hola mundo')
console.log(23)
console.log(true)

let v
console.log(typeof v)
console.log(v)
v = 'Pepe'
console.log(typeof v)
console.log(v)
v = 23
console.log(typeof v)
console.log(v)
let v2 = v
v = true
console.log(typeof v)
console.log(v)
v = [2,3,4,5]
console.log(typeof v)
console.log(v)
v = {nombre: 'Pepe', edad: 23}
console.log(typeof v)
console.log(v)
console.log(v2)

const y = 23
// y = 'Pepe' daria error
const user = {nombre: 'Juan', edad: 23}
const user2 = user
console.log(user)
user.edad = 24
console.log(user)
console.log(user2)

