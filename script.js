function switchTheme() {
  let body = document.getElementsByTagName("body")[0];
  let nav = document.getElementsByTagName("nav")[0];
  body.classList.add("bg-dark");
  nav.classList.add("bg-dark", "navbar-dark");
}