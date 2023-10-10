const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// VARIBLES
const menuIcon = $(".menu-icon");
const navBar = $(".menu");
const bellIcon = $(".noti"); // for notification

// MENU ICON
menuIcon.onclick = () => {
  navBar.classList.toggle("active");
  menuIcon.classList.toggle("move");
  bellIcon.classList.remove("active");
};

// NOTIFICATION
$("#bell-icon").onclick = () => {
  bellIcon.classList.toggle("active");
};

// SWIPER
var swiper = new Swiper(".trending_content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // 3s
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

//Custom Scroll Bar
window.onscroll = function () {
  mufunction();
};
function mufunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-bar").style.width = scrolled + "%";
}
