// Uso de Let y Const
const nombre: string = "Ricardo Tapia";
const edad: number = 23;

let PERSONAJE = {
    nombre: nombre,
    edad: edad
};


/*
Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}  
*/
interface superHeroes {
    nombre: string;
    artesMarciales: string[]
}
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
  }  
 
  
//validar?

/*Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2 */

let sumaPorDosFlecha = (numero1: number, numero2: number) => {
    return (numero1 + numero2) * 2;
}

console.log(sumaPorDosFlecha(2, 3));

/*Función con parametros obligatorios, opcionales y por defecto
 donde NOMBRE = obligatorio
       PODER  = opcional
       ARMA   = por defecto = "arco" */

let getAvenger = (nombre: string, poder?: string, arma: string = "arco") => {
    let mensaje: string;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    } else {
        mensaje = nombre + " tiene un arma: " + arma
    }
    return mensaje;
}

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

class rectangulo {
    base: number = 1;
    altura: number = 1;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calculaArea() {
        return this.base * this.altura;
    }
}
let primero: rectangulo = new rectangulo(2, 2);
console.log(primero, primero.calculaArea());



