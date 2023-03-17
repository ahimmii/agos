const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger-menu');
const items = document.querySelectorAll('.accordion button');

console.log(menu, burger);

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
    burger.classList.toggle('open');
});

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
