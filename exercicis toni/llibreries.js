//EXERCICIS TONI
//validar correu
export function validarEmail(email) {
  let expReg = /\w+@\w+\.\w+/gi;
  let cadena = email;
  let final = "";
  if (!cadena) {
    console.warn("cadena buida");
  } else if (typeof cadena != "string") {
    console.warn("la cadena no es un string");
  } else {
    final = expReg.exec(cadena);
    if (final === null) {
      console.error("la cadena NO és un email.");
    } else {
      console.log(final);
    }
  }
}

//Mitjana
export function mitjana(array) {
  let y = 0;
  let final = 0;
  if (!array) {
    console.warn("el paràmetre esta buid");
  } else if (typeof array !== "object") {
    console.log("el valor ha de ser una array!");
  } else {
    array.forEach((element) => {
      final = element + final;
      y++;
    });
    final = final / y;
    return console.log(final);
  }
}
