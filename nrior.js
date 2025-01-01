// Placeholder script for any dynamic behavior
// Enable hover functionality for dropdown menus
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.navbar .dropdown');
  
    dropdowns.forEach(function (dropdown) {
      // Add hover event listeners
      dropdown.addEventListener('mouseenter', function () {
        const menu = this.querySelector('.dropdown-menu');
        const dropdownToggle = this.querySelector('.dropdown-toggle');
  
        // Show the dropdown menu
        dropdownToggle.classList.add('show');
        menu.classList.add('show');
      });
  
      dropdown.addEventListener('mouseleave', function () {
        const menu = this.querySelector('.dropdown-menu');
        const dropdownToggle = this.querySelector('.dropdown-toggle');
  
        // Hide the dropdown menu
        dropdownToggle.classList.remove('show');
        menu.classList.remove('show');
      });
    });
  });
console.log('Welcome to Oriental University Website');