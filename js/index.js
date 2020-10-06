window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});




const menu = document.querySelector('.checkbtn');
const links = document.querySelector('.menu');

menu.addEventListener('click', () => {

    menu.classList.toggle('change');
    links.classList.toggle('change');
})
