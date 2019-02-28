$(function () {
    "use strict";
    var windows = $(window);
    windows.on('scroll', function () {
        $(".progress-item span").each(function () {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_windows = $(windows).scrollTop() + $(windows).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_windows > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });

    /*
    * -----------------------------------------------------------------
    *----------------------------Parallax Effect-----------------------
    * -----------------------------------------------------------------
    */
    $(".cover-bg").each(function () {
        var a = $(this).attr("data-image-src");
        void 0 !== a && !1 !== a && $(this).css("background-image", "url(" + a + ")")
    });

    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: 'swing',
        scrollTime: 600,
        activeClass: 'active',
        onPageChange: null,
        topOffset: -170
    });

    /*
    * -----------------------------------------------------------------
    *-------------------------------Nav popup on scroll----------------
    * -----------------------------------------------------------------
    */
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    windows.on("scroll", function () {
        var bodyScroll = windows.scrollTop(),
            navbar = $(".navbar");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
        } else {
            navbar.removeClass("nav-scroll")
        }
    });

    $(window).on("load", function () {
        //     var windows = $(window);
        $(".loading").fadeOut(500);
        //     windows.stellar();
    });

    /*
    * -----------------------------------------------------------------
    *-------------------------Skill------------------------------------
    * -----------------------------------------------------------------
    */

    var skill = $('.skills');
    var width1 = $(".prog1").data("progress");
    var progBar1 = $(".prog1");
    skill.waypoint(function () {
        progBar1.css({
            "width": width1,
            "transition": "2s ease-in"
        });
    }, {

            offset: width1
        });


    var width2 = $(".prog2").data("progress");
    var progBar2 = $(".prog2");
    skill.waypoint(function () {
        progBar2.css({
            "width": width2,
            "transition": "2s ease-in"
        });
    }, {

            offset: width2
        });


    var width3 = $(".prog3").data("progress");
    var progBar3 = $(".prog3");
    skill.waypoint(function () {
        progBar3.css({
            "width": width3,
            "transition": "2s ease-in"
        });
    }, {

            offset: width3
        });


    /*
    * -----------------------------------------------------------------
    *-------------------------------Service Item-----------------------
    * -----------------------------------------------------------------
    */

    var serviceItem = $("#service #owl-demo-service");

    serviceItem.owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        items: 3,
        autoPlay: 6000,
        responsive: {
            0: {
                items: 1
            },
            // breakpoint from 480 up
            500: {
                items: 2
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            }
        },
        pauseOnHover: true,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"]
    });
    /*
    * -----------------------------------------------------------------
    *-------------------------button animation-------------------------
    * -----------------------------------------------------------------
    */

    var serviceBtn = $(".service-btn");

    serviceBtn.on("click", function () {
        $('html, body').animate({
            scrollTop: ($("#portfolio").offset().top) - 60
        }, 2000);
    });

    /*
    * -----------------------------------------------------------------
    *------------------------Personal Details--------------------------
    * -----------------------------------------------------------------
    */
    var personal = $('#personal-detail .nav .nav-item');
    personal.on("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $(this).tab('show');
    });

    /*
    * -----------------------------------------------------------------
    *-------------------------------Mixit Up---------------------------
    * -----------------------------------------------------------------
    */
    var portfolioContent = $('.portfolio-content');
    portfolioContent.mixItUp();

    /*
    * -----------------------------------------------------------------
    *--------------------Owl Carousel For Testimonial------------------
    * -----------------------------------------------------------------
    */
    var testimonial = $("#client-testimonial #owl-demo-testimonial");

    testimonial.owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        items: 2,
        autoPlay: 6000,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            600: {
                items: 1
            },
            // breakpoint from 768 up
            900: {
                items: 1
            },
            1000: {
                items: 3
            }
        },
        pauseOnHover: true,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"]
    });


});