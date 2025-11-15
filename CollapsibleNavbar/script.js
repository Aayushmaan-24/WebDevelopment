const hamberger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

hamberger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})