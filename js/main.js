const sectors = [
    {
        id: '01',
        name: 'healthcare',
        desc: 'Healthcare facilities represent unique security challenges, which is why they require special and specific services.',
    },
    {
        id: '02',
        name: 'shopping centers and store',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptate.',
    },
    {
        id: '03',
        name: 'residential highrise buildings and compounds',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptate.',
    },
    {
        id: '04',
        name: 'industrial and manufacturing plants',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptate.',
    },
    {
        id: '05',
        name: 'events and venues',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptate.',
    },
];

const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger-menu');
const items = document.querySelectorAll('.accordion button');

const sectorsOfActivity = document.querySelectorAll('#sectors-of-activity');
const sectorsDesc = document.querySelector('.sectors .desc');

sectorsOfActivity.forEach((sector) => {
    sector.addEventListener('click', (e) => {
        const filteredSector = sectors.filter(
            (sectorObject) =>
                sectorObject.name === sector.innerText.toLowerCase()
        );

        sectorsDesc.getElementsByTagName('h3')[0].innerHTML =
            filteredSector[0].id;

        sectorsDesc.getElementsByTagName('p')[0].innerHTML =
            filteredSector[0].desc;
    });
});

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
