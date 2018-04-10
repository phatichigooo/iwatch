$(document).ready(function(){
  $(".owlCarouselHorizontal").owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    items: 4,
    responsive : {
      // breakpoint from 0 up
      0 : {
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items: 1
      },
      // breakpoint from 480 up
      576 : {
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items: 2
      },
      // breakpoint from 768 up
      768 : {
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items: 3
      },
      992: {
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items: 4
      },
      1200: {
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        items: 4
      }
  }
  });
    
  $(".owlCarouselVertical").owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    autoplayTimeout:5000,
    autoplayHoverPause: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
  });
    
  
});