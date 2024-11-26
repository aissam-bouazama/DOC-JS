import { elimineduplicats } from "./llibreria.js";

console.log(elimineduplicats(["aissam", "bouazama", "aissam"]));
console.log(elimineduplicats([]));
console.log(elimineduplicats());

console.log(
  elimineduplicats([
    1,
    1,
    2,
    true,
    false,
    false,
    "aissam",
    "bouazama",
    "aissam",
  ])
);
