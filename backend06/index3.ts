/* 
Define una clase Auto con las propiedades marca (string), modelo (string) y 
año (number).

Define un método en la clase Auto llamado "descripción" que devuelva un string 
con la descripción del auto

Crear una instancia de la clase Auto y llamar el método "descripción".

*/

class Auto {
    marca: string;
    modelo: string;
    año: number;

    constructor(marca: string, modelo: string, año: number){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    
    descripcion(): string{
        return `Auto: ${this.marca} ${this.modelo}, Año: ${this.año}`;
    }

}

//PRUEBAS

const miAuto = new Auto("Toyota", "Corolla", 2020);
console.log(miAuto.descripcion()); //Debería imprimir "Auto: Toyota Corolla, Año: 2020"
