/* Function that changes each link in the navigation to its "active" color, when
   the user scrolls to its corresponding section:
================================================================================== */
(function ($) {
  $(document).ready(function () {
    var sections = $('section');
    var nav = $('header');
    var nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();

      sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          sections.removeClass('active');

          $(this).addClass('active');
          nav.find('a[href="/#'+$(this).attr('id')+'"]').addClass('active');
        }
      });
    });
  });
})(jQuery);
