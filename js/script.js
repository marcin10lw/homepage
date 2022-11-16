{
  const welcome = () => {
    console.log("Witam wszystkich :)");
  };

  const onChangeThemeCheckbox = () => {
    const toggleBodyTheme = () => {
      const body = document.querySelector(".js-body");
      body.classList.toggle("bodyDarkTheme");
    };

    const toggleLinksTheme = () => {
      const navigationLinks = document.querySelectorAll(".nav__link");

      for (link of navigationLinks) {
        link.classList.toggle("link--darkTheme");
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
