let Btn = document.querySelector(".Btn");
let card = document.querySelector(".card");
let title = document.querySelector(".title");

Btn.addEventListener("click", function () {
  card.setAttribute(
    "style",
    "position: fixed; top: 3rem; opacity: 1; transition: 1.3s;"
  );
  function btn_fn() {
    Btn.setAttribute("style", "position: fixed; top: 23rem;");
  }
  setTimeout(btn_fn, 190);
});
