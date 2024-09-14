document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidebar-link');
    let currentIndex = 0;

    links[currentIndex].focus();

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % links.length;
            links[currentIndex].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + links.length) % links.length;
            links[currentIndex].focus();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            links[currentIndex].click();
        }
    });
});

