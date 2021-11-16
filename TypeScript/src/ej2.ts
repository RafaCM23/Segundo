//ejercicio: hacer un modulo de calculo y usarlo desde otro ts

import {Calculo} from  "./moduloCalculo"

let operaciones= new Calculo(2,2);

console.log(operaciones.suma());
console.log(operaciones.resta());
console.log(operaciones.multiplica());
console.log(operaciones.divide());