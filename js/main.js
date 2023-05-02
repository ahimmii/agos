const sectors = [
    {
        id: '01',
        name: 'healthcare',
        desc: 'Healthcare facilities represent unique security challenges, which is why they require special and specific services.',
        img: '',
        link: 'healthcare.html',
    },
    {
        id: '02',
        name: 'shopping centers and store',
        desc: 'Shopping malls by definition are very busy and attract a large number of customers. They are there to enjoy their free time and are not concerned about possible risks or dangers.',
        img: '',
        link: 'shopping_centers_and_store.html',
    },
    {
        id: '03',
        name: 'residential highrise buildings and compounds',
        desc: 'Modern residential complexes are a tasty target for intruders. The presence of new facilities, parking lots, elevator equipment,',
        img: '',
        link: 'residential_highrise_buildings_and_compounds.html',
    },
    {
        id: '04',
        name: 'industrial and manufacturing plants',
        desc: 'New regulations require manufacturers to provide an adequate and safe work environment for employees. The presence of a security guard has become an absolute requirement to ensure surveillance and prevent risks.',
        img: '',
        link: 'industrial_and_manufacturing_plants.html',
    },
    {
        id: '05',
        name: 'events and venues',
        desc: 'The event world regularly mobilizes large crowds. Security is then a priority that pushes the organizers to take into account all the potential risks and to set up adequate devices to maintain the safety of the public and the participants.',
        img: '',
        link: 'events_and_venues.html',
    },
];

const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger-menu');
const items = document.querySelectorAll('.accordion button');

const sectorsOfActivity = document.querySelectorAll('#sectors-of-activity');
const sectorsDesc = document.querySelector('.sectors .desc');
const sectorImg = document.querySelector('#sector_img');
const sectorLink = document.querySelector('#sector_link');

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

        filteredSector[0].img && (sectorImg.src = filteredSector[0].img);
        console.log(sectorLink);

        sectorLink.href = filteredSector[0].link;
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
