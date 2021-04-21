/* --------------------------------------------------------Navbar Toggler */

$(".toggle-button").click( function(){
    $(".icon").toggleClass("close");
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  navbar.classList.toggle('active')
})

/* --------------------------------------------------------Google Maps API */

  
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: {
          lat: 53.3493,
          lng: 6.2607
      }
  });
}