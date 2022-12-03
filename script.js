function switchTheme() {
  let body = document.getElementsByTagName("body")[0];
  let nav = document.getElementsByTagName("nav")[0];

  let cards = document.getElementsByClassName("card");

  let table = document.getElementsByTagName("table")[0];
  let tr = document.getElementsByTagName("tr");

  body.classList.add("bg-dark");
  nav.classList.add("bg-dark", "navbar-dark");

  for (let card of cards) {
    card.classList.add("text-white", "bg-dark", "border-light");
    card.parentElement.classList.add("col-md-12");
  }

  table.style.backgroundColor = "black";
  for (let tre of tr) {
    tre.style.color = "white";
  }

  let footer = document.getElementsByClassName("navbar")[ document.getElementsByClassName("navbar").length-1];
  footer.style.float = "right";
  footer.style.color = "white";
}