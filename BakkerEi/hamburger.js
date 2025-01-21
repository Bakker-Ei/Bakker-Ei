// JavaScript is door chat, wij hebben niet JS geleerd
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const header = document.querySelector('header');
  
    if (hamburgerMenu && header) {
      hamburgerMenu.addEventListener('click', () => {
        header.classList.toggle('menu-open');
      });
    }
  });
  