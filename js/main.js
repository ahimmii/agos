const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger-menu');

console.log(menu, burger);

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    burger.classList.toggle('open');
});
