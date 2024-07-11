/*
Define una clase base Gente con las propiedades nombre (string) y edad (number), y
un método presentarse que devuelva un string presentando a la persona.

Define una clase Estudiante que extienda de Gente y añade una propiedad
grado(string).

Sobrescribe el método presentarse en la clase Estudiante para incluir el grado en la
presentación.

Crea una instancia en la clase Estudiante y llama el método presentarse

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Gente = /** @class */ (function () {
    function Gente(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Gente.prototype.presentarse = function () {
        return "Hola, me llamo ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Gente;
}());
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, edad, grado) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.grado = grado;
        return _this;
    }
    Estudiante.prototype.presentarse = function () {
        return "".concat(_super.prototype.presentarse.call(this), " Estoy en ").concat(this.grado, ".");
    };
    return Estudiante;
}(Gente));
var estudiante = new Estudiante("Martha", 20, "Segundo año");
console.log(estudiante.presentarse()); //Imprime: "Hola, me llamo Martha y tengo 20 años. Estoy en segundo año."
