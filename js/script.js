$(document).ready(function() {
        $('.owl-carousel').owlCarousel({
                nav: false,
                dots: false,
                loop: true,
                margin: 15,
                // responsiveBaseElement probably will save someone's live and time in future =)
                responsiveBaseElement: 'body', 
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  480: {
                    items: 1
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 3
                  }
                }
            });
  $('.owl-prev').html('<i class="fa fa-caret-left" aria-hidden="true"></i>');
  $('.owl-next').html('<i class="fa fa-caret-right" aria-hidden="true"></i>');
  $('.film__description h2').before('<div class="film__date"><span class="film__date_first">28</span><br><span class="film__date_second">Feb</span></div>');
  $('.archives__item p').prepend('<i class="fa fa-caret-right archives__item_tringle" aria-hidden="true"></i>');
  $('.related ul a').prepend('<i class="fa fa-caret-right related_tringle" aria-hidden="true"></i>');
  

});