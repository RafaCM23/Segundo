var cadena1 = "hola";
var numero1 = 2;
console.log(cadena1 + numero1);
var animales;
(function (animales) {
    animales[animales["gato"] = 0] = "gato";
    animales[animales["perro"] = 1] = "perro";
    animales[animales["loro"] = 2] = "loro";
})(animales || (animales = {}));
;
console.log(animales.gato + animales[1]);
var array;
array = ["casa", "coche"];
var array2;
var tupla;
var funcionAlCuadradoFlecha = function (numero, param2, param3) {
    if (param2 === void 0) { param2 = "Prueba"; }
    console.log("Numero: " + numero + ", param2: " + param2 + ", param3: " + param3);
};
//Si quiero no poner valor a uno por defecto ponemos: undefined
//Esto esta en los apuntes (Parametros por defecto y opcional)
//funionAlCuadradoFlecha(3);
//funionAlCuadradoFlecha(3,"casa");
//funionAlCuadradoFlecha(3,"casa","cadena");
//
//
