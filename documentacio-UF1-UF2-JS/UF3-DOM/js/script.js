/*
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.styleSheets);
console.log(document.scripts);
*/
//obtener el que seleccione el usuari de la pagina i sexecuta amb el tiemout després de 3 sec i lo converteix a un String
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
