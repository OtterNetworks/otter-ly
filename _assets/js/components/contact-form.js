/* Function for Ajax-based contact form:
================================================================================== */
(function ($) {
  $(document).ready(function () {
    $('#contactForm').on('submit', function(e) {
      e.preventDefault();
      var name = $('#name').val(); //get the name field value
      var email = $('#email').val(); //get the name field value
      var comments = $('#comments').val(); //get the comments

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
  });
})(jQuery);
