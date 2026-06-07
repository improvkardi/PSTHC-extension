document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        const target = document.getElementById(link.hash.slice(1));

        if (!target) return;

        const description =
            target.querySelector('.guide_trophy_description')?.textContent ||
            'Description non trouvée';

        if (target.getAttribute('obtained') === '1') {
            link.style.textDecoration = 'line-through';
            link.style.color = 'green';
        }

        link.title = description;
    });
});