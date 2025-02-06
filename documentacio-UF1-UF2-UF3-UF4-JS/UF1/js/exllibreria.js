//1
/* a funció amb un paràmetre d’entrada de tipus cadena que
retorni la seva longitud*/
export function longitude(para = "") {
  if (para) {
    if (typeof para === "string") {
      console.log("la longitud de " + para + " és " + para.length);
      return para.length;
    } else {
      console.error("el parametre hauria de ser una cadena");
    }
  } else {
    console.warn("Cadena buida");
  }
}
// version ARROW FUNCTION
//()=>{}
export const longitudeArrow = (text) => {
  return !text
    ? console.warn("Cadena buida")
    : typeof text !== "string"
    ? console.error("el parametre hauria de ser una cadena")
    : text.length;
};

//2
/*Aquesta funció
retorna un missatge d’error o bé una subcadena del paràmetre “cadena”
de longitud*/
export function subcadena(cadena = "", long = undifined) {
  let valor;
  if (typeof cadena === "string") {
    if (cadena) {
      if (typeof long === "number") {
        if (long <= cadena.length) {
          if (long > 0) {
            valor = cadena.substring(0, long);
          } else {
            valor =
              "el numéro " + long + " hi ha de ser més gran a 0 (positiu)";
          }
        } else {
          valor = "la paraula té només " + cadena.length + " caractérs";
        }
      } else {
        valor = "el " + long + " hi ha de ser una numero o un (number)";
      }
    } else {
      valor = "la " + cadena + " és buida";
    }
  } else {
    valor = "la " + cadena + " hi ha de ser una cadena o un (String)";
  }

  return valor;
}

//2 Arrow function
//ternari o immeditte if
//fa un return automatc si és només una linia
export const subcadenaArrow = (text = "", long = undifined) => {
  return !text
    ? console.warn("falta la cadena o és buida!")
    : typeof text !== "string"
    ? console.error("el primer paramétre hi ha de ser una cadena o un (String)")
    : long > text.length
    ? console.error("la longitude és mes gran que la longitud de el text")
    : typeof long !== "number"
    ? console.error("el segon parametre hi ha de ser una numero o un (number)")
    : long <= 0
    ? console.error(
        "el numéro " + long + " hi ha de ser més gran a 0 (positiu)"
      )
    : long === undifined
    ? "el segon paràmetre no hi és"
    : text.substring(0, long);
};

//3
/*Rep un paràmetre de tipus cadena i retorna un missatge d’error o bé
 un array de paraules segons un caràcter separador . En el nostre pas el
 separador és l’espai.*/
export function separarParaules(cadena, car) {
  let valor;
  if (typeof cadena !== "string") {
    valor = "Error la cadena ha de ser una cadena.";
  } else if (typeof car !== "string") {
    valor = "Error el separador ha de ser un caracter.";
  } else {
    valor = cadena.trim().split(car);
  }
  return valor;
}

//4
/*funció que retorni
la cadena “text” repetida “num” vegades.*/
export function repetir(text, num) {
  if (typeof text !== "string") {
    return "Error El primer paràmetre ha de ser una cadena ";
  } else {
    if (typeof num !== "number" || num < 0) {
      return "Error el segon un número no negatiu.";
    } else {
      return text.repeat(num);
    }
  }
}
/*funció que permeti capgirar un text.*/
//5
export function capgirar(text) {
  let valor;
  if (text) {
    if (typeof cadena !== "string") {
      valor = "Error el Text ha de ser una cadena o un String.";
    } else {
      valor = text.split("").reverse().join("");
    }
  } else {
    valor = "el Text és buid";
  }

  return valor;
}
//6

export function cercarRepeticions(text, paraula) {
  let parabuscar = new RegExp(paraula, "gi"); //i insensibilitat a mjuscules
  let coincidencies = text.match(parabuscar);
  return coincidencies.length;
}

function esPalindrom(paraula) {
  const netejada = paraula.toLowerCase();

  return netejada === netejada.split("").reverse().join("");
}

//8
//replace All és per canviar un caden dins de tot el text quant existeix
function esborraPatro(text, patro) {
  const textSensePatro = text.replace(new RegExp(patro, "g"), "");
  return textSensePatro;
}

// Exemple d'ús
const text = "Això és un exemple de javascript.";
const patro = "javascript";
const resultat = esborraPatro(text, patro);
console.log(resultat);
