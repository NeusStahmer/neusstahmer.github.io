$(document).ready(function () {
  
var popup = $('.js-popup');    
var popupMenuOpen = $('.js-open');
var popupMenuClose = $('.js-close');


popupMenuOpen.click(function () {
    popup.fadeIn(300);
  });

popupMenuClose.click(function () {
      popup.fadeOut(300);
  });


});