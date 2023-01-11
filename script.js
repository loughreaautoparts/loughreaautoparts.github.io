// Get a reference to the burger button and nav menu
const burgerButton = document.querySelector('.burger-button');
const navMenu = document.querySelector('.nav-menu');

// Add a click event listener to the burger button
burgerButton.addEventListener('click', function() {
  // Toggle the "show" and "open" classes on the nav menu
  navMenu.classList.toggle('show');
  navMenu.classList.toggle('open');
});

const carouselSlider = document.querySelector('.carousel-slider');
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

slides[0].style.display = 'block';

function nextSlide(){
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

setInterval(nextSlide, 3000);// move to next slide every 3 seconds
 

