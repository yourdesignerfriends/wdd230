document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const menuLinks = document.querySelectorAll('.menu-link');
    const mainHeading = document.getElementById('main-heading');

    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            menuLinks.forEach(link => link.classList.remove('active'));

            event.target.classList.add('active');

            mainHeading.textContent = event.target.textContent.trim();
        });
    });
});