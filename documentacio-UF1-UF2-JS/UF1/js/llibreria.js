const PI = 3.141592;
export default PI;
//la exportacio de constants i variable per defecte
//cal fe-la en dos passos Primer declarar i depsres exportar
export function saludar() {
  console.log("Bona tarda!");
}

//el default es carregara automaticament la llibreria a la memoria

//el default no espot utilitzar més de un al mateix modul
//no espot utilitzar arrow function
export let persona = {
  nom: "Aissam",
  edat: 19,
  correr: function () {
    console.log("estic corrent....");
  },
};
