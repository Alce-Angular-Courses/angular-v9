// objetos literales

const datosEmpresa = [] // new Array()
const user = {nombre: 'Pepe', edad : 23} // new Object()

user.apellido = 'Perez'
delete user.edad
console.log(user)
user.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
}

user.saludar()

function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}

Persona.prototype.saludar =  function () {
        console.log(`Hola, soy ${this.nombre}`)
    }

const p1 = new Persona('Rosa', 23)
console.log(p1)
const p2 = new Persona('Ernesto', 26)
p2.apellido = 'Gomez'
delete p2.edad
console.log(p2)
p2.saludar()
p1.saludar()