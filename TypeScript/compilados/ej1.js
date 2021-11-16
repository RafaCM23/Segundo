// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
//validar?
/*Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2 */
var sumaPorDosFlecha = function (numero1, numero2) {
    return (numero1 + numero2) * 2;
};
console.log(sumaPorDosFlecha(2, 3));
/*Función con parametros obligatorios, opcionales y por defecto
 donde NOMBRE = obligatorio
       PODER  = opcional
       ARMA   = por defecto = "arco" */
var getAvenger = function (nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un arma: " + arma;
    }
    return mensaje;
};
console.log(getAvenger("El Flechitas"));
console.log(getAvenger("Thor", undefined, "martillo"));
console.log(getAvenger("HombreHierrudo", "ser Asquerosamente Rico", "Energia en forma de dolor"));
/* Cree una clase que permita manejar la siguiente estructura
 La clase se debe de llamar rectangulo,
 debe de tener dos propiedades:
   * base
   * altura
 También un método que calcule el área  =  base * altura,
 ese método debe de retornar un numero. */
var rectangulo = /** @class */ (function () {
    function rectangulo(base, altura) {
        this.base = 1;
        this.altura = 1;
        this.base = base;
        this.altura = altura;
    }
    rectangulo.prototype.calculaArea = function () {
        return this.base * this.altura;
    };
    return rectangulo;
}());
var primero = new rectangulo(2, 2);
console.log(primero, primero.calculaArea());
