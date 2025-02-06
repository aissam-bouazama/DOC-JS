const n = navigator,
  $d = document,
  w = window;

const $online = $d.querySelector(".online");
const $offline = $d.querySelector(".offline");
w.addEventListener("online", () => {
  console.log(n.onLine);
  $online.insertAdjacentHTML("afterbegin", `<strong>En Linia</strong>`);
  $offline.innerHTML = "";
});
w.addEventListener("offline", () => {
  console.log(n.onLine);
  $offline.insertAdjacentHTML("afterbegin", `<strong>Fora de Linia</strong>`);
  $online.innerHTML = "";
});
