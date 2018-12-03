(function () {
  var initSlider = function () {
    var slideshowSelector = '#caseStudySlideshow';
    var slidersSelector = '.js-case-study-control';
    var sliderActiveSelector = 'case-study-section__slider_active';

    var slideshow = $(slideshowSelector);
    var sliders = $(slidersSelector);

    if (!!slideshow.length) {
      new Siema({
        selector: slideshowSelector,
        onInit: function () {
          var slideshow = this;

          $(sliders[this.currentSlide]).addClass(sliderActiveSelector);
        },
        onChange: function () {
          sliders.removeClass(sliderActiveSelector);
          $(sliders[this.currentSlide]).addClass(sliderActiveSelector);
        }
      });
    }
  }

  window.addEventListener('load', initSlider);
})();
