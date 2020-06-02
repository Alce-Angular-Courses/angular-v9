
/* function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}

Persona.prototype.saludar =  function () {
        console.log(`Hola, soy ${this.nombre}`)
    } */

class Person {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`)
    }
}

const p1 = new Person('Rosa', 23)
console.log(p1)
const p2 = new Person('Ernesto', 26)
p2.apellido = 'Gomez'
delete p2.edad
console.log(p2)
p2.saludar()
p1.saludar()

class Alunmo extends Person {
    constructor(nombre, edad, curso) {
        super(nombre, edad)
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}

const a1 = new Alunmo('Elena', 32, 'Angular')
console.log(a1)
a1.saludar()