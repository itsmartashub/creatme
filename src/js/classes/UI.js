export default class UI {
  displayContent() {
    document.querySelector(".content").style.display = "block";
  }

  hidePreloader() {
    document.querySelector(".preloader").classList.add("preloader--hidden");
  }

  hideAfterloader() {
    document.querySelector(".afterloader").classList.add("afterloader--hidden");
  }

  addAnimationClass() {
    const body = document.body || document.documentElement.body;
    if (body.classList.contains("animate-all ")) return;
    body.classList.add("animate-all");
  }

  removePreloaderAnimation() {
    document
      .querySelector(".preloader__circle")
      .classList.add(".preloader--animation-none");

    // console.log(document.styleSheets);
    // document.querySelector(".preloader__circle").style.animation = "none";
    // document.styleSheets[0].addRule('.preloader__circle::before', 'animation: none');
    // document.styleSheets[0].addRule('.preloader__circle::after', 'animation: none');
    // console.log(document.querySelector('.preloader__circle').style.animation);

    // this.pseudoElementsCss()
  }
}
