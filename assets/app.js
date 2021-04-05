$(document).ready(function () {
  
var popup = $('.js-popup');    
var popupMenuOpen = $('.js-open');
var popupMenuClose = $('.js-close');


popupMenuOpen.click(function () {
    popup.show();
  });

popupMenuClose.click(function () {
      popup.hide();
  });

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });
});