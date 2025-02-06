# AISSAM BOUAZAMA BOM UF3


### Taula de Continguts
1. [Esdeveniment de Redimensionament de Finestra](#esdeveniment-de-redimensionament-de-finestra)
2. [Esdeveniment de Desplaçament de Finestra](#esdeveniment-de-desplaçament-de-finestra)
3. [Esdeveniment de Càrrega de Finestra](#esdeveniment-de-càrrega-de-finestra)
4. [Esdeveniment DOMContentLoaded](#esdeveniment-domcontentloaded)
5. [Obrir, Tancar i Imprimir Finestres](#obrir-tancar-i-imprimir-finestres)


### Esdeveniment de Redimensionament de Finestra
```javascript
window.addEventListener("resize", (e) => {
    console.clear();
    console.log("********Esdeveniment resize *********");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
});
```
Aquest listener d'esdeveniments esborra la consola i registra les dimensions internes i externes de la finestra cada vegada que es redimensiona la finestra.

### Esdeveniment de Desplaçament de Finestra
```javascript
window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("********Esdeveniment Scroll *********");
    console.log(window.scrollX);
    console.log(window.scrollY);
});
```
Aquest listener d'esdeveniments esborra la consola i registra les posicions de desplaçament de la finestra cada vegada que es desplaça la finestra.

### Esdeveniment de Càrrega de Finestra
```javascript
window.addEventListener("load", (e) => {
    console.clear();
    console.log("********Esdeveniment load *********");
    console.log(e);
});
```
Aquest listener d'esdeveniments registra l'objecte de l'esdeveniment quan la finestra acaba de carregar-se.

### Esdeveniment DOMContentLoaded
```javascript
window.addEventListener("DOMContentLoaded", (e) => {
    console.log("********Esdeveniment DOMContentLoaded *********");
    console.log(e);
});
```
L'esdeveniment `DOMContentLoaded` es dispara quan el document HTML ha estat completament carregat i analitzat, sense esperar que es carreguin fulls d'estil, imatges i subtrames.

### Obrir, Tancar i Imprimir Finestres
```javascript
const $btnObrir = document.getElementById("obrir-finestra"),
    $btntancar = document.getElementById("tancar-finestra"),
    $btnimprimir = document.getElementById("imprimir-finestra");
let finestra = undefined;

$btnObrir.addEventListener("click", (e) => {
    finestra = window.open("http://127.0.0.1:5500/UF3-BOM/HTML/bom.html");
});

$btntancar.addEventListener("click", (e) => {
    finestra.close("");
});

$btnimprimir.addEventListener("click", (e) => {
    window.print("");
});
```
Aquests listeners d'esdeveniments gestionen l'obertura, el tancament i la impressió d'una finestra.

