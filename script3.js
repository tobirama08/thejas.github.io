// script.js

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('index.html')) {
        alert("Welcome to the Bio-data page!");
    } else if (window.location.pathname.includes('resume.html')) {
        alert("Welcome to the Resume page!");
    }
});
