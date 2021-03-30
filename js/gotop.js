function showBtnCondition() {
    if ($(this).scrollTop() >= 300) {
      $('.top a , .side-home a').attr('style','opacity:1');
        } else {
         $('.top a , .side-home a').attr('style','opacity:0');
       }
     }
 $(window).scroll(showBtnCondition);

$(document).ready(function(){
  $('.top a , .side-home a').attr('style','opacity:0');
    $('.top a').click(function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:0},1000);
    });
});

