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
//és un interruptor. si té la classe la treu ,si no la té la pasa
//de una altra manera comproba si existe si el trobe lo treure i si no existe no lo pose
// 4 de desiembre
console.log("****toogle*****");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
//$card.classList.toggle("rotate-45");

//replace
$card.classList.replace("rotate-45", "rotate-135");
//add
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
//permet no més un paramtre de valor tring
$card.classList.toggle("opacity-80");
$card.classList.toggle("sepia");

//gestion de text
/*com interactuar amb el contingut textual i Html de un element */

const $caption2 = document.querySelector(".caption2");
/*inner Text i innerContent  Respecte indentacions , peró no  interpreta els tags HTML */
//no és estandard
$caption2.innerText = `és la caption 2`;
//propietat estandard
$caption2.textContent = `és <b> la </b> caption 22`;
//si volem que s'interprete els tags HTML hem d'utilitzar innerHTML
$caption2.innerHTML = `és la <b>caption</b> 2`;
//estamos aqui
//per el inner text s'hauria de posar-les entre templates
//10 de desiembre
const $textDOM = document.querySelector("#outerHTML");
let text = `<p>
El model d'Objectes del Document (<b><i>DOM - Document Object Model</i></b>)és un API per a documents HTML i XML.
</p>
<p>
Facilita una representació estructural del document, permetent modificar el seu contingut i presentació visual mitjançant codi JS
</p>
<p>
<mark> El DOM no és part de l'especificació de JavaScript, és una API per als navegadors</mark>
</p>`;
/*inner Text   Respecte indentacions i tabulacions, peró no  interpreta els tags HTML */
/*inner text no és estaàndard . ës va crear per al navegador IE */

$textDOM.innerText = text;
/*la propietat estàndard textContent No respecte indentacion ni tabulacions i no  interpreta els tags HTML */
$textDOM.innerContent = text;

/*innerHTML s'intrpreten els tags HTML */
$textDOM.innerHTML = text;

/*outerHTML s'intrpreten els tags HTML  treu el tag seleccionat i posat el que donem */
$textDOM.outerHTML = text;

/*DOM Traverssing */

const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[0]);
//estem acceden als elemens
console.log($cards.parentElement);
console.log($cards.firstElementChild);
//accedem als Nodes
//el primer fil node és un return
console.log($cards.childNodes);
console.log($cards.lastChild);
console.log($cards.previousElementSibling);
console.log($cards.previousSibling);

//afegir i crear dínamicament elements i fragments
//Crear un element (card)
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Imatge 6");

//ara que ja tenim la nova <figure afegirem interactivament etiquetes al DOM
//segona opcion

$img.setAttribute("alt", "random6");
$img.setAttribute("src", "https://picsum.photos/200/200/?random=6");
$figcaption.appendChild($figcaptionText);
//crear elements
$cards.appendChild($figure).appendChild($img);
$figure.appendChild($figcaption);
//Afegir class a figure
$figure.classList.add("card");
const $figure2 = document.createElement("figure");
$figure2.innerHTML = ` <img
            src="https://picsum.photos/200/200/?random=7"
            alt="imatge de la "
          />
          <figcaption>imatge7</figcaption>`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

/*qué pass si volem molts nodes de cop */
//cada cop que fem un appendchild té un cost considerable al document HTM.
// Aixó pot fer  Qué si inserim centenar de tags html la pàgina quedi bloquejada o  congelada
//ESTRATEGIA: utilitzarem fragments!
/*volem crear molts nodes de cop  */
//primera opcio opció no optimizada
const estacion = ["Primavera", "estiu", "Hivern", "tardor"];
const $ul = document.createElement("ul");
document.write("<h3> Estacions de l'any </h3>");
document.body.appendChild($ul);
estacion.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

//SEGONA OPCIÓ NO OPTIMIZADA
const continents = ["Àfrica", "Europa", "Amèrica", "Ocenaia", "assia"];
const $ul2 = document.createElement("ul");
document.write("<h3> Continents del mon</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continents.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));
//TERCERA opció Optimizada!
/*Es tracta de crear fragments del dom i treballar amb aquestes fragments i al final afegirem el fragment al DOM */
const mesos = [
  "gener",
  "febrer",
  "març",
  "abril",
  "maig",
  "juny",
  "juliol",
  "agost",
  "setembre",
  "octubre",
  "novembre",
];

const $element = document.getElementById("ul"); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ["Firefox", "Chrome", "Opera", "Safari", "Internet Explorer"];

browsers.forEach(function (browser) {
  var li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

$element.appendChild(fragment);
