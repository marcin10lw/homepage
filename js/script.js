{
  const welcome = () => {
    console.log("Witam wszystkich :)");
  };

  const onChangeThemeCheckbox = () => {
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

    const toggleLabelTheme = () => {
      const labelElement = document.querySelector(".js-label");

      labelElement.classList.toggle("header__label--darkTheme");
    };

    const toggleBallTheme = () => {
      const ballElement = document.querySelector(".js-ball");

      ballElement.classList.toggle("header__ball--darkTheme");
    };

    toggleBodyTheme();
    toggleLinksTheme();
    toggleLabelTheme();
    toggleBallTheme();
  };

  const init = () => {
    welcome();
    const checkboxElement = document.querySelector(".js-header__checkBox");
    checkboxElement.addEventListener("change", onChangeThemeCheckbox);
  };

  init();
}
