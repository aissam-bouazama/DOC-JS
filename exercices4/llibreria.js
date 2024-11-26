export function esParell(num) {
  if (num === undefined) {
    return console.log("Falta el paramtre");
  } else if (typeof num !== "number") {
    return console.log("el tipus del paramtre hi ha de ser numero");
  } else if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

export function convertGraus(num, unitat) {
  let resultat;
  if (num === undefined) {
    return console.log("el primer paramtre no esta difinit");
  } else if (unitat === undefined) {
    return console.log("el segon paramtre no esta difinit");
  } else if (typeof num !== "number") {
    return console.log("el primer paramere hi ha de ser un numero");
  } else if (typeof unitat !== "string") {
    return console.log("el segon parametres hi ha de un caracter");
  } else if (unitat != "f" && unitat != "F" && unitat != "c" && unitat != "C") {
    return console.log("tins nomes dos opions 'f','c'");
  } else if (unitat.length > 1) {
    return console.log("no pods posar més de un caractér al segon parametre");
  } else if (unitat === "c" || unitat === "C") {
    return (resultat = (num - 32) / (9 / 5));
  } else if (unitat === "f" || unitat === "f") {
    return (resultat = num * (9 / 5) + 32);
  }
}

export function convertBase(num1, opcio) {
  if (num1 === undefined) {
    return console.log("el primer parametre no esta definit");
  } else if (opcio === undefined) {
    return console.log("el segon parametre no esta definit  o no esta posat");
  } else if (typeof opcio !== "number") {
    return console.log("la opcio hi ha de ser un numero");
  } else if (typeof num1 !== "number") {
    return console.log("el primer parametre hi ha de ser de tipus numero");
  } else if (opcio !== 10 && opcio !== 2) {
    return console.log("tins només dos opcions 2 i 10");
  } else if (opcio === 10) {
  } else if (opcio === 2) {
    let resultat = num1.toString().split("");
    let i = 1;
    let num = 0;
    while (i <= resultat.length) {
      if (i == 1) {
        num = resultat[resultat.length - i] * Math.pow(2, i);
      } else {
        num = num + resultat[resultat.length - i] * Math.pow(2, i);
      }
      i++;
    }
    return console.log(num / 2);
  }
}

export function CalcularCf(numero, percentage) {
  if (numero === undefined) {
    console.log("el primer no ésta definit");
  } else if (percentage === undefined) {
    console.log("el segon no ésta definit");
  } else if (typeof numero !== "number") {
    return console.log("el primer paramtre no és un numero");
  } else if (typeof percentage !== "number") {
    return console.log("el segon paramétre no es de tipus número");
  } else {
    let res = (numero * percentage) / 100;
    return console.log(numero - res);
  }
}

export const quadrats = (array) => {
  if (array === undefined) {
    return console.log("el pararmétre no ésta posat o no ésta definit");
  } else if (!array instanceof Array) {
    return console.log("el paramétre hi ha de ser un array");
  } else if (array.length === 0) {
    return console.log("el array no té cap valor");
  } else {
    const arrayquadrats = [];

    array.forEach((element) => {
      if (typeof element === "number") {
        arrayquadrats.push(element * element);
      } else {
        return console.log("el arrray hi ha de tindre no més numeros");
      }
    });
    return {
      arrayquadrats,
      array,
    };
  }
};

export const extrems = (array) => {
  if (array === undefined) {
    return console.log("el pararmétre no ésta posat o no ésta definit");
  } else if (!array instanceof Array) {
    return console.log("el paramétre hi ha de ser un array");
  } else if (array.length === 0) {
    return console.log("el array no té cap valor");
  } else {
    let valmax = 0;
    let valmin = 0;

    valmax = Math.max(...array);
    valmin = Math.min(...array);
    return {
      valmax,
      valmin,
    };
  }
};

export const parrelssenars = (array) => {
  if (array === undefined) {
    return console.log("el pararmétre no ésta posat o no ésta definit");
  } else if (!array instanceof Array) {
    return console.log("el paramétre hi ha de ser un array");
  } else if (array.length === 0) {
    return console.log("el array no té cap valor");
  } else {
    const parells = [];
    const senars = [];
    array.forEach((element) => {
      if (typeof element !== "number") {
        return console.error("el Array hi ha de tindre no més numeros");
      } else if (esParell(element)) {
        parells.push(element);
      } else {
        senars.push(element);
      }
    });

    return {
      parells,
      senars,
    };
  }
};

export const ordenarAD = (array, opcio) => {
  switch (opcio) {
    case ("A", "a"):
      if (array === undefined) {
        return console.log("el pararmétre no ésta posat o no ésta definit");
      } else if (!array instanceof Array) {
        return console.log("el paramétre hi ha de ser un array");
      } else if (array.length === 0) {
        return console.log("el array no té cap valor");
      } else {
        console.log(array.sort());
      }
      break;
    case ("D", "d"):
      if (array === undefined) {
        return console.log("el pararmétre no ésta posat o no ésta definit");
      } else if (!array instanceof Array) {
        return console.log("el paramétre hi ha de ser un array");
      } else if (array.length === 0) {
        return console.log("el array no té cap valor");
      } else {
        console.log(array.reverse());
      }
      break;
    default:
      return "tens no més dos opcions (A/D o a/d)";
  }
};
