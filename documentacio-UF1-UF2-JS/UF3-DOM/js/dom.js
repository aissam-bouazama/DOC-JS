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

/*Modificar O Afegir valors als Atributs */
document.documentElement.lang = "es";
document.documentElement.setAttribute("lang", "en");
/*posar a la viable que té un valor del DOM un $ al davant */
/*podem assignar la variable amb let o cons */

//3 de desiembre
const $linkDom = document.querySelector(".link-dom");

$linkDom.setAttribute("target", "_blank");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href", "https://www.google.com");

/*Existeix l'atribut */
console.log($linkDom.hasAttribute("rel"));
/*esborrar attribut */
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));

/*data-atributes */

console.log($linkDom.getAttribute("data-description"));
/*tots els data-atributs s¡emmagtzeme en un mapa anomenat "Data Set" */
console.log($linkDom.dataset);
/*com gestionem els data-atributes  */
/*el data- no fa falta  */
console.log($linkDom.dataset.description);

$linkDom.setAttribute("data-description", "model de objecte del document");
console.log($linkDom.dataset.description);
/*per canviar el valor de un data-atribute */
$linkDom.dataset.description = "Nova description";
console.log($linkDom.dataset.description);
console.log($linkDom.hasAttribute("data-description"));

console.log($linkDom.getAttribute("style"));
console.log($linkDom.style);
console.log($linkDom.style.backgroundColor);

/*Compte amb la sintaxi camel code en css estan separats per -!! 
la propietat css s'escriu background-color
CSS styleDeclaration o accedem amb el punt "." uilitza notació camel code
el valor entre comitas s'hauria d'utilitzar "-" per els propietats
 */
console.log(window.getComputedStyle($linkDom).backgroundColor);
console.log(
  window.getComputedStyle($linkDom).getPropertyValue("background-color")
);
/*retorna els estils aplicats per el link dom */
console.log(window.getComputedStyle($linkDom));

//variables css
/*
console.log("*****variables de css");
const $html = document.documentElement,
  $body = document.body;
let varPrimariColor =
    getComputedStyle($html).getPropertyValue("--color-primari"),
  varSecundariColor =
    getComputedStyle($html).getPropertyValue("--color-secundari");
console.log(varPrimariColor, varSecundariColor);

$body.style.backgroundColor = varSecundariColor;
$html.style.setProperty("--color-primari", "pink");
varPrimariColor = getComputedStyle($html).getPropertyValue("--color-primari");
$body.style.setProperty("--color-primari", varPrimariColor);*/

const $card = document.querySelector(".card");
console.log($card.className);

//accedir a les propietats css
//toggle
