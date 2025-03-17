document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.setAttribute('aria-label', 'Open navigation menu');

    hamButton.addEventListener('click', () => {

        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');

        if (navigation.classList.contains('open')) {
            hamButton.setAttribute('aria-label', 'Close navigation menu');
        } else {
            hamButton.setAttribute('aria-label', 'Open navigation menu');
        }
    });
});