export function elimineduplicats(array) {
  let arrayduplicats;
  if (array !== undefined) {
    if (array.length > 0) {
      if (array instanceof Array) {
        let Setsenseduplicats = new Set(array);
        arrayduplicats = Array.from(Setsenseduplicats);
        return { original: array, senseduplicats: arrayduplicats };
      } else {
        return console.warn("el array ha de té més de una paraula");
      }
    }
  } else {
    return console.error("el array és buid o falta paramétre");
  }
}
