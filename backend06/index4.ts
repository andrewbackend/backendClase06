/*
Define una clase base Gente con las propiedades nombre (string) y edad (number), y 
un método presentarse que devuelva un string presentando a la persona.

Define una clase Estudiante que extienda de Gente y añade una propiedad 
grado(string).

Sobrescribe el método presentarse en la clase Estudiante para incluir el grado en la
presentación.

Crea una instancia en la clase Estudiante y llama el método presentarse

*/

class Gente{
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(): string{
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}

class Estudiante extends Gente {
    grado: string;

    constructor(nombre: string, edad: number, grado: string){
        super(nombre, edad);
        this.grado = grado;
    }

    presentarse(): string {
        return `${super.presentarse()} Estoy en ${this.grado}.`;
    }
}

const estudiante = new Estudiante("Martha", 20, "Segundo año");
console.log(estudiante.presentarse()); //Imprime: "Hola, me llamo Martha y tengo 20 años. Estoy en segundo año."

