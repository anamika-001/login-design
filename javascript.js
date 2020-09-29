        $('.owl-carousel').owlCarousel({
            margin: 10,
            loop:false;
            nav: true,
            navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 5
                },
                1000: {
                    items: 5
                }
            }
        });