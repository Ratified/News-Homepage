const navLinks = document.querySelector('.navigation-links');

function openMenu(){
    navLinks.style.display = 'block';
    navLinks.style.transition = '0.2s ease-in-out';
}

function closeMenu(){
    navLinks.style.display = 'none';
}