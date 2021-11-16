"use strict";
//ejercicio: hacer un modulo de calculo y usarlo desde otro ts
exports.__esModule = true;
var moduloCalculo_1 = require("./moduloCalculo");
var operaciones = new moduloCalculo_1.Calculo(2, 2);
console.log(operaciones.suma());
console.log(operaciones.resta());
console.log(operaciones.multiplica());
console.log(operaciones.divide());
