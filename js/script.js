{
  const welcome = () => {
    console.log("Witam wszystkich :)");
  };

  const onChangeThemeSelect = () => {
    const toggleBodyTheme = () => {
      const body = document.querySelector(".js-body");
      body.classList.toggle("bodyDarkTheme");
    };

    const getLinkElements = () => {
      const studio = document.querySelector(".js-studio");
      const navLinkAbout = document.querySelector(".js-navLinkAbout");
      const navLinkYouCode = document.querySelector(".js-navLinkYouCode");
      const navLinkInterests = document.querySelector(".js-navLinkInterests");
      const navLinkTable = document.querySelector(".js-navLinkTable");
      const navLinkSummary = document.querySelector(".js-navLinkSummary");

      return [
        navLinkAbout,
        navLinkYouCode,
        navLinkInterests,
        navLinkTable,
        navLinkSummary,
        studio,
      ];
    };

    const toggleLinksTheme = () => {
      const linkElements = getLinkElements();

      linkElements.forEach((linkElement) => {
        linkElement.classList.toggle("link--darkTheme");
      });
    };

    toggleBodyTheme();
    toggleLinksTheme();
  };

  const init = () => {
    welcome();
    const select = document.querySelector(".js-header__select");
    select.addEventListener("change", onChangeThemeSelect);
  };

  init();
}
