jQuery(function($) {

    // ===== PAGE LOADING =====
    $(window).on("load", function() {
        $("div.loadScreen").fadeOut();
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
    $('.skill-card, .gallery-item, .sketch-item, .about-content, .contact-content').addClass('fade-in');
})(jQuery);
