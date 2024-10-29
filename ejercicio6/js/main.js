document.addEventListener('DOMContentLoaded', function () {
    const toggleLinks = document.querySelectorAll('.toggle-link');

    toggleLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            toggleContent(this);
        });
    });
});

function toggleContent(link) {
    const content = link.parentElement.querySelector('.content-text');
    content.classList.toggle('hidden');

    if (content.classList.contains('hidden')) {
        link.textContent = 'Mostrar contenidos';
    } else {
        link.textContent = 'Ocultar contenidos';
    }
}
