$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 3,
    margin: 20,
    nav: true
  });

  $('header .nav').on('click', 'li a', function(e) {
    e.preventDefault();
    var id = '#' + $(this).data('id');
    $('html, body').animate({scrollTop:$(id).offset().top});
  });
});
