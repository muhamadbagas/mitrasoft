// Navbar Fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//
document.addEventListener("alpine:init", () => {
  Alpine.data("imageSlider", () => ({
    currentIndex: 1,
    images: [
      "/img/event3.jpg",
      "/img/event4.jpg",
      "/img/event5.jpg",
      "/img/event1.jpg",
      "/img/event2.jpg",
    ],
    previous() {
      if (this.currentIndex > 1) {
        this.currentIndex = this.currentIndex - 1;
      }
    },
    forward() {
      if (this.currentIndex < this.images.length) {
        this.currentIndex = this.currentIndex + 1;
      }
    },
  }));
});
