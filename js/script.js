JQuery(document).ready(($)=>{
    $('.coffee-carousel').owlCarousel({
        nav:true,
    });

});


$(document).on('ready', function() {
      
    $(".center").slick({
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  });

  