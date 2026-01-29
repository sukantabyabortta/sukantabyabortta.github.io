jQuery(function($) {

    // ===== PAGE LOADING =====
    $(window).on("load", function() {
        $("div.loadScreen").fadeOut();
    });

    // ===== MOBILE NAVIGATION =====
    $('.hamburger').click(function() {
        $('.nav-menu').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.nav-link').click(function() {
        $('.nav-menu').removeClass('active');
        $('.hamburger').removeClass('active');
    });

    // ===== SMOOTH SCROLLING =====
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 300);
        }
    });

    // ===== SCROLL ANIMATIONS =====
    function checkScroll() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll resize', checkScroll);
    $(document).ready(checkScroll);

    // Add fade-in animation to elements
    $('.skill-card, .gallery-item, .about-content, .contact-content').addClass('fade-in');

    // ===== ACTIVE NAVIGATION HIGHLIGHT =====
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.nav-menu a.active').removeClass('active');
                $('.nav-menu a').eq(i).addClass('active');
            }
        });
    }).scroll();

    // ===== GALLERY FUNCTIONALITY =====
    let visibleItems = 3;
    const itemsPerLoad = 3;

    // Hide gallery items beyond first 3
    $('.gallery-item').each(function(index) {
        if (index >= visibleItems) {
            $(this).hide();
        }
    });

    // Load More Button
    $('#loadMoreBtn').click(function() {
        const totalItems = $('.gallery-item').length;
        const nextVisible = visibleItems + itemsPerLoad;

        $('.gallery-item').slice(visibleItems, nextVisible).fadeIn(500);
        visibleItems = nextVisible;

        if (visibleItems >= totalItems) {
            $(this).hide();
        }

        setTimeout(checkScroll, 600);
    });

    // Gallery hover effects
    $('.gallery-item').hover(
        function() {
            $(this).find('.gallery-overlay').css('opacity', '1');
        },
        function() {
            $(this).find('.gallery-overlay').css('opacity', '0');
        }
    );

});
