const ls = localStorage;
const d = document;
//console.log(ls.getItem("colorFonts"));
let color = ls.getItem("colorFonts");
const $paragraf = d.querySelector("#color-font");
let debugear = false;

if (color !== null) {
  if (confirm("vols réstablir el color?")) {
    $paragraf.insertAdjacentText(
      "beforeend",
      `color del Font és:${colorFont()}`
    );
    //colorFont();
  } else {
    d.body.style.backgroundColor = color;
  }
} else {
  colorFont();
}

function colorFont() {
  const color = prompt("inroduieix el color");
  ls.setItem("colorFonts", color);
  return (d.body.style.backgroundColor = ls.getItem("colorFonts"));
}

const $arxiu = d.querySelector("#imatge");
$arxiu.addEventListener("click", () => {
  document.body.style.backgroundImage = $arxiu.value;
});
