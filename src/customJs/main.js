$(window).on("load", function () {
    var windows = $(window);
    $(".loading").fadeOut(500);
});

$(document).ready(function () {
    $(".cover-bg").each(function () {
        var a = $(this).attr("data-image-src");
        void 0 !== a && !1 !== a && $(this).css("background-image", "url(" + a + ")")
    })
    M.AutoInit();
    $("#type").css("visibility", "hidden");
    $("#type").t({
        mistype: 10,
        pause_on_click: !0
    });
    $('#js-rotating').css('display', 'none');
    setTimeout(function () {
        $('#js-rotating').css('display', 'inline');
        $('#js-rotating').Morphext({
            animation: "flipInX",
            seperator: ",",
            speed: 3000
        })
    }, 2000);

    /* Setup the skills icon loading animations here */
    // css
    var css = new ldBar('#css');
    var css2 = document.querySelector('#css').ldBar;
    // html
    var html = new ldBar('#html');
    var html2 = document.querySelector('#html').ldBar;
    // js
    var js = new ldBar('#js');
    var js2 = document.querySelector('#js').ldBar;
    // jquery
    var jq = new ldBar('#jq');
    var jq2 = document.querySelector('#jq').ldBar;
    // node
    var node = new ldBar('#node');
    var node2 = document.querySelector('#node').ldBar;
    // php
    var php = new ldBar('#php');
    var php2 = document.querySelector('#php').ldBar;
    // react
    var react = new ldBar('#react');
    var react2 = document.querySelector('#react').ldBar;
    // mysql
    var mysql = new ldBar('#mysql');
    var mysql2 = document.querySelector('#mysql').ldBar;
    // sass
    var sass = new ldBar('#sass');
    var sass2 = document.querySelector('#sass').ldBar;
    // wp
    var wp = new ldBar('#wp');
    var wp2 = document.querySelector('#wp').ldBar;


    var languages = new Waypoint({
        element: document.querySelector('#parallax1'),
        handler: function (direction) {
            setTimeout(function () {
                css2.set(100);
                js2.set(90);
                html2.set(100);
                jq2.set(100);
                node2.set(70);
                php2.set(80);
                react2.set(75);
                mysql2.set(80);
                sass2.set(90);
                wp2.set(80);
            }, 1000);
        }
    });

    /* Initialize funny text */
    $('#funnyText').funnyText({
        speed: 700,
        direction: 'both',
        borderColor: 'white'
    });
    $('#funnyText2').funnyText({
        speed: 700,
        direction: 'both',
        borderColor: 'white'
    });

    /* Activate typing effect */
    // $('#type').css('visibility', 'hidden');
    var typingTrigger = new Waypoint({
        element: document.querySelector('#typingTrigger'),
        handler: function (direction) {
            $('#type').t({
                mistype: 10,
                pause_on_click: !0
            });
        }
    });


    /* Web ticker activation */
    $('#image__ticker').liMarquee();

    // Active the show on scroll effects here throughout the site
    ScrollReveal().reveal('#agile', {
        origin: 'right',
        delay: 400,
        distance: '50px',
        duration: 400,
        easing: 'ease-in',
        reset: true
    });

    ScrollReveal().reveal('#forward', {
        origin: 'left',
        delay: 400,
        distance: '50px',
        duration: 400,
        easing: 'ease-in',
        reset: true
    });

    ScrollReveal().reveal('#knowledge', {
        origin: 'right',
        delay: 400,
        distance: '50px',
        duration: 400,
        easing: 'ease-in',
        reset: true
    });

    ScrollReveal().reveal('.service__icon', {
        origin: 'top',
        delay: 400,
        distance: '50px',
        duration: 400,
        easing: 'ease-in',
        reset: true
    });

    ScrollReveal().reveal('.skill__icon', {
        origin: 'top',
        delay: 400,
        distance: '50px',
        duration: 400,
        easing: 'ease-in',
        reset: true
    });
});

