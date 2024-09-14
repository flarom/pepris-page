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
function addCopyButtonToCodeblock() {
    const codeblocks = document.querySelectorAll('textarea#codeblock');

    codeblocks.forEach((codeblock) => {
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy code';
        copyButton.classList.add('copy-btn');

        copyButton.addEventListener('click', () => {
            codeblock.select();
            document.execCommand('copy');
            copyButton.textContent = 'Copied!';

            setTimeout(() => {
                copyButton.textContent = 'Copy code';
            }, 2000);
        });

        const container = codeblock.closest('.code-container');
        container.appendChild(copyButton);
    });
}

// Chama a função quando a página carregar
window.onload = addCopyButtonToCodeblock;