/*
Define una función saludar que tome un parámetro nombre de tipo string y devuelva
un string que diga "Hola, nombre".

Define una función suma que tome dos parámetros a y b, ambos de tipo number y
devuelva su suma como un number.
*/
function saludar(nombre) {
    return "Hola, ".concat(nombre);
}
function suma(a, b) {
    return a + b;
}
console.log(saludar("Andrew")); //Debería imprimir "Hola, Andrew"
console.log(suma(5, 3)); // Debería imprimir 8
