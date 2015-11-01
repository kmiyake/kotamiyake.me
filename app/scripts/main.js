$(document).ready(function() {
  $('#owl-portfolio').owlCarousel({
    items: 3,
    navigation: true
  });

  $('header .nav').on('click', 'li a', function(e) {
    e.preventDefault();
    var id = '#' + $(this).data('id');
    $('html, body').animate({scrollTop:$(id).offset().top});
  });
});
