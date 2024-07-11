/*
Define una clase Auto con las propiedades marca (string), modelo (string) y
año (number).

Define un método en la clase Auto llamado "descripción" que devuelva un string
con la descripción del auto

Crear una instancia de la clase Auto y llamar el método "descripción".

*/
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    Auto.prototype.descripcion = function () {
        return "Auto: ".concat(this.marca, " ").concat(this.modelo, ", A\u00F1o: ").concat(this.año);
    };
    return Auto;
}());
//PRUEBAS
var miAuto = new Auto("Toyota", "Corolla", 2020);
console.log(miAuto.descripcion()); //Debería imprimir "Auto: Toyota Corolla, Año: 2020"
