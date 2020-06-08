let msg: string;
msg = 'Hola desde Typescript';
console.log(msg);

class PersonTS {
    /* public nombre: string;
    public edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    } */
    constructor(public nombre: string, public edad: number) {}

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const p1 = new PersonTS('Rosa', 23);
console.log(p1);
const p2 = new PersonTS('Ernesto', 26);
console.log(p2);
p2.edad = 27;
// Error p2.apellido = 'Perez';

class AlunmoTS extends PersonTS {

    constructor(nombre: string, edad: number,
                public curso: string,
                public mascota: Pet) {
        super(nombre, edad);
    }
    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`);
    }
}



interface Mascota {
    nombre: string;
    especie: string;
}

let m1: Mascota;

m1 = {nombre : 'Rufo', especie: 'canario'};

let p5: PersonTS;
p5 = {nombre: '', edad: null, saludar: null};

class Pet implements Mascota {
    constructor(
        public nombre: string,
        public especie: string
    ) {}
}

const a1 = new AlunmoTS('Elena', 32, 'Angular', new Pet('Spike', 'perro'));
console.log(a1);
a1.saludar();
