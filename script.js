// Get a reference to the burger button and nav menu
const burgerButton = document.querySelector('.burger-button');
const navMenu = document.querySelector('.nav-menu');

// Add a click event listener to the burger button
burgerButton.addEventListener('click', function() {
  // Toggle the "show" and "open" classes on the nav menu
  navMenu.classList.toggle('show');
  navMenu.classList.toggle('open');
});