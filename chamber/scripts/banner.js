document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('meet-banner');
    const closeButton = document.getElementById('close-banner');

    const today = new Date();
    const day = today.getDay();

    if (day >= 1 && day <= 3) {
        banner.classList.remove('hidden');
    }

    closeButton.addEventListener('click', () => {
        banner.classList.add('hidden');
    });
});