import {
  longitude,
  longitudeArrow,
  subcadena,
  separarParaules,
  repetir,
  capgirar,
  cercarRepeticions,
  subcadenaArrow,
} from "./exllibreria.js";

//Ex1
let paraula = "";

longitude(paraula);

console.log(longitudeArrow("superman"));

//EX2
console.log(subcadena("aissam bouazama", 4));
console.log("Exercici -----------------ARROW FUNCTIONS 2");
//el cas de cadena buida
subcadenaArrow("", 4);
//el cas de la longitud sigue neagtiu
subcadenaArrow("Aissam", -4);
//el cas de la longitud sigue més gran que el text
subcadenaArrow("Aissam", 7);
//el cas de la longitud sigue igual a 0
subcadenaArrow("Aissam", 0);
subcadenaArrow(12, 1);
subcadenaArrow("12", "1");

// POVES DE L'EXERCICI 2 ARROW FUNCTIONS

//EX 3

separarParaules("hola buenas dias", " ").forEach((ele) => {
  console.log(ele);
});

console.log(separarParaules("hola buenas dias", " "));

//EX 4
console.log(repetir("hola", 4));

//EX 5
console.log(capgirar("aissam"));

//EX6

console.log(cercarRepeticions("de més de menys", "de"));
