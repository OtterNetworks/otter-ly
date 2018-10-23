/* Function that triggers the mobile navigation menu:
================================================================================== */
(function ($) {
  var navbarSwitcher = $('.js-navbar-switcher');
  var navbarLink = $('.js-navbar-link');
  var navbar = $('#mobileNavbar');
  var openedClass = 'navbar_opened';

  var navbarOpened = false;

  function closeNavbar() {
    navbar.removeClass(openedClass);
  }

  function openNavbar() {
    navbar.addClass(openedClass);
  }

  navbarSwitcher.click(function() {
    navbarOpened = !navbarOpened;

    if (navbarOpened) {
      openNavbar();
    } else {
      closeNavbar();
    }
  });

  navbarLink.click(function () {
    navbarOpened = false;
    closeNavbar();
  });
})(jQuery);
