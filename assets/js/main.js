// navbar

let btn = document.getElementById('nav-menu');
let links = document.getElementById('nav-menu-links');

btn.addEventListener('click', showNav);
links.addEventListener('click', showNav);
window.addEventListener('scroll', scrolled);

function showNav() {

    if (btn.classList.contains('nav-menu-active')) {
        btn.classList.remove('nav-menu-active');
    } else {
        btn.classList.add('nav-menu-active');
    };

    if (links.classList.contains('nav-menu-links-active')) {
        links.classList.remove('nav-menu-links-active');
    } else {
        links.classList.add('nav-menu-links-active');
    };
};


function scrolled() {
    if (window.scrollY > 100) {
        document.querySelector('nav').style.position = 'fixed';
        document.querySelector('nav').style.boxShadow = '0px 0px 10px 0px grey';
    } else {
        document.querySelector('nav').style.boxShadow = 'none';
        document.querySelector('nav').style.position = 'absolute';
    }
}