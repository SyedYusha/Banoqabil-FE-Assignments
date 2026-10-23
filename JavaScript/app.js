let search = document.querySelector('.search-box')

document.querySelector('#searchIcon').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navLinks')

document.querySelector('#menu_icon').onclick = () =>{
    search.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header')

window.addEventListener('scroll', () =>{
    header.classList.toggle("shadow", window.scrollY > 0);
});

