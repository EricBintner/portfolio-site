




$(function() {
    
    // Force initial state 
    // !!! needs url variables for states !!!
	TweenLite.to("#content", 0, {y: 0 });

	// - - - - - - MAIN NAV ANIMATION / CLICK HANDLER - - - - - //
	var link 	= null;
	var oldLink = null;
	var speed 	= null;
	var yaxis 	= null;
	var easy 	= null;

	$('nav a').click(function() {
	 	yaxis = $(this).data('yaxis');
	 	link  = $(this).data('level');
	    //if ( oldLink === null ) {
	    //     oldLink = link;
		//	}
	    GenerateSpeed(link, oldLink, yaxis);
	    return false;
	});

	// Animation for 'levels' of site
	// Slows down duration for longer distance 
	// Slows down duration and changes ease for higher altitude going up!
 	function GenerateSpeed(link, oldLink, yaxis) {

		function difference(a, b) {
		  return (a - b);
		}
		function difference2(a, b) {
		  return (b - a);
		}
		//console.log(" - - - - - - " +
	    //			"oldLink "+	oldLink
	    //			);
	    if ( link === oldLink) {
	        console.log("same");
	        return false;
	    } else
	    if ( difference(oldLink, link) == 1 ) {
	        speed = 1;
	        easy  = Power1.easeInOut;
	        //console.log("DOWN");
	    } else
	    if ( difference2(oldLink, link) == 1 ) {
	        speed = 1;
	        easy  = Power1.easeInOut;
	        if ( link >= 1 ){
	    		speed = 2 + (0.75*link);
	        	easy  = Power2.easeInOut;
	    	} 
	        //console.log("UP");
	    } else

	    if ( difference(oldLink, link) == 2 ) {
	        speed = 2;
	        easy  = Power1.easeInOut;
	    } else
	    if ( difference2(oldLink, link) == 2 ) {
	        speed = 2;
	        easy  = Power1.easeInOut;
	        if ( link >= 2 ){
	    		speed = 3 + (0.75*link);
	        	easy  = Power2.easeInOut;
	    	} 
	    } //else

	    if ( difference(oldLink, link) == 3 ) {
	        speed = 3;
	        easy  = Power1.easeInOut;
	    } else
	    if ( difference2(oldLink, link) == 3 ) {
	        speed = 3;
	        easy  = Power1.easeInOut;
	        if ( link >= 3 ){
	    		speed = 4 + (0.75*link);
	        	easy  = Power2.easeInOut;
	    	} 
	    } //else

	    if ( difference(oldLink, link) == 4 ) {
	        speed = 4;
	        easy  = Power1.easeInOut;
	    } else
	    if ( difference2(oldLink, link) == 4 ) {
	        speed = 4;
	        easy  = Power1.easeInOut;
	        if ( link >= 4 ){
	    		speed = 5 + (0.75*link);
	        	easy  = Power2.easeInOut;
	    	} 
	    } //else

	    if ( difference(oldLink, link) == 5 ) {
	        speed = 5;
	        easy  = Power1.easeInOut;
	    } else
	    if ( difference2(oldLink, link) == 5  ) {
	        speed = 5;
	        easy  = Power1.easeInOut;
	        if ( link >= 4 ){
	    		speed = 6 + (0.75*link);
	        	easy  = Power2.easeInOut;
	    	} 
	    }

	    // Test the variables
	    // console.log(" - - - - - - " +
	    // 			"link "   +	link, 
	    // 			", speed "+	speed, 
	    // 			", yaxis "+	yaxis,
	    // 			", ease "+	easy
	    // 			);

	    GoToLink(link, speed, yaxis, easy);
	    
	}

	function GoToLink(link, speed, yaxis, easy) {
		oldLink = link;
	    TweenLite.to("#content", speed, { y: yaxis*10000, ease: easy });
	    if (link === 0 ) { play_level_0(speed); }
	    if (link === 1 ) { play_level_1(speed); }
	    if (link === 2 ) { play_level_2(speed); }
	    if (link === 3 ) { play_level_3(speed); }
	    if (link === 4 ) { play_level_4(speed); }
	    if (link === 5 ) { play_level_5(speed); }
	}

	var level_0 = new TimelineLite();
	var level_1 = new TimelineLite();
	var level_2 = new TimelineLite();
	var level_3 = new TimelineLite();
	var level_4 = new TimelineLite();
	var level_5 = new TimelineLite();

	var $grid = $('.grid').isotope({
	  	itemSelector: '.grid-item',
	  	percentPosition: true,
	  	masonry: {
	  	  	columnWidth: '.grid-sizer'
	  	},
	  	getSortData: {
	  	  	dataset: '.dataset'//,
	  	  // symbol: '.symbol',
	  	  // number: '.number parseInt',
	  	  // category: '[data-category]',
	  	  // weight: function( itemElem ) {
	  	  //   var weight = $( itemElem ).find('.weight').text();
	   	  //   return parseFloat( weight.replace( /[\(\)]/g, '') );
	  	  // }
  	  	},
  	  	stagger: 100,
  	  	animationEngine: 'css',
  	  	transitionDuration: '0.9s'
	});


	function play_level_0( speed ) {
		console.log(" - - - level 0 - - - ");
		//level_0.from('body', 0.5, {x:100});  	
	} 

	function play_level_1( speed ) {
		console.log(" - - - level 1 - - - ");
		//level_1.from(head, 0.5, {left:100, opacity:0});  	
	} 

	function play_level_2( speed ) {
		console.log(" - - - level 2 - - - ");
		//level_2.from(head, 0.5, {left:100, opacity:0});  	
	} 

	function play_level_3( speed ) {
		console.log(" - - - level 3 - - - ");
		//level_3.from(head, 0.5, {left:100, opacity:0});  	
	} 

	function play_level_4( speed ) {
		console.log(" - - - level 4 - - - ");
		//level_4.from(head, 0.5, {left:100, opacity:0});  	
	} 

	function play_level_5( speed ) {
		console.log(" - - - level 5 - - - ");
		//level_5.from(head, 0.5, {left:100, opacity:0});  	
	} 







	// - - - - - - ISOTOPE FILTERS / CLICK HANDLER - - - - - //






// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
// $('#sorts').on( 'click', 'button', function() {
//   var sortByValue = $(this).attr('data-sort-by');
//   $grid.isotope({ sortBy: sortByValue });
// });

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});






// var main = new TimelineMax();

// var titleTimeline = new TimelineLite();
// titleTimeline.to("h1", 0.2, {x:100})
//   .to("h1", 0.5, {color:"red"})

// var boxesTimeline = new TimelineLite();
// boxesTimeline.staggerFrom(".box", 0.3, {scale:0}, 0.2)
//   .to(".container", 1, {rotation:360, scale:0.5, opacity:0})

// //add both timelines to main so we can play them in sequence, reverse them, pause them and control them any way we want
// main.add(titleTimeline)
// main.add(boxesTimeline)

// //restart the main timeline
// $("#restart").click(function(){
//   main.restart();
// })
  




	

});



