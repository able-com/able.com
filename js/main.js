$(function () {
  var fixed = false;
  var offset = $('.js-fixed-nav').offset().top;

  $(window).resize(function () {
    offset = $('.js-fixed-nav').offset().top;
  })
  $(window).scroll(function () {
    if (scrollY >= 0 && fixed == false) {
      $('.js-fixed-nav').css('background', 'rgba(255, 255, 255, 0.400)');

      fixed = true;
    }
    else if (scrollY == 0 && fixed == true) {
      $('.js-fixed-nav').css('background', 'rgba(0, 0, 0, 0)');
      fixed = false;
    }



  })





})