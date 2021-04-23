/* --------------------------------------------------------Navbar Toggler */

$(".toggle-button").click(function () {
  $(".icon").toggleClass("close");
  $(".navbar-links").fadeToggle();
});

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbar = document.getElementsByClassName("navbar")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbar.classList.toggle("active");
});

/* --------------------------------------------------------Scroll to top button */

$("#btnScrollToTop").click(function () {
  $("html, body").animate({ scrollTop: "0" }, "slow");
});
