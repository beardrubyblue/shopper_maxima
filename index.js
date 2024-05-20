const mobileMenu = document.querySelector('.mobile_menu');
const mobileMenuOpenButton = document.querySelector('.mobile_menu-open');

function toggleMenu() {
    mobileMenu.classList.toggle('open');
    mobileMenu.classList.toggle('close');
}

mobileMenuOpenButton.addEventListener('click', toggleMenu);
