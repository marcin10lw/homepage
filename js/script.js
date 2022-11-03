let select = document.querySelector(".js-header__select");
let html = document.querySelector(".js-html");
let body = document.querySelector(".js-body");
let studio = document.querySelector(".js-studio");
let navLinkAbout = document.querySelector(".js-navLinkAbout");
let navLinkYouCode = document.querySelector(".js-navLinkYouCode");
let navLinkInterests = document.querySelector(".js-navLinkInterests");
let navLinkTable = document.querySelector(".js-navLinkTable");
let navLinkSummary = document.querySelector(".js-navLinkSummary");

select.addEventListener("change", () => {
  html.classList.toggle("htmlNewColor");
  body.classList.toggle("bodyNewBackground");
  studio.classList.toggle("js-darkTheme");
  navLinkAbout.classList.toggle("js-darkTheme");
  navLinkYouCode.classList.toggle("js-darkTheme");
  navLinkInterests.classList.toggle("js-darkTheme");
  navLinkTable.classList.toggle("js-darkTheme");
  navLinkSummary.classList.toggle("js-darkTheme");
});

console.log("Witam gita! Podejście drugie");
