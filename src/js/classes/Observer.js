const $from_bottom = document.querySelectorAll(".anim--fromBottom");
const $from_top = document.querySelectorAll(".anim--fromTop");
const $from_left = document.querySelectorAll(".anim--fromLeft");
const $from_right = document.querySelectorAll(".anim--fromRight");
// const $imgs = [...document.querySelectorAll(".anim--imgs")]
const $imgs = document.querySelectorAll(".anim--imgs");
const $circle_imgs = document.querySelectorAll(".anim--circle-imgs");
const $icons = document.querySelectorAll(".anim--icon");
const $from_bottom_cards = document.querySelectorAll(".anim--card-fromBottom");
const $scale = document.querySelectorAll(".anim--scale");
const $fade_in = document.querySelectorAll(".anim--fadeIn");
const $from_right_rotating = document.querySelector(
  ".anim--fromRight-rotating"
);

export default class Observer {
  anim_observer() {
    const appearOptions = {
      threshold: 1,
      rootMargin: "-300px 0px 0px 0px",
    };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target); //! stop looking on something when u've done ur job
        }
      }, appearOptions);
    });

    //* primeniti observer na niz elemenata
    appearOnScroll.observe($from_right_rotating);

    $from_bottom.forEach((bottom) => {
      appearOnScroll.observe(bottom);
    });
    $from_bottom_cards.forEach((card) => {
      appearOnScroll.observe(card);
    });
    $from_top.forEach((top) => {
      appearOnScroll.observe(top);
    });
    $from_left.forEach((left) => {
      appearOnScroll.observe(left);
    });
    $from_right.forEach((right) => {
      appearOnScroll.observe(right);
    });
    $icons.forEach((icon) => {
      appearOnScroll.observe(icon);
    });
    $imgs.forEach((img) => {
      appearOnScroll.observe(img);
    });
    $circle_imgs.forEach((circle_img) => {
      appearOnScroll.observe(circle_img);
    });
    $scale.forEach((scale) => {
      appearOnScroll.observe(scale);
    });
    $fade_in.forEach((fade) => {
      appearOnScroll.observe(fade);
    });
  }

  browserDontSupportObserver() {
    this.removeAnimClassFromArr($from_bottom);
    this.removeAnimClassFromArr($from_top);
    this.removeAnimClassFromArr($from_left);
    this.removeAnimClassFromArr($from_right);
    this.removeAnimClassFromArr($imgs);
    this.removeAnimClassFromArr($circle_imgs);
    this.removeAnimClassFromArr($icons);
    this.removeAnimClassFromArr($from_bottom_cards);
    this.removeAnimClassFromArr($scale);
    this.removeAnimClassFromArr($fade_in);
    this.removeAnimClassFromIndividualEl($from_right_rotating);
    this.addTransitionOnSmallCircleImgs();
  }
  removeAnimClassFromArr(_arr) {
    const prefix = "anim--";
    _arr.forEach((el) => {
      const classes = el.className
        .split(" ")
        .filter((c) => !c.startsWith(prefix));
      el.className = classes.join(" ").trim();
    });
  }
  removeAnimClassFromIndividualEl(_oneEl) {
    const prefix = "anim--";
    const classes = _oneEl.className
      .split(" ")
      .filter((c) => !c.startsWith(prefix));
    _oneEl.className = classes.join(" ").trim();
  }
  addTransitionOnSmallCircleImgs() {
    $circle_imgs.forEach((img) => {
      img.style.transition = "1s ease-in-out";
    });
  }
}
