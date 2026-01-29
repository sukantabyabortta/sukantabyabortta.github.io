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

   // ===== GALLERY FUNCTIONALITY (OPTIMIZED) =====
(function ($) {

    $.fn.smartGallery = function (options) {

        const settings = $.extend({
            item: '.gallery-item',
            overlay: '.gallery-overlay',
            loadBtn: '#loadMoreBtn',
            initial: 3,
            perLoad: 3,
            speed: 400
        }, options);

        return this.each(function () {

            const $gallery = $(this);
            const $items = $gallery.find(settings.item);
            const $loadBtn = $(settings.loadBtn);

            let visibleItems = settings.initial;
            const totalItems = $items.length;

            // Hide all first (jQuery only)
            $items.hide();

            // Show initial items
            $items.slice(0, visibleItems).fadeIn(settings.speed);

            // Hide button if not needed
            if (totalItems <= visibleItems) {
                $loadBtn.hide();
            }

            // Load more handler
            $loadBtn.on('click', function () {

                const nextVisible = visibleItems + settings.perLoad;

                $items
                    .slice(visibleItems, nextVisible)
                    .stop(true, true)
                    .fadeIn(settings.speed);

                visibleItems = nextVisible;

                if (visibleItems >= totalItems) {
                    $(this).fadeOut(300);
                }
            });

            // Smooth hover overlay
            $items.hover(
                function () {
                    $(this).find(settings.overlay)
                           .stop(true, true)
                           .fadeIn(200);
                },
                function () {
                    $(this).find(settings.overlay)
                           .stop(true, true)
                           .fadeOut(200);
                }
            );

        });
    };

});




})(jQuery);



