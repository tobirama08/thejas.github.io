document.addEventListener('DOMContentLoaded', () => {
    const pageTransition = document.getElementById('pageTransition');
    pageTransition.style.opacity = '0';

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.href;
            pageTransition.style.opacity = '1';
            setTimeout(() => {
                window.location.href = href;
            }, 500); 
        });
    });
});