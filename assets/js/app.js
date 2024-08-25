// nav bar fixed up
let header = document.querySelector("header");
let main = document.querySelector("main");
window.addEventListener("scroll", () => {
  if (this.scrollY > 130) {
    header.classList.add("sticky");
    main.classList.add("main_fixed");
  } else {
    header.classList.remove("sticky");
    main.classList.remove("main_fixed");
  }
});

//toogle menu
let toggler = document.querySelector(".toggle_menu");
let layer = document.querySelector(".layer");
let menu = document.querySelector(".navigation_links");
toggler.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    toggler.classList.add("open");
    layer.classList.add("show");
  } else {
    toggler.classList.remove("open");
    layer.classList.remove("show");
  }
});
document.addEventListener("click", function (event) {
  if (
    menu.classList.contains("show") &&
    !event.target.closest(".navigation_links") &&
    !event.target.closest(".toggle_menu") &&
    !event.target.closest(".dropdown-menu")
  ) {
    menu.classList.remove("show");
    layer.classList.remove("show");
    toggler.classList.remove("open");
  }
});

var swiper = new Swiper(".testimonials", {
  loop: true,
  spaceBetween: 16,
  speed: 2000,
  centeredSlides: true,
  pagination: {
    el: ".testimonialsSwiperPagination",
    clickable: true
  },
  autoplay: {
    delay: 2500
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    350: {
      slidesPerView: 1
    }
  }
});

//aos
$(document).ready(function () {
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  AOS.init({
    offset: 20,
    delay: 20,
    duration: 750,
    once: true
  });
});
//swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  speed: 1000,
  effect: "fade",
  spaceBetween: 16,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
});
$(document).ready(function () {
  // parallax
  var parallaxImage = document.getElementsByClassName("parallax");
  new simpleParallax(parallaxImage, {
    delay: 1,
    transition: "cubic-bezier(0,0,0,1)"
  });
});
var mainSlider = new Swiper(".mainSliderContainer", {
  spaceBetween: 0,
  loop: true,
  effect: "fade",
  speed: 500,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".mainSliderPagination",
    clickable: true
  },
  navigation: {
    nextEl: ".mainSliderNext",
    prevEl: ".mainSliderPrev"
  }
});

var clientsSlider = new Swiper(".clientsSlider", {
  slidesPerView: "6",
  loop: true,
  speed: 500,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 6
    }
  },
  spaceBetween: 16
});
var latestPostsSlider = new Swiper(".latest_postsSlider", {
  slidesPerView: "3",
  loop: true,
  speed: 500,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  },
  spaceBetween: 16
});
