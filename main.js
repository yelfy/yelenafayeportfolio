document.addEventListener('DOMContentLoaded', (event) => {
    const hamburger = document.getElementById('hamburger');
    const hamburgerClose = document.getElementById('hamburger-close-btn');
    const navLinks = document.querySelector('.header-nav');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    hamburgerClose.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

