function grass(speed){

  /*var numberOfBlades;
  if (window.matchMedia("(max-width: 599.9px)").matches) {
      numberOfBlades = 350;
  } else if (window.matchMedia("(max-width: 599.9px)").matches) {
      numberOfBlades = 600;
  } else {
      numberOfBlades = 800;
  }*/
  
  var numberOfBlades = Math.floor($(window).width()/3.33);

  var grass = document.getElementsByClassName('grass')[0];
  //$('.grass').delay(speed).animate({opacity:1, 'display':'block'}, 100 );

  function assignRandomStyles(blade) {
    var ht = $(window).height();
    var randomHeight =  Math.floor(Math.random() * (ht));
    //var randomLeft = Math.floor(Math.random() * (window.innerWidth - 8));
    var randomLeft = (((Math.floor( Math.random() * 1050 ))/10)-5);
    var randomRotation = Math.floor(Math.random() * 10) - 5;
    blade.style.height = ((randomHeight/1.75) + ((ht+600) - (numberOfBlades*2)))/2.5 + 'px';
    blade.style.zIndex = randomHeight;
    //blade.style.opacity = randomHeight * 0.02;
    if (window.matchMedia("(max-width: 599.9px)").matches) {
      blade.style.opacity = 1;
    } else {
      blade.style.opacity = randomHeight * 0.02;
    }

   // blade.style.left = randomLeft + 'px';
    blade.style.left = randomLeft + 'vw';
    blade.style.transform = 'rotate(' + randomRotation + 'deg)';
  }

  for (var i = 0; i < numberOfBlades; i++) {
    var blade = document.createElement('div');
    blade.classList.add("grassBlade");
    assignRandomStyles(blade);
    grass.appendChild(blade);

  }


}

function clearGrass(){
   //$('.grass').fadeOut(100);
   TweenMax.to('.grass', 0, {className:"+=hidden"});//.delay(1.15);
}

function showGrass(delay){
   //$('.grass').fadeOut(100);
   TweenMax.to('.grass', 0, {className:"-=hidden"}).delay(delay);
}


