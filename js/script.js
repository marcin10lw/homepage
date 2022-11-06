{
  const welcome = () => {
    console.log("Witam wszystkich :)");
  };

  const onChangeThemeSelect = () => {
    const toggleBodyTheme = () => {
      const body = document.querySelector(".js-body");
      body.classList.toggle("bodyDarkTheme");
    };

    const toggleLinkTheme = (link) => {
      link.classList.toggle("link--darkTheme");
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

      darkThemeLinks.forEach((link) => {
        toggleLinkTheme(link);
      });
    };

    toggleBodyTheme();
    linksToPass();
  };

  const init = () => {
    welcome();
    const select = document.querySelector(".js-header__select");
    select.addEventListener("change", onChangeThemeSelect);
  };

  init();
}
