let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    search.classList.remove('active');
}

//Navbar
let navbar = document.querySelector('.search-box');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}
//remove menu and search icon on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

//header animation
let header = document.querySelector('header');

window.addEventListener('scroll',() => {
    header.classList.toggle('active',window.scrollY > 0);
});