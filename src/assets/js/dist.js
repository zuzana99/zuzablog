(() => {
  // src/assets/js/src/text-reveal.ts
  var text_reveal_default = {
    init: () => {
      const textElementsToReveal = document.querySelectorAll(".text-reveal");
      textElementsToReveal.forEach((element) => {
        const classes = element.classList;
        classes.add("text-reveal-show");
      });
    }
  };

  // src/assets/js/src/index.ts
  text_reveal_default.init();
})();
