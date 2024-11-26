import { Peli } from "./llibreria27.js";

// proves de id 
//prova de posar id incorrecte i els altres correctes 
const peli = new Peli({
  id: "y1234567y",
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(peli);
//posar id en format de numero 
const peli1 = new Peli({
  id: 1234567,
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(peli1);

// passar una cadena buida
const peli2 = new Peli({
  id: "",
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(peli2);

console.info("*********************proves titol********************");
//proves titol
//titol format numero
const peli3 = new Peli({
  id: "yy1234567",
  titol:
    17171,
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});


console.log(peli3);
//titol buid
const peli4 = new Peli({
  id: "yy1234567",
  titol:
    "",
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});

console.log(peli4);

// titol més de 100 caracters
const peli5 = new Peli({
  id: "yy1234567",
  titol:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, deleniti earum architecto, sapiente alias quos quis nemo ipsam recusandae corrupti, voluptate totam ducimus quae! Ipsa rerum odio porro temporibus quasi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, nisi fugit, officiis asperiores vero vel animi qui ea excepturi quam, sapiente in odio. Dolorem tempora voluptates omnis. Nemo, hic blanditiis!",
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(peli5);

//proves director
console.info("*********************proves director********************");
// director més de 50 caracters 
const peli6 = new Peli({
  id: "yy1234567",
  titol:
    "thor.",
  director: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, deleniti earum architecto, sapiente alias quos quis nemo ipsam recusandae corrupti, voluptate totam ducimus quae! Ipsa rerum odio porro temporibus quasi",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(peli6);

// director buid
const peli7 = new Peli({
  id: "yy1234567",
  titol:
    "thor.",
  director: "",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(peli7);

// director en format de numero
const peli8 = new Peli({
  id: "yy1234567",
  titol:
    "thor.",
  director: 1212,
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(peli8);

console.info("*********************proves de any********************");

// any en format de cadena 
const peliany = new Peli({
  id: "yy1234567",
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: "2011",
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(peliany);

// any més de 4 numeros
const peliany1 = new Peli({
  id: "yy1234567",
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: 20111,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(peliany1);


console.info("*********************proves de país********************");

// país en format de cadena 
const pelipais = new Peli({
  id: "yy1234567",
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: 2011,
  pais: "Catalunya",
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(pelipais);


// país en format de array pero amb un numero 
const pelipais1 = new Peli({
  id: "yy1234567",
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra",1],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(pelipais1);
// país en format de array pero amb un élement buid 
const pelipais2 = new Peli({
  id: "yy1234567",
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra",""],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(pelipais2);


console.info("*********************proves de generes********************");

// genere no acceptat Comedia ésta en inglés en la llista acceptats
const peligeneres = new Peli({
  id: "yy1234567",
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedia"],
  qualificacions: 7.4,
});
console.log(peligeneres);

// genere en format cadena 
const peligeneres1 = new Peli({
  id: "yy1234567",
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: "Adult",
  qualificacions: 7.4,
});
console.log(peligeneres1);

console.info("*********************proves de qualificacions********************");
//qualificacions en format cadena
const peliqualificacions = new Peli({
  id: "yy1234567",
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: "7.4",
});
console.log(peliqualificacions);
//qualificacions superior a 10
const peliqualificacions1 = new Peli({
  id: "yy1234567",
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 15,
});
console.log(peliqualificacions1);






console.info("*********************correcte********************");
//posar tot correcte
const pelicorrecte = new Peli({
  id: "yy1234567",
  titol:
    "Thor",
  director: "Kenneth Branagh",
  any: 2011,
  pais: ["Catalunya", "Andorra"],
  generes: ["Adult", "Comedy"],
  qualificacions: 7.4,
});
console.log(pelicorrecte);
pelicorrecte.fitxatecnica();

console.info("*************generes Acceptats**************");
console.log(Peli.generesAcceptats());


