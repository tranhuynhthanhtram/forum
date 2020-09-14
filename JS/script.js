$(document).ready(function() {
    $(".thumbnail img").click(function(){
        $("#mainImg").attr("src", $(this).attr('src'))
    })
    
    $(".buttons img").click(function() {
        $("#mainImg").attr("src", $(this).attr('src'))

    })



    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) $("#myBtn").fadeIn();
      else $("#myBtn").fadeOut();
      });
      $("#myBtn").click(function () {
      $("body,html").animate({scrollTop: 0}, "slow");
      });
   

      $("#myCarousel").carousel();
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
      
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
      $("#myCarousel").carousel("next");
    });




     
      
})




    