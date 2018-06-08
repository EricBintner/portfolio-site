
var time = 1;

    // Force initial state 
    // !!! needs url variables for states !!!
	TweenLite.to("#content", 0, {y: 0 }); //480000

	// TweenLite.from("a.level-G", 2, { y:"-298", x:"-47px" }).delay(1);
	// TweenLite.from("a.level-1", 2, { y:"-328", x: "57px" }).delay(1);
	// TweenLite.from("a.level-2", 2, { y:"-130", x: "44px" }).delay(1);
	// TweenLite.from("a.level-3", 2, { y:"-304", x: "48px" }).delay(1);
	// TweenLite.from("a.level-4", 2, { y:"-198", x: "58px" }).delay(1);
	// TweenLite.from("a.level-5", 2, { y:"-338", x: "87px" }).delay(1);

	TweenLite.to("a.level-G", 0, { y:"-290", x:"-47px" });
	TweenLite.to("a.level-1", 0, { y:"-319", x: "53px" });
	TweenLite.to("a.level-2", 0, { y:"-130", x: "38px" });
	TweenLite.to("a.level-3", 0, { y:"-295", x: "37px" });
	TweenLite.to("a.level-4", 0, { y:"-193", x: "45px" });
	TweenLite.to("a.level-5", 0, { y:"-329", x: "83px" });

	// TweenLite.to("a.level-G", 0, { y:"0", x: "0" });
	// TweenLite.to("a.level-1", 0, { y:"0", x: "0" });
	// TweenLite.to("a.level-2", 0, { y:"0", x: "0" });
	// TweenLite.to("a.level-3", 0, { y:"0", x: "0" });
	// TweenLite.to("a.level-4", 0, { y:"0", x: "0" });
	// TweenLite.to("a.level-5", 0, { y:"0", x: "0" });


	

	// TweenLite.to("a.level-G", 2, { y:"0", x: "0" }).delay(time);
	// TweenLite.to("a.level-1", 2, { y:"0", x: "0" }).delay(time);
	// TweenLite.to("a.level-2", 2, { y:"0", x: "0" }).delay(time);
	// TweenLite.to("a.level-3", 2, { y:"0", x: "0" }).delay(time);
	// TweenLite.to("a.level-4", 2, { y:"0", x: "0" }).delay(time);
	// TweenLite.to("a.level-5", 2, { y:"0", x: "0" }).delay(time);



// var tl = new TimelineLite({repeat: -1});

//   tl.staggerTo("a.level-G", 2, { y:"-298", x:"-47px" })
//     .staggerTo("a.level-1", 2, { y:"-328", x: "57px" })
// 	.staggerTo("a.level-2", 2, { y:"-130", x: "44px" })
// 	.staggerTo("a.level-3", 2, { y:"-304", x: "48px" })
// 	.staggerTo("a.level-4", 2, { y:"-198", x: "58px" })
// 	.staggerTo("a.level-5", 2, { y:"-338", x: "87px" });

var metroTL   = new TimelineLite();
var metroTime = time/1.5; 
var metroEase = Power1.easeInOut;

 metroTL.to("svg#metro #dark-blue", 	metroTime, 	 { drawSVG: "100% 100%", ease: metroEase })
		.to("svg#metro #dark-blue", 	metroTime/4, { opacity: 0 }, "-="+metroTime/4)
		.to("svg#metro #blue", 			metroTime,   { drawSVG: "85% 85%", ease: metroEase }, 	"-="+metroTime )
		.to("svg#metro #blue", 			metroTime/4, { opacity: 0 }, "-="+metroTime/4)
		.to("svg#metro #green", 		metroTime,   { drawSVG: "0% 0%", ease: metroEase }, 	"-="+metroTime )
		.to("svg#metro #green", 		metroTime/4, { opacity: 0 }, "-="+metroTime/4)
		.to("svg#metro #blue-green", 	metroTime,   { drawSVG: "62% 62%", ease: metroEase }, 	"-="+metroTime )
		.to("svg#metro #blue-green", 	metroTime/4, { opacity: 0 }, "-="+metroTime/4)
		.to("svg#metro #dark-green", 	metroTime,   { drawSVG: "50% 50%", ease: metroEase }, 	"-="+metroTime )
		.to("svg#metro #dark-green", 	metroTime/4, { opacity: 0 }, "-="+metroTime/4)
		.to("svg#metro #orange", 		metroTime,   { drawSVG: "59% 59%", ease: metroEase }, 	"-="+metroTime )
		.to("svg#metro #orange", 		metroTime/4, { opacity: 0 }, "-="+metroTime/4)
		.to("svg#metro #purple", 		metroTime,   { drawSVG: "82% 82%", ease: metroEase }, 	"-="+metroTime )
		.to("svg#metro #purple", 		metroTime/4, { opacity: 0 }, "-="+metroTime/4)
		.to("svg#metro #yellow", 		metroTime,   { drawSVG: "100% 100%", ease: metroEase },	"-="+metroTime )
		.to("svg#metro #yellow", 		metroTime/4, { opacity: 0 }, "-="+metroTime/4)
		.to("svg#metro #grey", 			metroTime,   { drawSVG: "57% 57%", ease: metroEase }, 	"-="+metroTime )
		.to("svg#metro #grey", 			metroTime/4, { opacity: 0 }, "-="+metroTime/4);

var tl = new TimelineLite({repeat: -1});
 	
  tl.delay(metroTime).staggerTo(".navPos a", metroTime/2, { y:"0", x: "0" }, 0.05);
 //    .staggerTo("a.level-1", 2, { y:"0", x: "0" })
	// .staggerTo("a.level-2", 2, { y:"0", x: "0" })
	// .staggerTo("a.level-3", 2, { y:"0", x: "0" })
	// .staggerTo("a.level-4", 2, { y:"0", x: "0" })
	// .staggerTo("a.level-5", 2, { y:"0", x: "0" });




$(function() {








	$.getJSON("js/skills.json", function(data) {
	    var html = '';
	    var calcPercent = '';
	    $.each(data, function(key, value){

	    	// finds difference between experience % and its container div = applies it as a mask
	    	calcPercent = (100/value.experience)*100;

	        html += '<div class="element-item '+value.category+'">'; //data-category="'+value.category+'"
	        html += '	<div class="name"><p>'+value.name+'</p></div>';
	        html += '	<div class="barContainer">';
	        html += '		<div class="bar mastery"	data-mastery="'+value.mastery+'"	style="width:'+value.mastery+'%"></div>';
	        html += '		<div class="bar experience"	data-experience="'+value.experience+'"	style="width:'+value.experience+'%">';
	        html += '			<div class="experience-grad" style="width:'+calcPercent+'%"></div>';
	        html += '		</div>';
	        html += '		<div class="bar love" 		data-love="'+value.love+'"	style="width:'+value.love+'%"></div>';
	        html += '		<div class="comments"><p>'+value.comments+'</p></div>';
	        html += '	</div>';
	        html += '</div>';
	    });

		$('.grid.skills').html(html);
		
		startPage();
	});
});
/*
<div class="element-item javascript metal " data-category="javascript">
    <div class="name">Javascript</div>
    <div class="barContainer">
	    <div class="bar mastery">Hg</div>
	    <div class="bar experience">80</div>
	    <div class="bar love">200.59</div>
    </div>
  </div>
  */


    
function startPage(){

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

	var $grid_interactive = $('.grid.interactive').isotope({
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
  	  	stagger: 30,
  	  	animationEngine: 'css',
  	  	transitionDuration: '0.9s'
	});


var $skills = $('.grid.skills');
// init Isotope
var $grid_skills = $skills.isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  sortAscending: false,
  //stagger: 50,
  getSortData: {
    //name: '.name',
    //category: '.mastry parseInt',
   //category: '[data-category]',//
   // mastery: 	'.mastery parseInt' //'+' .experience parseInt '+' .love parseInt',
    //experience: '.experience',
    //love: 		'.love'
   experience: function( itemElem ) {
      var experience = $( itemElem ).find('.experience').data('experience');
      return parseFloat( experience );
    },
   mastery: function( itemElem ) {
      var mastery = $( itemElem ).find('.mastery').data('mastery');
      return parseFloat( mastery );
    },
   love: function( itemElem ) {
      var love = $( itemElem ).find('.love').data('love');
      return parseFloat( love );
    } 
  }
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
// var filterFns = {
//   // show if number is greater than 50
//   numberGreaterThan50: function() {
//     var number = $(this).find('.number').text();
//     return parseInt( number, 10 ) > 50;
//   },
//   // show if name ends with -ium
//   ium: function() {
//     var name = $(this).find('.name').text();
//     return name.match( /ium$/ );
//   }
// };

// bind filter button click
$('.interactive#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  //filterValue = filterFns[ filterValue ] || filterValue;
  $grid_interactive.isotope({ filter: filterValue });
});

// bind sort button click
// $('#sorts').on( 'click', 'button', function() {
//   var sortByValue = $(this).attr('data-sort-by');
//   $grid.isotope({ sortBy: sortByValue });
// });

// change is-checked class on buttons
$('.interactive.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});







// filter functions
// var filterFns = {
//   // show if number is greater than 50
//   numberGreaterThan50: function() {
//     var number = $(this).find('.mastery').text();
//     return parseInt( number, 10 ) > 100;
//   },
//   // show if name ends with -ium
//   ium: function() {
//     var name = $(this).find('.name').text();
//     return name.match( /ium$/ );
//   }
// };

// bind filter button click
$('.skills#filters').on( 'click', 'button', function() {
  $('.element-item').removeClass('big');
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  //filterValue = filterFns[ filterValue ] || filterValue;
  $grid_skills.isotope({ filter: filterValue });
});

// bind sort button click
$('.skills#sorts').on( 'click', 'button', function() {
  $('.element-item').removeClass('big');
  var sortByValue = $(this).attr('data-sort-by');
  console.log(sortByValue);
  $grid_skills.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.skills.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


$('.element-item').click(function(){
    var $this = $(this);
   //     tileStyle = $this.hasClass('big');// ? { width: 50, height: 50} : { width: 170, height: 110};
    if ($this.hasClass('big')) {
    	$this.removeClass('big');
    } else {
    	$('.element-item').removeClass('big');
    	$this.addClass('big');
	}
    //$this.find('.item-content').stop().animate( tileStyle );
    $skills.isotope('layout');
  });

	





};



