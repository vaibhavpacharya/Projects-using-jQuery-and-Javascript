//Accordian
var action = "click";
var speed = "500";

$(document).ready(function() {
  //Question Handler
  $('li.q').on(action,function(){
    //select answer element or next element
      $(this).next()
        .slideToggle(speed)
        //select other answers
          .siblings('li.a')
            .slideUp();
  //Get arrow for active question
  var img = $(this).children('.fa');
  //Remove rotate class other than active question
  $('.fa').not(img).removeClass('rotate');
  //Toggle rotate class
  img.toggleClass('rotate');
  });
});
