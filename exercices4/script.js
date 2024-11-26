import {
  esParell,
  convertGraus,
  CalcularCf,
  convertBase,
  quadrats,
  extrems,
  ordenarAD,
} from "./llibreria.js";
/*
esParell(100);
esParell();
esParell("");

console.log(convertGraus(0, "f"));
console.log(convertGraus(32, "c"));

CalcularCf(100, 10);
convertBase(1111, 2);
convertBase(10, 10);*/

quadrats();
quadrats([]);

console.log(quadrats([1, 2, 3, 4, 5]));

console.log(extrems([1, 2, 3, 4, 5, 6, 7, 89, 9]));

ordenarAD([1, 2, 3, 4], "D");
