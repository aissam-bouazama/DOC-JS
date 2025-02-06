function holaMon(nom = "desconegut") {
  alert(`Hola, ${nom} `);
  //console.log(event); //deprecated
}

const $eventsemantic = document.querySelector("#event-semantic");
$eventsemantic.onclick = holaMon; //COMPTE!! va sense paraèntesis
//alternatives
//1 amb una una funcio anònima
$eventsemantic.onclick = function () {
  alert("Event cridat amb una funció anònima");
};
/*2 amb Arrow Function */
$eventsemantic.onclick = () => alert("Event cridar amb una funció fletxa");

const $eventMultiple = document.getElementById("event-multiple");
//COMPTE! No és "onclick" sinó "click"
//COMPTE! la rida de la funció va sense parèntesis
//amb el events Listener es pot posar varies accions
$eventMultiple.addEventListener(
  "click",
  holaMon
); /*els funcions en event listener sense parentesis */
$eventMultiple.addEventListener("click", () =>
  alert("segon handler sobre el click")
);
$eventMultiple.addEventListener("click", () => holaMon("Aissam"));
$eventMultiple.addEventListener("dblclick", () => alert("doble click ...."));

const $event_dbl = document.getElementById("event_dbl");
$event_dbl.addEventListener("dblclick", () => alert("event-dbl"));

$event_dbl.addEventListener("click", () => alert("click 1"));
$event_dbl.addEventListener("click", () => alert("click 2"));

//remove event click. Només funciona si s'utilitza  múltiples events ambb addEventListener la funció ha de ser declarada o expressada. No pot ser anònima
const removeEventclick = (e) => {
  alert(`eleminant l'event ${e.type}`);
  $btneventremove.removeEventListener("click", removeEventclick);
  //$btneventremove.disabled = true;
};
const $btneventremove = document.getElementById("remove_event");
$btneventremove.addEventListener("click", removeEventclick);
$btneventremove.addEventListener("dblclick", () => alert("double click"));

/*Flux d'events -bombolla i captura */

const $divevents = document.querySelectorAll(".flux-events div");
console.log($divevents);
function fluxevents(e) {
  console.log(`hola, soc ${this.className}, orígin ${e.target.className}`);
  //desactivar els altres clicks només el element que he fet click és el que mostre
  //e.stopPropagation();
}
//assignarem dínamicament listeneres...
//el true el true els fa de fora per dins i el false del exterior al interior
//el once lo que fa es fa el click només un vegada i desactiva el event de click
//capture el ordre de execusió
/*
$divevents.forEach((div) =>
  div.addEventListener("click", fluxevents, {
    once: true,
  })
);*/
$divevents.forEach((div) => div.addEventListener("click", fluxevents));

const $linkevent = document.querySelector(".flux-events a");
console.log($linkevent);
$linkevent.addEventListener("click", (e) => {
  //alert("has fet click a google");
  e.preventDefault(); //Cancela l'acció per defete...
  // e.stopPropagation();
});

/*delegació d'events al DOM*/
/*la ides és delegar events a un element pare o superior . a partir d'aqui cal detectar el node o l'element que ha activat l'event i llavors descencadenar la progromació. exemple: En un formulari podríem assignar l'event a nivell de formulari en comptes de fer-ho per cada input Inclús podríem delegar l'event al document. 


amb un sol listener al document,detectem l'element que ha descencadenat l'event i actuarem en conseqüència. A més no hi ha propogació perqué l'event és al l'element superior. */

/*ASSIGNACIó DINÀMICA
la delegació d'events és l'única forma d'assignar events a l'element HTML no estan renderitzats al document .*/

document.addEventListener("click", (e) => {
  //alert(`event click  capturat al document a  ${e.target.className}`);
  if (e.target.matches(".flux-events a")) {
    alert("hem fet click al enllaç de google");
    e.preventDefault();
  } else if (e.target.matches(".flux-events div")) {
    alert(`hem fet click o origin: ${e.target.className}`);
  } else {
    alert(`un altre element ${e.target}`);
  }
});
