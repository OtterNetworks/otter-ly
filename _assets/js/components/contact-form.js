/* Function for Ajax-based contact form:
================================================================================== */
(function ($) {
  $(document).ready(function () {
    $('#contactForm').on('submit', function(e) {
      e.preventDefault();
      var name = $('#name').val(); //get the first name field value
      var email = $('#email').val(); //get the name field value

      //send to formspree
      $.ajax({
        url: 'https://formspree.io/xqlqylgm',
        method: 'POST',
        data: {
          name: name,
          _replyto: email,
          email: email,
          _subject: 'Otter Networks form submission'
        },
        dataType: "json",
        success: function() {
          console.log('success');
          $('#formBlock').hide();
          $('#thankyouBlock').show();
        }
      });
    });
  });
})(jQuery);
