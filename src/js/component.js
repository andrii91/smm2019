$(document).ready(function () {
  $('.instruments-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
  })

  $('.reviews-carousel').owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
  
  $('.price-btn li').click(function(){
    $(this).parent().find('li').removeClass('active');
    $(this).addClass('active');
    
    $(this).parents('.packages-item').find('.price li').removeClass('active');
    $(this).parents('.packages-item').find('.'+$(this).data('p')).addClass('active');
  })
});