const cadena1: string = "hola";
const numero1: number = 2;

console.log(cadena1+numero1);

enum animales {"gato","perro","loro"};

console.log(animales.gato + animales[1])

let array: string[];
array = ["casa","coche"];

let array2: Array<string>;

let tupla: [string,number];

let funcionAlCuadradoFlecha = (numero:number,param2:string="Prueba",param3?:String)=>{

    console.log(`Numero: ${numero}, param2: ${param2}, param3: ${param3}`);
}
//Si quiero no poner valor a uno por defecto ponemos: undefined

//Esto esta en los apuntes (Parametros por defecto y opcional)
//funionAlCuadradoFlecha(3);
//funionAlCuadradoFlecha(3,"casa");
//funionAlCuadradoFlecha(3,"casa","cadena");
//
//
