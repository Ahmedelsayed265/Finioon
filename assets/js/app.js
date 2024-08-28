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
  speed: 500,
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

$(document).ready(function () {
  $(".preloader").delay(1200).fadeOut(300);
});