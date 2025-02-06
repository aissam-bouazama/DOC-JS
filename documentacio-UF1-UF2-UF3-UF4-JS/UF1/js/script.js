import PI, { persona, saludar } from "./llibreria.js";
//per que es default  s'ha de posar fora dels claus
console.log(PI);
saludar();

console.log(persona);
persona.correr();

//els claus permeten que els variables seran locals
//s'executa con los claus que estan al final esso es autoexecutable
let edat = (function (nom) {
  console.log(`funció autoexecutable nom = ${nom}`);
  let edat = 19;
  return edat;
})("Aissam");

console.log(edat);
