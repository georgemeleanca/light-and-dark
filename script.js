function switchTheme() {

  let button = document.getElementById("themeSwitch");
  let body = document.getElementsByTagName("body")[0];
  let nav = document.getElementsByTagName("nav")[0];
  let cards = document.getElementsByClassName("card");
  let table = document.getElementsByTagName("table")[0];
  let tr = document.getElementsByTagName("tr");

  if (button.innerHTML === "Activate Dark Theme") {
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

    let footer = document.getElementsByClassName("navbar")[document.getElementsByClassName("navbar").length - 1];
    footer.style.float = "right";
    footer.style.color = "white";

    let header = document.getElementsByTagName("h1")[0];
    header.innerHTML = "This is the Dark theme";
    header.style.color = "white";


    button.innerHTML = "Activate Light Theme";
  }
  else {
    body.classList.remove("bg-dark");
    nav.classList.remove("bg-dark", "navbar-dark");

    for (let card of cards) {
      card.classList.remove("text-white", "bg-dark", "border-light");
      card.parentElement.classList.remove("col-md-12");
    }

    table.style.backgroundColor = "white";
    for (let tre of tr) {
      tre.style.color = "black";
    }

    let footer = document.getElementsByClassName("navbar")[document.getElementsByClassName("navbar").length - 1];
    footer.style.float = "left";
    footer.style.color = "black";

    let header = document.getElementsByTagName("h1")[0];
    header.innerHTML = "This is the Light theme";
    header.style.color = "black";


    button.innerHTML = "Activate Dark Theme";
  }
}