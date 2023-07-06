// Custom Js
// Nav Collapse
const navItems = document.querySelectorAll('.nav-item')
const navMenu = document.querySelector('#navbarText');
navItems.forEach(li => {
    li.addEventListener('click', () => {
        let ww = window.innerWidth;
        if (ww < 992) {
            let bsToggle = new bootstrap.collapse(navMenu)
            bsToggle.hide();
        }
    })
})

// Owl Carousel
$(document).ready(function () {
    $('#slide-show .owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true
    });
    //  Top-sale Owl-carousel
    $('#top-sale .owl-carousel').owlCarousel({
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    })

    // isotope 
    let grid = $('#special-price .grid').isotope({
        //options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    })
    // filter item on button click
    $('#filters').on('click', 'button', function () {
        let filterValue = $(this).attr('data-filter');
        grid.isotope({ filter: filterValue });
        removeActiveFilter();
        $(this).addClass('active-filter');

    })


});

// remove active filter class
function removeActiveFilter() {
    const buttons = document.querySelectorAll('#filters button');
    buttons.forEach(btn => {
        btn.classList.remove('active-filter')
    })
}


$(document).ready(function () {
    $('#new-phones .owl-carousel').owlCarousel({
        dots: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    })
    // qty
    let qtyUp = $('.qty .qty-up');
    let qtyDown = $('.qty .qty-down');
    let limitQty = 10;

    qtyUp.click(function (e) {
        // alert('youclicked plus')
        // let qtyIput = $('.qty .qty-input');
        let parentEl=$(this).parent();
        let qtyIput=parentEl.find('input');
        let qtyValue = parseInt(qtyIput.val());
        if (qtyValue < limitQty) {
            let udVal = qtyValue + 1;
            qtyIput.val(udVal)
        }
    })
    qtyDown.click(function (e) {
        let parentEl=$(this).parent();
        let qtyIput=parentEl.find('input');
        let qtyValue = parseInt(qtyIput.val());
        if (qtyValue > 1) {
            let udVal = qtyValue - 1;
            qtyIput.val(udVal)
        }
    })
})

