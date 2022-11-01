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
  studio.classList.toggle("main__studio--color");
  navLinkAbout.classList.toggle("nav__link--about");
  navLinkYouCode.classList.toggle("nav__link--youCode");
  navLinkInterests.classList.toggle("nav__link--interests");
  navLinkTable.classList.toggle("nav__link--table");
  navLinkSummary.classList.toggle("nav__link--summary");
});

console.log("Witam gita! Podejście drugie");
