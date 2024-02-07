let burgerMenu = document.querySelector(".burger_menu");
let mobileNavigation = document.querySelector(".mobile_navigation");

burgerMenu.addEventListener("click", (e) => {
  burgerMenu.querySelector(".burger__").classList.toggle("burg_act");
  mobileNavigation.classList.toggle("nav_act");
  document.body.classList.toggle("overflow_hidden");
});

var swiper = new Swiper(".s1", {
  navigation: {
    nextEl: ".s1 .swiper-button-next",
    prevEl: ".s1 .swiper-button-prev",
  },
});

var swiper = new Swiper(".s2", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    clickable: true,
    el: ".s2 .swiper-pagination",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".s3", {
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "vertical",

  navigation: {
    nextEl: ".thumbs_ .swiper-button-next",
    prevEl: ".thumbs_ .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      direction: "horizontal",
    },
    991: {
      direction: "horizontal",
      slidesPerView: 3,
    },
    1200: {
      direction: "vertical",
      slidesPerView: 3,
    },
  },
});
var swiper2 = new Swiper(".s4", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".s5", {
  spaceBetween: 20,
  slidesPerView: 4,
  navigation: {
    nextEl: ".similar_products .swiper-button-next",
    prevEl: ".similar_products .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
