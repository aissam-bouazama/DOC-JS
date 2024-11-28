//Metodes per Capturar elements
//obtener element amb el nom de la etiqueta
console.log(document.getElementsByTagName("li"));
//obtener el element amb el nom de la class
console.log(document.getElementsByClassName("card"));
// obtener el element amb el atribut de la etiqueta en aquest Cas el nom
console.log(document.getElementsByName("nom"));
//Obtener elements amb el id de la tiqueta Html
console.log(document.getElementById("menu"));

// queden substituides per
console.log("utilitzant query Selector");
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));

//recórre una llista de nodes

document.querySelectorAll("a").forEach((element) => {
  console.log(element);
});
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);

//
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));

/* Attributs i Data-Attributs
els data atributs son atributs propis que nosaltres podem afegir . ales etiquetes HTML.Només cal afegir un atributque comenci per "data-"
continuació concatenarem */
/*hi ha dues formes als atributs*/
console.log("******** atributs i data-atributs *****");
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

//le notació amb "." retorna tot el que té href en temps d'execució
//i amb notació getAttribute només retorn el contingut que té href en temps d'edició

console.log(document.querySelector(".link-dom").getAttribute("href"));
console.log(document.querySelector(".link-dom").href);
