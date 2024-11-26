## Desenvolupament d'aplicacions web en entorn client UF2

- [Col·leccions en JavaScript: `Map` i `Set`](#colleccions-en-javascript-map-i-set)
  - [1. `Map`](#1-map)
    - [Característiques de `Map`](#característiques-de-map)
    - [Mètodes importants](#mètodes-importants)
    - [Exemple](#exemple)
  - [Característiques de `WeakMap`](#característiques-de-weakmap)
  - [Exemple](#exemple-1)
  - [Característiques de `Set`](#característiques-de-set)
  - [Mètodes importants](#mètodes-importants-1)
  - [Característiques de `WeakSet`](#característiques-de-weakset)
    - [Exemple](#exemple-2)
- [Symbol() en JavaScript:](#symbol-en-javascript)
  - [com és crea Symbol](#com-és-crea-symbol)
  - [Exemples](#exemples)
- [propietats dínamiques](#propietats-dínamiques)
  - [this en javascript](#this-en-javascript)
  - [CALL](#call)
  - [Apply](#apply)
  - [bind](#bind)
  - [JSON EN JAVASCRIPT](#bind)

<br><br><br><br>

# Col·leccions en JavaScript: `Map` i `Set`

JavaScript ofereix diverses estructures de dades útils per gestionar col·leccions d'elements. Entre elles, destaquen `Map` i `Set`, que són ideals per gestionar dades úniques i parells clau-valor.

## 1. `Map`

Un `Map` és una col·lecció de parells clau-valor on les claus poden ser de qualsevol tipus, incloent objectes. Això el diferencia dels objectes literals, que només permeten cadenes o símbols com a claus.

### Característiques de `Map`

- **Ordenats**: Mantenen l'ordre d'inserció dels elements.
- **Claus de qualsevol tipus**: Accepten qualsevol tipus de dada com a clau.
- **Iterables**: Es poden recórrer amb mètodes com `forEach` o bucles `for...of`.

### Mètodes importants

- **`set(clau, valor)`**: Afegeix o actualitza un parell clau-valor.
- **`get(clau)`**: Retorna el valor associat a la clau donada.
- **`has(clau)`**: Retorna `true` si la clau existeix al `Map`.
- **`delete(clau)`**: Elimina el parell clau-valor associat a la clau.
- **`clear()`**: Elimina tots els parells del `Map`.
- **`size`**: Propietat que retorna el nombre de parells al `Map`.

### Exemple

```javascript
//el tipus map funciona amb la parella o tupla <Clau,valor>

const mapa = new Map();

mapa.set("nom", "joan");
mapa.set("cognoms", "perez");
mapa.set("edat", 12);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("email"));
console.log(mapa.has("nom"));
console.log(mapa.get("nom"));
console.log(mapa.set("nom", "joana"));
console.log(mapa.get("nom"));
mapa.delete("nom");
console.log(mapa);
console.log(mapa.set(true, "cert")); //COMPTE ! es pot fer , però no té sentit
console.log(mapa.set(9, "nou")); //COMPTE ! es pot fer , però no té sentit

//  recorregut pels elements del mapa
for (let [key, value] of mapa) {
  console.log(`Clau ${key} valor: ${value}`);
}

//instanciar mapa i posa-hi valors al mateix momen
const mapa2 = new Map([
  ["preu", 12],
  ["edat", 33],
  ["animal", "gos"],
]);
console.log(mapa2);

//el spread es converteix elements a un array i unirles a un array
const clausMapa2 = [...mapa2.keys()];
console.log(clausMapa2);

const valuesMapa2 = [...mapa2.values()];
console.log(valuesMapa2);
```

---

<br>

<p style="font-size=20px;">
<b>

[☝️ Retorn a l'index](#desenvolupament-daplicacions-web-en-entorn-client-uf2)
</b></p>

<br>

---

## Característiques de `WeakMap`

- obtner elements (get)
- afegir element (set)
- comprovar si existeix un element (has)
- puc esborrar un element (delete)

## Exemple

```javascript
const unMapa = new WeakMap();
let clau1 = {};
let clau2 = {};
let clau3 = {};

unMapa.set(clau1, 1);
unMapa.set(clau2, 2);
unMapa.set(clau3, 3);

console.log(unMapa.has(clau3));
console.log(unMapa.get(clau1));
unMapa.delete(clau1);

//proxy:permet crear un objecte basata en altre Objecte existent.

const persona = {
  nom: "",
  cognoms: "",
  edat: 0,
};
//necessitem un objecte gestor amb un mètode set per gestionar les propietats de l'objecte persona
const gestor = {
  set(obj, prop, valor) {
    obj[prop] = valor;
    return true;
  },
};
//instanciarem un proxy que vinculara l'objecte persona persona i el gestor
const personaJoan = new Proxy(persona, gestor);
personaJoan.nom = "Joan";
console.log(personaJoan);
console.log(persona);
//el gestor en aquest cas es com a controlador de  les valors que entriem al objecte
const gestor2 = {
  set(obj, prop, valor) {
    if (prop === "nom" && valor === "lluis") {
      console.error("el LLuis no està permès");
      return true;
    }
    obj[prop] = valor;
    return true;
  },
};

const personalluis = new Proxy(persona, gestor2);
personalluis.nom = "pepe";
personalluis.nom = "lluis";
console.log(personalluis);
console.log(persona);
```

---

<br>

<p style="font-size=20px;">
<b>

[☝️ Retorn a l'index](#desenvolupament-daplicacions-web-en-entorn-client-uf2)
</b></p>

<br>

---

2. ## `Set`

Un `Set` és una col·lecció de valors únics en JavaScript. Aquesta estructura de dades és ideal per emmagatzemar elements sense duplicats i permet diverses operacions útils per gestionar aquests elements.

## Característiques de `Set`

- **Valors Únics**: No permet la inserció de valors duplicats. Si intentes afegir un valor que ja existeix, no s'afegeix.
- **Ordenats**: Manté l'ordre d'inserció dels elements, és a dir, els elements es poden recuperar en l'ordre en què van ser afegits.
- **Iterables**: Permet iterar sobre els seus elements mitjançant `forEach`, bucles `for...of`.

## Mètodes importants

- **`add(valor)`**: Afegeix un valor al `Set`. Si el valor ja existeix, no s'afegeix.
- **`has(valor)`**: Retorna true si el valor està present al Set, en cas contrari retorna false.
- **`clear()`**: Elimina tots els valors del Set, deixant-lo buit.
- **`size`**: Propietat que retorna el nombre d'elements actuals al Set.

  ```javascript
  //collecions
  //SET elements sense duplicats
  //retorna el numero de refernecia per el objecte
  const set = new Set([
    1,
    2,
    4,
    5,
    5,
    6,
    6,
    true,
    true,
    false,
    {},
    {},
    "hola",
    "hOla",
  ]);

  console.log(set);

  const set2 = new Set();
  set2.add(1);
  set2.add(1);
  set2.add(2);
  set2.add(true);
  set2.add({});

  console.log(set2);
  console.log(set2.size);

  console.log("recórrer set");

  for (let ele of set2) {
    console.log(ele);
  }

  set2.forEach((ele) => console.log(ele));
  //Convertir un Set a un array
  //el from és un metode de classe

  let arr = Array.from(set2);
  console.log(arr);
  set2.delete(1);
  console.log(set2);
  //per buscar un element si existeix
  console.log(set2.has(2));
  set2.clear();
  console.log(set2);
  ```

  ***

<br>

<p style="font-size=20px;">
<b>

[☝️ Retorn a l'index](#desenvolupament-daplicacions-web-en-entorn-client-uf2)
</b></p>

<br>

---

## Característiques de `WeakSet`

- `WeakSet` són només col·leccions d'objectes. No poden contenir valors arbitraris de qualsevol tipus, com ho poden fer els Set.

- El `WeakSet` és débil, cosa que significa que les referències a objectes en un WeakSet es mantenen feblement. Si no hi ha altres referències a un objecte emmagatzemat a WeakSet, aquests objectes poden ser recol·lectats com a escombraries

### Exemple

```javascript
//les claus han de ser de tipus Objecte . permet al recol.lector de javascript gestiona més efficienment la neteja de la mémoria

// ALtres lìmitacions:
//no podem iterrar sobre Claus o valors
//no podem esborrar elements de cop (clear)
//no podem utilitzar la propietat size o no podem comprobar la mida de la collecions (size)
//no podem inicialitzar al moment d'instanciar

//què podem fer ?
//podem afegir element ?
//podem combrobar si existeix un element (has)
//podem esborrar un element (delete)

//exemple de weakSet
//ex no podem fer
//const ws = new WeakSet([1, 2, 3, 4, 5, true, {}]);

//ex que podem fér
const ws = new WeakSet();
let valor1 = { valor1: 1 };
let valor2 = { valor2: 2 };
let valor3 = { valor3: 1 };

ws.add(valor1);
ws.add(valor2);
ws.add(valor3);
console.log(ws);
console.log(ws.has(valor3));
```

---

<br>

<p style="font-size=20px;">
<b>

[☝️ Retorn a l'index](#desenvolupament-daplicacions-web-en-entorn-client-uf2)
</b></p>

<br>

---

# Symbol() en JavaScript:

`Symbol`Tipus de dades simple anomenat symbol
Serveix per afegir Caraterstiques o propietats privades als Objectes Permeten Crear
indenticadors únics de referencia

## com és crea Symbol

Per crear un símbol, utilitzeu la funció Symbol(). Opcionalment, es pot passar una cadena com a argument, que s'utilitza com a descripció del símbol. Aquesta descripció no és accessible a cap lloc del codi i només s'utilitza per a fins de depuració.

## Exemples

```javascript
let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(typeof id, typeof id2);

//els symbols son privAts
const NOMUSUARI = Symbol("propietat_nom_usuari");
//por posar el valor por un symbol en js s'ha de posar el clau dades
const persona = {
  [NOMUSUARI]: "abouzama",
};
console.log(persona);
console.log(persona[NOMUSUARI]);

//hem Creat una funcio i l'hm associat al simbol Salutacio
//de la classePersona
const SALUTACIO = Symbol("Metode_salutacio");

persona[SALUTACIO] = function () {
  console.log("Hola que tal...");
};

console.log(persona);
//aquesta és la manera per accedir a un attribut de un objecte
persona[SALUTACIO]();

for (let propietat in persona) {
  console.log(propietat);
  console.log(persona[propietat]);
}
console.log(Object.getOwnPropertySymbols(persona));
```

---

<br>

<p style="font-size=20px;">
<b>

[☝️ Retorn a l'index](#desenvolupament-daplicacions-web-en-entorn-client-uf2)
</b></p>

<br>

# propietats dínamiques

```javascript
//prop dinamiques
let aleatori = Math.round(Math.random() * 100 + 5);
const objUsuari = {
  nom: "pepe",
  [`id_${aleatori}`]: "valor aleatori",
};
console.log(objUsuari);

const usuaris = ["Aissam", "gemma", "Carlos", "rosa"];
usuaris.forEach((ele, index) => {
  objUsuari[`id_${index}`] = ele;
});
console.log(objUsuari);
```

## this en javascript

1. ### **this en mètodes d'objectes**
   Quan this és utilitzat dins d'un mètode d'un objecte, fa referència a l'objecte que conté el mètode péro en cas de les funcions declarades pero els arrow function fa la referencia al global.

## Exemple

```javascript
//funcions declarades
const pepe = {
  nom: "pepe",
  cognoms: "Gimenez",
  edat: 99,
  saludar: function saludar() {
    console.log("Hola que tal");
  },
  fersoroll: () => {
    console.log("estic fent soroll");
    //en aquest cas és hace hosting a window
    console.log(this);
  },
};
pepe.saludar();
pepe.fersoroll();
```

---

<br>

<p style="font-size=20px;">
<b>

[☝️ Retorn a l'index](#desenvolupament-daplicacions-web-en-entorn-client-uf2)
</b></p>

<br>

---

# bind apply i call en JavaScript:
## Call
Usant el mètode call, podem invocar una funció, passant un valor que serà tractat com a this dins d'ella.
### Exemple
```javascript
 // tres formes de canviar el context d'execució

      this.lloc = "Context Global";
      function saludar(salutacio, aQui) {
        console.log(`${salutacio}, ${aQui} des de ${this.lloc}`);
      }
      saludar("hola", "Joan");
      const obj = {
        lloc: "Context d'Objecte",
      };
      saludar.call(obj, "Hola", "Joan");
      saludar.call(null, "Hola", "Joan");
      saludar.call(this, "Hola", "Joan");
```

## apply
La funció `apply` és molt semblant a la funció call. L'única diferència entre call i apply és la diferència com es passen els arguments.

call — passem arguments com a valors individuals, començant des del segon argument
apply — els arguments addicionals es passaran com un acord

```javascript
 console.log("***********************Apply*******************");
      saludar.apply(obj, ["Adeu", "Joan"]);
      saludar.apply(this, ["Hola", "Joan"]);
```

## bind

A diferència dels mètodes call i apply, bind no invocarà la funció directament, sinó que canviarà el valor this dins de la funció i tornarà la instància de la funció modificada

### Exemple
```javascript
 this.nom = "Nom Global del miquel";
      const persona = {
        nom: "Miquel",
        saludar: function () {
          console.log(`Hola ${this.nom}`);
        },
      };

      persona.saludar();

      const unaaltrapersona = {
        saludar: persona.saludar.bind(this),
      };
      unaaltrapersona.saludar();
```

[☝️ Retorn a l'index](#desenvolupament-daplicacions-web-en-entorn-client-uf2)
</b></p>

<br>

---

## json en javascript

JavaScript Object Notation (JSON) és un format basat en text estàndard per representar dades estructurades a la sintaxi d'objectes de JavaScript. És comunament utilitzat per transmetre dades en aplicacions web (per exemple: enviar algunes dades des del servidor al client, així aquestes dades poden ser mostrades en pàgines web, o viceversa). S'enfrontarà sovint amb ell, així que aquest article li lliura tot el que necessita saber per treballar amb JSON utilitzant JavaScript, incloent l'anàlisi JSON per accedir a les dades al seu interior, i com crear JSON.

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      const json = {
        cadena: "aissam",
        numero: 19,
        boolea: true,
        array: ["gener", "febrer", "Cantar"],
        objecete: {
          email: "abouzama@almata.cat",
          twitter: "@nomimes",
        },
        null: null,
        codipostal: 25600,
        undefined: undefined,
      };
      //parse
      console.log(json);
      console.log(JSON);
      console.log(JSON.parse("{}"));
      console.log(JSON.parse("[1,2,3]"));
      console.log(JSON.parse('"hola que tal"'));
      console.log(JSON.parse('{"x":2,"y":4}'));
      //console.log(JSON.parse("undefined")); //COmpte
      console.log(JSON.parse("null"));

      //métodes JSON ( strimgyfy)
      console.log("***************stringify*******************");
      console.log(JSON.stringify({}));
      console.log(JSON.stringify("[1,2,3]"));
      console.log(JSON.stringify("hola que tal"));
      console.log(JSON.stringify(true));
      console.log(JSON.stringify({ x: 2, y: 4 }));
      console.log(JSON.stringify(undefined)); //COmpte
      console.log(JSON.stringify(null));

      console.log("***************JSON  STRINGYFY exemples*******************");
      console.log(JSON.stringify(json));

      console.log("***************JSON  parse exemples*******************");
      console.log(JSON.parse(JSON.stringify(json)));
    </script>
  </body>
</html>

```


