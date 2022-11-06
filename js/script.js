{
  const welcome = () => {
    console.log("Witam wszystkich :)");
  };

  const onChangeThemeSelect = () => {
    const documentDarkTheme = () => {
      const html = document.querySelector(".js-html");
      const body = document.querySelector(".js-body");
      html.classList.toggle("htmlNewColor");
      body.classList.toggle("bodyNewBackground");
    };

    const linksDarkTheme = (link) => {
      link.classList.toggle("js-darkTheme");
    };

    const linksToPass = () => {
      const studio = document.querySelector(".js-studio");
      const navLinkAbout = document.querySelector(".js-navLinkAbout");
      const navLinkYouCode = document.querySelector(".js-navLinkYouCode");
      const navLinkInterests = document.querySelector(".js-navLinkInterests");
      const navLinkTable = document.querySelector(".js-navLinkTable");
      const navLinkSummary = document.querySelector(".js-navLinkSummary");

      const darkThemeLinks = [
        navLinkAbout,
        navLinkYouCode,
        navLinkInterests,
        navLinkTable,
        navLinkSummary,
        studio,
      ];

      for (i = 0; i < darkThemeLinks.length; i++) {
        linksDarkTheme(darkThemeLinks[i]);
      }
    };

    linksToPass();
    documentDarkTheme();
  };

  const init = () => {
    welcome();
    const select = document.querySelector(".js-header__select");
    select.addEventListener("change", onChangeThemeSelect);
  };

  init();
}
