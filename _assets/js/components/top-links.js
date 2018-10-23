/* Function for the links that let the user scroll back up to the top:
================================================================================== */
(function ($) {
  $(document).ready(function () {
    var offset = 300; // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset_opacity = 1200; // browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    var scroll_top_duration = 200; // duration of the top scrolling animation (in ms)
    var $back_to_top = $('.cd-top'); // grab the "back to top" link

    // hide or show the "back to top" link
    $(window).scroll(function(){
      ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
      if( $(this).scrollTop() > offset_opacity ) {
        $back_to_top.addClass('cd-fade-out');
      }
    });

    // smooth scroll to top
    $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0 ,
        }, scroll_top_duration
      );
    });
  });
})(jQuery);
