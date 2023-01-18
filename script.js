// Get all of the images on the page
const images = document.querySelectorAll('img');

// Add a load event listener to each image
images.forEach(image => {
  image.addEventListener('load', function() {
    // Get the natural width and height of the image
    const naturalWidth = this.naturalWidth;
    const naturalHeight = this.naturalHeight;

    // Set the max width and height for the image
    const maxWidth = 300;
    const maxHeight = 200;

    // Calculate the new dimensions for the image
    let newWidth = naturalWidth;
    let newHeight = naturalHeight;
    if (naturalWidth > maxWidth) {
      newWidth = maxWidth;
      newHeight = (newWidth * naturalHeight) / naturalWidth;
    }
    if (newHeight > maxHeight) {
      newHeight = maxHeight;
      newWidth = (newHeight * naturalWidth) / naturalHeight;
    }

    // Set the new width and height for the image
    this.style.width = `${newWidth}px`;
    this.style.height = `${newHeight}px`;
    
    //center the image 
    this.style.objectFit = "cover";
    this.style.display = "block";
    this.style.margin = "auto";
  });
});


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

slides[currentSlide].classList.add('active');

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// move to next slide every 3 seconds


const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', function() {
slides[currentSlide].classList.remove('active');
currentSlide = (currentSlide - 1 + slides.length) % slides.length;
slides[currentSlide].classList.add('active');
});

nextBtn.addEventListener('click', nextSlide);
