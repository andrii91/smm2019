(function ($) {

  $.fn.shuffle = function () {

    var allElems = this.get(),
      getRandom = function (max) {
        return Math.floor(Math.random() * max);
      },
      shuffled = $.map(allElems, function () {
        var random = getRandom(allElems.length),
          randEl = $(allElems[random]).clone(true)[0];
        allElems.splice(random, 1);
        return randEl;
      });

    this.each(function (i) {
      $(this).replaceWith($(shuffled[i]));
    });

    return $(shuffled);

  };

})(jQuery);

$(document).ready(function () {
  $('.instruments-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
  })

  var review = $('.reviews-carousel');
  $(".two .item").shuffle();
  $(".two1 .item").shuffle();
  $(".two2 .item").shuffle();

  review.owlCarousel({
    loop: true,
    margin: 16,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 4
      }
    }
  });

  $('.see_all').click(function () {
    $('.fancybox-button.fancybox-button--thumbs').trigger('click');
  });


  //  review.owlCarousel();
  if ($(window).width() > 1200) {
    $('.reviews-carousel.two').viewportChecker({
      callbackFunction: function (elem, action) {
        console.log($(this));

        $('.reviews-carousel.two .owl-item.active .reviews-video').each(function () {
          var iframe_url = "https://www.youtube.com/embed/" + $(this).data('id') + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
          var iframe_height = $(this).find('.preview').height();
          var iframe_width = $(this).find('.preview').width();
          $(this).find('.preview').hide();
          $(this).append('<iframe src="' + iframe_url + '?autoplay=1&mute=1&loop=1&playlist=' + $(this).data('id') + '&rel=0&controls=0&showinfo=0"  width="' + iframe_width + '" height="' + iframe_height + '"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
          $(this).find('.progress').addClass('active');
        })

      },
      scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
    });
    $('.reviews-carousel.two1').viewportChecker({
      callbackFunction: function (elem, action) {
        console.log($(this));

        $('.reviews-carousel.two1 .owl-item.active .reviews-video').each(function () {
          var iframe_url = "https://www.youtube.com/embed/" + $(this).data('id') + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
          var iframe_height = $(this).find('.preview').height();
          var iframe_width = $(this).find('.preview').width();
          $(this).find('.preview').hide();
          $(this).append('<iframe src="' + iframe_url + '?autoplay=1&mute=1&loop=1&playlist=' + $(this).data('id') + '&rel=0&controls=0&showinfo=0"  width="' + iframe_width + '" height="' + iframe_height + '"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
          $(this).find('.progress').addClass('active');
        })

      },
      scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
    });
    $('.reviews-carousel.two2').viewportChecker({
      callbackFunction: function (elem, action) {
        console.log($(this));

        $('.reviews-carousel.two2 .owl-item.active .reviews-video').each(function () {
          var iframe_url = "https://www.youtube.com/embed/" + $(this).data('id') + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
          var iframe_height = $(this).find('.preview').height();
          var iframe_width = $(this).find('.preview').width();
          $(this).find('.preview').hide();
          $(this).append('<iframe src="' + iframe_url + '?autoplay=1&mute=1&loop=1&playlist=' + $(this).data('id') + '&rel=0&controls=0&showinfo=0"  width="' + iframe_width + '" height="' + iframe_height + '"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
          $(this).find('.progress').addClass('active');
        })

      },
      scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
    });

    review.on('changed.owl.carousel', function (event) {
      $('.reviews-carousel').find('iframe').remove();
      $('.reviews-carousel').find('.preview').show();
      $('.reviews-carousel').find('.progress').removeClass('active');
      setTimeout(function () {
        $('.reviews-carousel.two .owl-item.active .reviews-video').each(function () {
          var iframe_url = "https://www.youtube.com/embed/" + $(this).data('id') + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
          var iframe_height = $(this).find('.preview').height();
          var iframe_width = $(this).find('.preview').width();
          $(this).find('.preview').hide();
          $(this).append('<iframe src="' + iframe_url + '?autoplay=1&mute=1&loop=1&playlist=' + $(this).data('id') + '&rel=0&controls=0&showinfo=0"  width="' + iframe_width + '" height="' + iframe_height + '"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
          $(this).find('.progress').addClass('active');
        })
        
        $('.reviews-carousel.two1 .owl-item.active .reviews-video').each(function () {
          var iframe_url = "https://www.youtube.com/embed/" + $(this).data('id') + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
          var iframe_height = $(this).find('.preview').height();
          var iframe_width = $(this).find('.preview').width();
          $(this).find('.preview').hide();
          $(this).append('<iframe src="' + iframe_url + '?autoplay=1&mute=1&loop=1&playlist=' + $(this).data('id') + '&rel=0&controls=0&showinfo=0"  width="' + iframe_width + '" height="' + iframe_height + '"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
          $(this).find('.progress').addClass('active');
        })
        $('.reviews-carousel.two2 .owl-item.active .reviews-video').each(function () {
          var iframe_url = "https://www.youtube.com/embed/" + $(this).data('id') + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
          var iframe_height = $(this).find('.preview').height();
          var iframe_width = $(this).find('.preview').width();
          $(this).find('.preview').hide();
          $(this).append('<iframe src="' + iframe_url + '?autoplay=1&mute=1&loop=1&playlist=' + $(this).data('id') + '&rel=0&controls=0&showinfo=0"  width="' + iframe_width + '" height="' + iframe_height + '"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
          $(this).find('.progress').addClass('active');
        })
      }, 500)


    })
  }



  $('.price-btn li').click(function () {
    $(this).parent().find('li').removeClass('active');
    $(this).addClass('active');

    $(this).parents('.packages-item').find('.price li').removeClass('active');
    $(this).parents('.packages-item').find('.' + $(this).data('p')).addClass('active');
  });


  $('.play').click(function () {
    var iframe_url = "https://www.youtube.com/embed/" + $(this).parent().data('id') + "?autoplay=1&autohide=1&rel=0&amp;showinfo=0";
    var iframe_height = $(this).parent().find('img').height();
    var iframe_width = $(this).parent().find('img').width();
    $(this).hide();
    $(this).parent().find('img').hide();
    $(this).parent().append('<iframe src="' + iframe_url + '?rel=0&amp;controls=0&amp;showinfo=0"  width="' + iframe_width + '" height="' + iframe_height + '"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
  });




  $('.last_time').viewportChecker({
    callbackFunction: function (elem, action) {

      $('.last_time-item .count span').each(function () {
        var from = $(this);
        if (from.attr('id').length > 1) {
          from.animateNumber({
              number: from.attr('id')
            },
            800);
        } else {
          var percent_number_step = $.animateNumber.numberStepFactories.separator('0');
          from.animateNumber({
              number: from.attr('id'),
              numberStep: percent_number_step
            },
            800);
        }
      })
    },
    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
  });


  $('.reviews-video').each(function () {
    $(this).find('img.preview').attr('src', 'http://i.ytimg.com/vi/' + $(this).data('id') + '/hqdefault.jpg');
  });

});



/*

$(function () {



});






$('form').on('submit', function (e) {
e.preventDefault();
$('.submit').addClass('inactive');
$('.submit').prop('disabled', true);
var $form = $(this);
var msg = $form.find('input, textarea, select');


$.ajax({
  type: 'POST',
  url: '/crm/reg.php',
  dataType: 'json',
  data: $form.serialize(),
  success: function (response) {
    console.info(response);
    if (response.status == 'success') {

    }
  }
});
setTimeout(function () {
  window.location.href = "/smm2018-thx/";
}, 800);




});

});
*/