(function () {
  var initSlider = function () {
    var slideshowSelector = '#caseStudySlideshow';
    var sliderDotSelector = '.js-case-study-dot';
    var sliderPrevSelector = '.js-case-study-control-prev';
    var sliderNextSelector = '.js-case-study-control-next';
    var sliderDotActiveSelector = 'case-study-section__slider_active';

    var slideshow = $(slideshowSelector);
    var sliderDots = $(sliderDotSelector);
    var sliderPrev = $(sliderPrevSelector);
    var sliderNext = $(sliderNextSelector);

    if (!!slideshow.length) {
      var isDesktop = window.matchMedia("(min-width: 1025px)").matches;
      var perPage = isDesktop ? 2 : 1;

      var siemaSlider = new Siema({
        selector: slideshowSelector,
        perPage: perPage,
        flex: {
          alignItems: 'center'
        },
        onInit: function () {
          var slideshow = this;

          $(sliderDots[this.currentSlide]).addClass(sliderDotActiveSelector);

          sliderDots.on('click', function (event) {
            event.preventDefault();

            slideshow.goTo(sliderDots.index(this));
          });
        },
        onChange: function () {
          sliderDots.removeClass(sliderDotActiveSelector);
          $(sliderDots[this.currentSlide]).addClass(sliderDotActiveSelector);
        }
      });

      sliderPrev.on('click', function () {
        siemaSlider.prev();
      });

      sliderNext.on('click', function () {
        siemaSlider.next();
      });
    }
  }

  window.addEventListener('load', initSlider);
})();
