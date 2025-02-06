const d = document;

function contactFormValidations() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");
  console.log($inputs);
  $inputs.forEach((element) => {
    const $span = d.createElement("span");
    $span.id = element.name;
    $span.textContent = element.title;
    $span.classList.add("contact-form-error", "none");
    element.insertAdjacentElement("afterend", $span);
  });
}

d.addEventListener("DOMContentLoaded", contactFormValidations());

d.addEventListener("keyup", (e) => {
  if (e.target.matches(".contact-form [required]")) {
    let $input = e.target;
    pattern = $input.pattern || $input.dataset.pattern;
    console.log($input, pattern);
    if (pattern) {
      console.log("input amb patró");
      let regex = new RegExp(pattern);
      console.log(regex);

      //si el valor del input no compleix l'expressió regular afegeix el valor és active
      !regex.exec($input.value)
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active");
    } else if (!pattern) {
      console.log("input sense patró");
      $input.value == ""
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active");
    }
  }
});

d.addEventListener("submit", (e) => {
  // e.preventDefault();
  const $loader = d.querySelector(".contact-form-loader"),
    $resposta = d.querySelector(".contact-form-response");
  $loader.classList.remove("none");
  setTimeout(() => {
    $loader.classList.add("none");
    $resposta.classList.remove("none");
    setTimeout(() => {
      $resposta.classList.add("none");
    }, 3000);
  }, 3000);
});
