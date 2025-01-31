// JavaScript is door chat-gpt, wij hebben niet JS geleerd (want we zijn dom)
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const header = document.querySelector('header');
  
    if (hamburgerMenu && header) {
      hamburgerMenu.addEventListener('click', () => {
        header.classList.toggle('menu-open');
      });
    }
  });

