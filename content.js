document.addEventListener("DOMContentLoaded", function() {    
    const style = document.createElement('style');
    style.textContent = `
        .tooltip {
            position: absolute;
            background-color: black;
            color: white;
            padding: 5px;
            border-radius: 3px;
            font-size: 12px;
            display: none;
            z-index: 1000;
            white-space: nowrap;
        }
        .tooltip-icon:hover {
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const descriptionElement = targetElement.querySelector('.guide_trophy_description');
            const descriptionText = descriptionElement ? descriptionElement.textContent : 'Description non trouvée';

            const icon = document.createElement('span');

            /* if (targetElement.getAttribute('obtained') === '1') {
                icon.textContent = '✔️';
                icon.style.color = 'green';
            } else {
                icon.textContent = '⚪';
            } */
            if (targetElement.getAttribute('obtained') === '1') {
                link.style.textDecoration = 'line-through'
                link.style.color = 'green';
            }

            icon.style.marginLeft = '5px';
            link.classList.add('tooltip-icon');
            
            link.setAttribute('title', descriptionText);

            //link.appendChild(icon);
        }
    });
    
    // Création du tooltip
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
});
