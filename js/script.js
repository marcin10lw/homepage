{
  const welcome = () => {
    console.log("Witam wszystkich :)");
  };

  const onChangeBackgroundSelect = () => {
    const html = document.querySelector(".js-html");
    const body = document.querySelector(".js-body");
    const studio = document.querySelector(".js-studio");
    const navLinkAbout = document.querySelector(".js-navLinkAbout");
    const navLinkYouCode = document.querySelector(".js-navLinkYouCode");
    const navLinkInterests = document.querySelector(".js-navLinkInterests");
    const navLinkTable = document.querySelector(".js-navLinkTable");
    const navLinkSummary = document.querySelector(".js-navLinkSummary");

    html.classList.toggle("htmlNewColor");
    body.classList.toggle("bodyNewBackground");
    studio.classList.toggle("js-darkTheme");
    navLinkAbout.classList.toggle("js-darkTheme");
    navLinkYouCode.classList.toggle("js-darkTheme");
    navLinkInterests.classList.toggle("js-darkTheme");
    navLinkTable.classList.toggle("js-darkTheme");
    navLinkSummary.classList.toggle("js-darkTheme");
  };

  welcome();

  const select = document.querySelector(".js-header__select");
  select.addEventListener("change", onChangeBackgroundSelect);
}
