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

  $('.slider').slick();

});