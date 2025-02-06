let expReg = /\w+@\w+\.\w+/gi;
let cadena = "pere@hotmail.com";

console.log(expReg.exec(cadena));

let cadena2 = "@hotmail.com";

console.log(expReg.exec(cadena2));

console.log(expReg.test(cadena)); //true
console.log(expReg.test(cadena2)); //false

alert("Hola  mon desde la alerta");
