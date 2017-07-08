// console.log("CONNECTED");
$(document).ready(function(){
  // Set options
  var speed = 500;              //fade speed
  var autoswitch = true;        //Autoslider options
  var autoswitch_speed = 4000;  //Autoslider speed

  // Add initial active class
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  //Show first slide
  $('.active').show();

// Next handler
  $('#next').on('click',nextSlide);

// Previous Handler
$('#prev').on('click',prevSlide);

// Auto SLider
if(autoswitch==true){
  setInterval(nextSlide,autoswitch_speed);
}

// Switch to Next Slide

function nextSlide(){
  console.log("NEXT CLICKED!");
  $('.active').removeClass('active').addClass('oldActive');
  if ($('.oldActive').is(':last-child')){
    $('.slide').first().addClass('active');
  }
  else {
    $('.oldActive').next().addClass('active')
  }
  $('.oldActive').removeClass('oldActive');
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
  }

function prevSlide(){
  console.log("PREV CLICKED!");
  $('.active').removeClass('active').addClass('oldActive');
  if ($('.oldActive').is(':first-child')){
    $('.slide').last().addClass('active');
  }
  else {
    $('.oldActive').prev().addClass('active');
  }
  $('.oldActive').removeClass('oldActive');
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
}









});
