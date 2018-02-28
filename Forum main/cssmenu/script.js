$(function() {
  menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  $("#spnlogin").click(function(e) {
    e.preventDefault();
    return false;
  });
  $(window).resize(function(){
    var w = $(this).width(); 
    if(w > 600 && menu.is(':hidden')) {
      menu.removeAttr('style');
       $("#icosearch").show();
    }
  if(w <= 600 && menu.is(':hidden')) {
      $("#icosearch").hide();
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 600 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});
 // <a href='#' id='openup'>XYZ</a>