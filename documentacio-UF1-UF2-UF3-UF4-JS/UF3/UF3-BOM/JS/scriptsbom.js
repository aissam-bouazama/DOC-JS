window.addEventListener("resize", (e) => {
  console.clear();
  console.log("********Event resize *********");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("********Event Scroll *********");
  console.log(window.scrollX);
  console.log(window.scrollY);
});
console.clear();
window.addEventListener("load", (e) => {
  console.log("********Event load *********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

//alternatives al load (OLD)
/*
window.load(function)
document.ready(function)
documen.on("ready",function)
*/
/*hi ha una alternativa a "load" més ràpida utilitzant l'even DOMContentLoaded */

window.addEventListener("DOMContentLoaded", (e) => {
  console.log("********Event DOMContentLoaded *********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

/*L'event DOMContentLoaded s'executa quan l document HTML ha estat carregat i parcejat ,quan el navegador té totes les etiquetes validades.En canvi , no espera que carreguin els fulls d'estils,les imatges, els scripts,... és, per tant, una opció mès òptima */

const $btnObrir = document.getElementById("obrir-finestra"),
  $btntancar = document.getElementById("tancar-finestra"),
  $btnimprimir = document.getElementById("imprimir-finestra");
let finestra = undefined;
$btnObrir.addEventListener("click", (e) => {
  finestra = window.open("http://127.0.0.1:5500/UF3-BOM/HTML/bom.html");
});
//hauria de estar del mateix per tancar la pagina
$btntancar.addEventListener("click", (e) => {
  finestra.close("");
});
$btnimprimir.addEventListener("click", (e) => {
  window.print("");
});

//alert confirm,alert,prompt
//alert
window.alert("Exemple alert");
window.confirm();
window.confirm("El javascript És genial")
  ? alert("és genial")
  : alert("no és genial");

//window.prompt();
window.prompt("Com et dius?") == "aissam"
  ? alert("Benvingut")
  : alert("No et Conec");
