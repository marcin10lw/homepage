{
  const welcome = () => {
    console.log("Witam wszystkich :)");
  };

  const onChangeThemeCheckbox = () => {
    const toggleBodyTheme = () => {
      const body = document.querySelector(".js-body");
      body.classList.toggle("bodyDarkTheme");
    };

    const toggleNavigationTheme = () => {
      const navigationLinks = document.querySelectorAll(".js-link");
      const navigationListElements =
        document.querySelectorAll(".js-listElement");

      for (link of navigationLinks) {
        link.classList.toggle("link--darkTheme");
      }

      for (listElement of navigationListElements) {
        listElement.classList.toggle("nav__listElement--darkTheme");
      }
    };

    const toggleLabelTheme = () => {
      const labelElement = document.querySelector(".js-label");

      labelElement.classList.toggle("header__label--darkTheme");
    };

    const toggleBallTheme = () => {
      const ballElement = document.querySelector(".js-ball");

      ballElement.classList.toggle("header__ball--darkTheme");
    };

    const toggleTableHeadersTheme = () => {
      const tableHeaderElements = document.querySelectorAll(".js-tableHeader");

      for (header of tableHeaderElements) {
        header.classList.toggle("table__header--darkTheme");
      }
    };

    const toggleTableRowTheme = () => {
      const tableRowElements = document.querySelectorAll(".js-tableRow");

      for (row of tableRowElements) {
        row.classList.toggle("table__row--darkTheme");
      }
    };

    const toggleFooterTheme = () => {
      const footerElement = document.querySelector(".js-footer");

      footerElement.classList.toggle("footer--darkTheme");
    };

    const toggleMainTheme = () => {
      const mainElement = document.querySelector(".js-main");
      const mainLinkElements = document.querySelectorAll(".js-mainLink");

      mainElement.classList.toggle("main--darkTheme");
      for (mainLink of mainLinkElements) {
        mainLink.classList.toggle("main__link--darkTheme");
      }
    };

    toggleBodyTheme();
    toggleNavigationTheme();
    toggleLabelTheme();
    toggleBallTheme();
    toggleTableHeadersTheme();
    toggleTableRowTheme();
    toggleFooterTheme();
    toggleMainTheme();
  };

  const init = () => {
    welcome();
    const checkboxElement = document.querySelector(".js-header__checkBox");
    checkboxElement.addEventListener("change", onChangeThemeCheckbox);
  };

  init();
}
