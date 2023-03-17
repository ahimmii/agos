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

// JQuery
$(document).ready(function () {
    // link action
    $('.action').click(function (e) {
        e.preventDefault();

        $('.slide').removeClass('active');
        var slide = $(this).closest('.slide');
        slide.addClass('active');
    });
});

// checkWidth
checkWidth = function () {
    var windowsize = $(window).width();
    if (windowsize > 480) {
        var slideWidth = $('.active').width();
        $('.slide-content').css({
            width: slideWidth + 'px',
        });
    }
};

$(window).resize(function () {
    // onresize
    checkWidth();

    // finish resize
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(checkWidth, 500);
});
