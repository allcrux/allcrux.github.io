jQuery(document).ready(function($) {
    // Reset failover styles
    $('#products_sect').css('background', 'transparent');
    $('#features_sect').css('background', 'transparent');
    $('#facts_sect').css('background', 'transparent');
    $('#why_sect').css('background', 'transparent');
    $('#pricing_sect').css('background', 'transparent');
    $('#contact_sect').css('background', 'transparent');
    $('#products_sect').css('border', 'none');
    $('#features_sect').css('border', 'none');
    $('#facts_sect').css('border', 'none');
    $('#why_sect').css('border', 'none');
    $('#pricing_sect').css('border', 'none');
    $('#contact_sect').css('border', 'none');

    // Change background smoothly while scrolling
    function bindScroll() {
        $(window).bind('scroll', function(e) {
            var $window = $(window),
                $body = $('body'),
                $panel = $('section.vc_section');

            // Change 33% earlier than scroll position so colour is there when you arrive.
            // If you want a different offset, change here.
            var scroll = $window.scrollTop() + $window.height() / 3;

            $panel.each(function() {
                var $this = $(this);

                if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                    // If panel has an ID than it needs a color change. Otherwise, no.
                    if ($this.attr('id')) {
                        // Remove all classes on body with color-
                        $body.removeClass(function(index, css) {
                            return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
                        });

                        // Add class of currently active div
                        $body.addClass('color-' + $this.attr('id'));
                    }
                }
            });
        });
    }

    bindScroll();

    // When resizing the window, there are times where the color changes locks on a single color.
    // When the window is resized page should reload to counteract this
    $(window).bind('resize', function(e) {
        if (window.RT) clearTimeout(window.RT);
        window.RT = setTimeout(function() {
            // this.location.reload(false);
            bindScroll();
        }, 100);
    });
});
