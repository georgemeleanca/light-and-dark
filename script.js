function switchTheme() {
  let body = document.getElementsByTagName("body")[0];
  let nav = document.getElementsByTagName("nav")[0];

  let card = document.getElementsByClassName("card");

  body.classList.add("bg-dark");
  nav.classList.add("bg-dark", "navbar-dark");

  for (let cards of card) {
    cards.classList.add("text-white", "bg-dark", "border-light");
  }
}