const d = document,
  $boto = d.querySelector(".panel-btn"),
  $panell = d.querySelector(".panel");

function hamburguesaMenu(panellBoto, panell, menulnk) {
  //validar els parametres
  d.addEventListener("click", (e) => {
    if (
      e.target.matches(panellBoto) ||
      e.target.matches(`${panellBoto} *`) ||
      e.target.matches(menulnk)
    ) {
      d.querySelector(panell).classList.toggle("is-active");
      d.querySelector(panellBoto).classList.toggle("is-active");
    }
  });
}
d.addEventListener("DOMContentLoaded", () =>
  hamburguesaMenu(".panel-btn", ".panel", ".menu a")
);
