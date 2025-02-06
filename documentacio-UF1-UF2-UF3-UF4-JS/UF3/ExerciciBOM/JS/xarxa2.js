const n = navigator,
  $d = document,
  w = window;

const isonline = (e) => {
  console.log(e.type);
  const $div = $d.querySelector("div") || $d.createElement("div");

  if (e.type === "offline") {
    $div.innerHTML = "";
    $div.insertAdjacentHTML(
      "afterbegin",
      `<strong>En linia resstablerta</srong>`
    );
    $div.classList.add("online");
    $div.classList.remove("offline");
    $div.style.color = "green";
  } else {
    $div.innerHTML = "";
    $div.insertAdjacentHTML("afterbegin", `<strong>Fora de linia</srong>`);
    $div.classList.add("offline");
    $div.classList.remove("online");
    $div.style.color = "red";
  }

  $d.body.insertAdjacentElement("afterbegin", $div);
  setTimeout(() => {
    $d.body.removeChild($div);
  }, 3000);
};

w.addEventListener("online", isonline);
w.addEventListener("offline", isonline);
