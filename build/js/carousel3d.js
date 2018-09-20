var carousel = document.querySelector('.carousel');
var cellCount = 6;
var selectedIndex = 0;



function rotateC(callback) {
      carousel.classList.remove('scrollable');
      $('.carousel .carousel__cell').removeClass('select');
      
      var angle = selectedIndex / cellCount * -360;
      if ( $('html').hasClass('touch') ){
            carousel.style.transform = 'translateZ(-10000px) rotateY(' + angle + 'deg)';
            //console.log( angle, $('html').hasClass('touch'));
      } else {
            carousel.style.transform = 'translateZ(-10000px) rotateY(' + angle + 'deg)';
            TweenMax.staggerTo( '.carousel__cell' , 1.1, { rotationX: '180deg', x:"-50%",  z:'-2500px', y:'-5000px', scale:7, overwrite:true, ease: Power2.easeInOut, repeat:1, yoyo:true, onComplete:clickable}, 0.175);
            function clickable() {
              setTimeout(function(){ 
                $('.carouselBtns').removeClass('no-click');
              }, 500);
            }
      }
     
      setTimeout(function(){ 
         callback()
      }, 2650);
}


// adds and removes 3D CSS on mobile browsers so scroll behaves properly
 function makeScroll() {
     carousel.classList.add('scrollable');
     //console.log(selectedIndex);
     var selectI = 0; 

     if (selectedIndex === 0) { selectI = 1 }
     if (selectedIndex === 3) { selectI = 4 }
     if (selectedIndex === 4) { selectI = 5 }
     if (selectedIndex === 5) { selectI = 6 }
     $('.carousel .carousel__cell:nth-child('+selectI+')').addClass('select');
 }


// var prevButton = document.querySelector('.previous-button');
// prevButton.addEventListener( 'click', function() {
//   selectedIndex--;
//   rotateCarousel();
// });

// var nextButton = document.querySelector('.next-button');
// nextButton.addEventListener( 'click', function() {
//   selectedIndex++;
//   rotateCarousel();
// });


var bioButton = document.querySelector('.bio-button');
bioButton.addEventListener( 'click', function() {
  $('.carouselBtns button').removeClass('selected');
  $(this).addClass('selected');
  selectedIndex = 0;
  rotateC( function(){ makeScroll() });
  if ( !$('html').hasClass('touch') ){
    $('.carouselBtns').addClass('no-click');
  }
});

var resumeButton = document.querySelector('.resume-button');
resumeButton.addEventListener( 'click', function() {
  $('.carouselBtns button').removeClass('selected');
  $(this).addClass('selected');
  selectedIndex = 3;
  rotateC( function(){ makeScroll() });
  if ( !$('html').hasClass('touch') ){
    $('.carouselBtns').addClass('no-click');
  }
});

var contactButton = document.querySelector('.contact-button');
contactButton.addEventListener( 'click', function() {
  $('.carouselBtns button').removeClass('selected');
  $(this).addClass('selected');
  selectedIndex = 4;
  rotateC( function(){ makeScroll() });
  if ( !$('html').hasClass('touch') ){
    $('.carouselBtns').addClass('no-click');
  }
});

var creditsButton = document.querySelector('.credits-button');
creditsButton.addEventListener( 'click', function() {
  $('.carouselBtns button').removeClass('selected');
  $(this).addClass('selected');
  selectedIndex = 5;
  rotateC( function(){ makeScroll() });
  if ( !$('html').hasClass('touch') ){
    $('.carouselBtns').addClass('no-click');
  }
});





$('li.li-employment').click( function(){
  var  $details = $(this).find('.details');
  if ( $details.hasClass('closed')){
       $details.removeClass('closed');
  } else {
       $details.addClass('closed');
  }
});
 


