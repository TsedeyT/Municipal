
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 100) {
        $("header").addClass("transparent");

    }
    else {
        $("header").removeClass("transparent");
    }  
  
});

$(document).ready(function(){
  $('.mobile-menu__wrapper').click(function(){
    $('.menu').toggleClass('show-menu');
    $('.mobile-menu__wrapper').toggleClass('open');

  });
})




$(document).ready(function() {
  $('.test').click(function(){
    $('.panel-collapse').toggleClass('show');
    $('.panel-heading').toggleClass('arrow-down');
 });
  
});