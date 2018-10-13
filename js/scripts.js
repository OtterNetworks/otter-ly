jQuery(document).ready(function($){ 


/* Function that changes each link in the navigation to its "active" color, when 
   the user scrolls to its corresponding section:
================================================================================== */

  var sections = $('section')
    , nav = $('header')
    , nav_height = nav.outerHeight();
   
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    //console.log(cur_pos);
   
    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();
   
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
   
        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        //console.log("reaching section #"+$(this));
      }
    });
  });


/* Function that triggers the mobile navigation menu:
================================================================================== */

 $("#nav-mobile").html($("#nav-main").html());
  $("#nav-trigger span").click(function(){
      if ($("nav#nav-mobile ul").hasClass("expanded")) {
          $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
          $(this).removeClass("open");
      } else {
          $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
          $(this).addClass("open");
      }
  });


/* Function for seamless scrolling when navigation links are clicked on:
================================================================================== */

  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


/* Function for Ajax-based contact form:
================================================================================== */

 $('#someForm').on('submit', function(e) {
    e.preventDefault();
    
    //get the name field value
    var name = $('#name').val();
    //get the name field value
    var email = $('#email').val();
    //get the comments
    var comments = $('#comments').val();
          
    //pretend we don't need validation
    
    //send to formspree
    $.ajax({
      url:'https://formspree.io/xqlqylgm',
      method:'POST',
      data:{
        name:name,
        _replyto:email,
         email:email,
        comments:comments,
        _subject:'Otter Networks form submission',
      },
      dataType:"json",
      success:function() {
        console.log('success'); 
        $('#formBlock').hide();
        $('#thankyouBlock').show();
      } 

    });   
    
  });


/* Function for the links that let the user scroll back up to the top:
================================================================================== */

  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 200,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

});
