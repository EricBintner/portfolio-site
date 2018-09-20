



TweenLite.to('.carousel svg text', 1, { rotation: '-90', x: '33%', y: '50px'});



checkCloudSize( state2 );


// var fixedTouchScroll = document.getElementById('environment');
// fixedTouchScroll.addEventListener('touchmove', function(e) {
//     e.preventDefault();
// }, false);


var time = 1;
var metroTime = time/1.5; 
var navDelay;
var metroEase = Power1.easeInOut;
var metroEaseIn = Power1.easeIn;


// build HTML items before ISOTOPE init
$(function() {

	var htmls = '';
	var htmli = '';
	var htmlm = '';

	$.when(

		$.getJSON("js/skills.json", function(data) {
		    var calcPercent = '';
		    $.each(data, function(key, value){
		    	// finds difference between experience % and its container div = applies it as a mask
		    	calcPercent = (100/value.experience)*100;
		        htmls += '<div class="element-item '+value.category+'">'; //data-category="'+value.category+'"
		        htmls += '	<div class="name"><p>'+value.name+'</p></div>';
		        htmls += '	<div class="barContainer">';
		        htmls += '		<div class="bar mastery"	data-mastery="'+value.mastery+'"	style="width:'+value.mastery+'%"><p><span class="icon-graduate"></span>'+value.mastery+'%</p></div>';
		        htmls += '		<div class="bar experience"	data-experience="'+value.experience+'"	style="width:'+value.experience+'%">';
		        htmls += '			<div class="experience-grad" style="width:'+calcPercent+'%"><p style="margin-right: calc('+(-1*(value.experience - 100))+'% + 5px);"><span class="icon-briefcase"></span>'+value.experience+'%</p></div>';
		        htmls += '		</div>';
		        htmls += '		<div class="bar love" 		data-love="'+value.love+'"	style="width:'+value.love+'%"><p><span class="icon-heart"></span>'+value.love+'%</p></div>';
		        htmls += '		<div class="comments"><p>'+value.comments+'</p></div>';
		        htmls += '	</div>';
		        htmls += '</div>';
		    });
			$('.grid.skills').html(htmls);
		}),

		$.getJSON("js/interactive.json", function(data) {
			
			//var locationClass = '';
			//var locationText = '';
		    $.each(data, function(key, value){

		    var intTitle = value.title;
			var urlParam = intTitle.replace(/ /g,"_");

				htmli += '<div class="grid-item '+value.kind+' '+urlParam+' " data-url="'+value.url+'" data-iframesize="'+value.iframeSize+'" data-size="'+value.size+'" data-bgcolor="'+value.bgcolor+'" data-codepen="'+value.codepen+'" data-location="'+value.location+'" data-gotourl="'+value.gotourl+'"><div class="skewWrap">';
				htmli += '  <div class="imgWrap"><div class="imgContainer" style="background-image:url(\'img/interactive/' +value.img+ '\')"></div></div>';
				htmli += '	<div class="textContainer">';
				htmli += '	  <div class="textWrap">	';
				htmli += '		<p class="client"><span>'+value.client+'</span></p>';
				htmli += '		<p class="project">';
				htmli += '			<span class="title">'	+intTitle+'	</span>';
				htmli += '			<span class="description">'	+value.project+	'</span><span class="year">'+value.year+'</span>';
				htmli += '			<span class="tech">'	+value.tech+	'</span>';
				htmli += '		</p>';
				htmli += '	  </div>';
				htmli += '	</div>';
				htmli += '</div></div>';
		    });
			$('.grid.interactive').html(htmli);
		}),

		$.getJSON("js/motion.json", function(data) {
			
		    $.each(data, function(key, value){
		    	var vidTitle = value.title;
				var urlParam = vidTitle.replace(/ /g,"_");

				htmlm += '<div class="grid-item '+value.kind+' '+urlParam+' " data-video="'+value.url+'" data-pause="0" data-ratio="'+value.ratio+'"><div class="skewWrap">';
				htmlm += '  <div class="imgWrap"><div class="imgContainer" style="background-image:url(\'img/motion/' +value.img+ '\')"></div></div>';
				htmlm += '	<div class="textContainer">';
				htmlm += '	  <div class="textWrap">	';
				htmlm += '		<p class="client"><span>'	+value.client+	'</span></p>';
				htmlm += '		<p class="project">';
				htmlm += '			<span class="title">'	+vidTitle+'	</span>';
				htmlm += '			<span class="description">'	+value.project+	'</span><span class="year">'+value.year+'</span>';
				htmlm += '			<span class="tech">'	+value.tech+	'</span>';
				htmlm += '		</p>';
				htmlm += '	  </div>';
				htmlm += '	</div>';
				htmlm += '</div></div>';
		    });
			$('.grid.motion').html(htmlm);

		})
  	).then(function() {
	  	
		startPage();

  	});	


});






    
function startPage(){  

	// - - - - - - MAIN NAV ANIMATION / CLICK HANDLER - - - - - //
	var link 	= null;
	var oldLink = null;
	var speed 	= null;
	var yaxis 	= null;
	var easy 	= null;
	var linkName= null;
	var metroDelay = 0;

	var colorBorder;


	$('nav a').click(function() {
		var $this = $(this)

	 	yaxis = $this.data('yaxis');
	 	link  = $this.data('level');
	 	var color = "";

	 	// on page load, this fixes the lack of 'old link'
	 	if ( oldLink === null ) { 
			 oldLink = $('nav a.selected').data('level');
		}

	 	$('nav a').removeClass('selected');
	 	$this.addClass('selected no-click');
	 	//setTimeout(function(){ $('nav a').removeClass('no-click'); }, 500);
	 	

	 	color = $this.data('color');
	 	colorBorder = color;
	 	TweenLite.to('.navMobileShow', 1, { css:{borderColor: color}, ease: Power3.easeOut, overwrite:true })
	    TweenLite.to('nav .navLine', 1, { css:{backgroundColor: color}, ease: Power3.easeOut, overwrite:true });

	    // NEED TO REPLACE WITH CSS TRANSITIONS
	    TweenLite.to('nav a:not(.selected)', 0.5, { css:{borderColor: "#ffffff"}, ease: Power3.easeOut, overwrite:true });
	    TweenLite.to( $this, 1, { css:{borderColor: color}, ease: Power3.easeOut, overwrite:true });

	    //TweenLite.to('nav a:not(.selected) .subStop', 1, { css:{borderColor: '#ffffff'}, ease: Power3.easeOut, overwrite:true });
	    //TweenLite.to($(this).find('.subStop'), 1, { css:{borderColor: color}, ease: Power3.easeOut, overwrite:true });

	    
	    //if ( oldLink === null ) {
	    //     oldLink = link;
		//	}	
		if ( link === 0 ) {	linkName = null; $('body').addClass('level0'); }
		if ( link === 1 ) {	linkName = 'Skills'; }
		if ( link === 2 ) {	linkName = 'Interactive'; }
		if ( link === 3 ) {	linkName = 'Motion'; }
		if ( link === 4 ) {	linkName = 'Art'; }
		if ( link === 5 ) {	linkName = 'About'; }
		updateQueryStringParam( 'nav', linkName );

	

	    GenerateSpeed(link, oldLink, yaxis);
	    return false;
	});

	// Animation for 'levels' of site
	// Slows down duration for longer distance 
	// Slows down duration and changes ease for higher altitude going up!
 	function GenerateSpeed(link, oldLink, yaxis) {

//console.log(link, oldLink, yaxis);



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
	        //console.log("same");

	        	stopMotionVideo();
	        	backToMotionMain();
	        	backToInteractiveMain();

	        return false;
	    } //else
	    if ( difference(oldLink, link) == 1 ) {
	        speed = time*2;
	        easy  = Power3.easeInOut;
	        //console.log("DOWN");
	    } else
	    if ( difference2(oldLink, link) == 1 ) {
	        speed = time;
	        easy  = Power1.easeInOut;
	        if ( link >= 1 ){
	    		speed = 2 + (0.75*link);
	        	easy  = Power2.easeInOut;
	    	} 
	        //console.log("UP");
	    } //else

	    if ( difference(oldLink, link) == 2 ) {
	        speed = time*3;
	        easy  = Power3.easeInOut;
	    } else
	    if ( difference2(oldLink, link) == 2 ) {
	        speed = time*2;
	        easy  = Power1.easeInOut;
	        if ( link >= 2 ){
	    		speed = 3 + (0.75*link);
	        	easy  = Power2.easeInOut;
	    	} 
	    } //else



	    if ( difference(oldLink, link) == 3 ) {
	        speed = time*4;
	        easy  = Power3.easeInOut;
	    } else
	    if ( difference2(oldLink, link) == 3 ) {
	        speed = time*3;
	        easy  = Power1.easeInOut;
	        if ( link >= 3 ){
	    		speed = time*4 + (0.75*link);
	        	easy  = Power2.easeInOut;
	    	} 
	    } //else

	    if ( difference(oldLink, link) == 4 ) {
	        speed = time*5;
	        easy  = Power3.easeInOut;
	    } else
	    if ( difference2(oldLink, link) == 4 ) {
	        speed = time*4;
	        easy  = Power1.easeInOut;
	        if ( link >= 4 ){
	    		speed = time*5 + (0.75*link);
	        	easy  = Power2.easeInOut;
	    	} 
	    } //else

	    if ( difference(oldLink, link) == 5 ) {
	        speed = time*6;
	        easy  = Power3.easeInOut;
	    } else
	    if ( difference2(oldLink, link) == 5  ) {
	        speed = time*5;
	        easy  = Power1.easeInOut;
	        if ( link >= 4 ){
	    		speed = time*6 + (0.75*link);
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
	    metroClick(link, speed);
	}

	

	function metroClick(link, speed){
		//console.log("METROLINK, link = " + link);
		// If desktop NOT collapsed (default)
		metroDelay = 0;

		// If desktop and menu collapsed
		if ( window.matchMedia("(min-width: 600px)").matches  && link !== 0 ){
			metroDelay = 0;
			navDelay = metroDelay;
			//console.log('Desktop NOT Intro');
		} else if (window.matchMedia("(min-width: 600px)").matches  && link == 0) {
			metroDelay = 0;
			navDelay = metroDelay;
			//console.log('Desktop Intro');
		}
		else if ( window.matchMedia("(max-width: 599.9px)").matches || window.matchMedia("(max-height: 500px)").matches ) {
			var $nav = $('nav');
			// 	If menu open -- 	and --  Intro 		(do nothing, keep open)
			if (		$nav.hasClass('open') 	&& link === 0) {
				metroDelay = 0;
				navDelay = metroDelay;
				//console.log('Mobile, stay open to intro, (do nothing) '+ $nav.hasClass('open') + ' '+ link);
			}
			// 	If menu closed  -- 	and  -- NOT Intro 	(do nothing, keep closed)
			//else if (	$('.navPos a').css('color') === 'rgba(255,255,255,0)' 	&& link !== 0 ){
			else if (	!$nav.hasClass('open') 	&& link !== 0) {
				metroDelay = 0;
				navDelay = metroDelay;
				//console.log('Mobile, stay closed (do nothing) '+ $nav.hasClass('open') + ' '+ link);
			} 
			//   if menu closed -- 	and  --  Intro 	(WAIT, then open menu)
			//else if (	$('.navPos a').css('color') === 'rgba(255,255,255,0)' 	&& link === 0){
			else if (	!$nav.hasClass('open') 	&& link === 0){
				 //navAnimationMobileOpen(speed);
				 //console.log('Mobile, closed to Intro WAIT, then open) '+ $nav.hasClass('open') + ' '+ link);
			}
			//  If menu open  --  	and  --  NOT Intro (close menu)
			else {
				navAnimationMobile();
				navDelay = metroDelay;
				//console.log('Mobile, close menu '+ $nav.hasClass('open') + ' '+ link);
			}
		}

		 return metroDelay, link;
		 //TweenLite.to("#content", speed, { y: yaxis*10000, ease: easy }).delay(metroDelay);

	}


	function GoToLink(link, speed, yaxis, easy) {

		//metroClick(link);
		oldLink = link;

		// this ACTUAL GO TO animation currently inside metroClick() function
	    TweenLite.to("#content", speed, { y: yaxis*10000, ease: easy, onComplete: 
	    	function(){ 
	    		if (window.matchMedia("(max-width: 599.9px)").matches || window.matchMedia("(max-height: 500px)").matches ) {
					animateNav(speed, link);
	    		}
	    		//console.log(speed);
	    		$('nav a').removeClass('no-click');
	    	} 
	    }).delay(metroDelay);

	    if (link === 0 ) { play_level_0(speed); }
	    //if (link === 0 ) {$.when( play_level_0(speed) ).then( $('.grass').fadeIn(100) );
	    if (link === 1 ) { play_level_1(speed); }
	    if (link === 2 ) { play_level_2(speed); }
	    if (link === 3 ) { play_level_3(speed); }
	    if (link === 4 ) { play_level_4(speed); }
	    if (link === 5 ) { play_level_5(speed); }
		
		if (link !== 0 ) { 
			TweenMax.to('.intro-content', 0.6, {rotationX: 90}); 
			TweenMax.to('.welcomeContainer h1', 0.5, {opacity: 0}).delay(0.25);
		}
	    if (link !== 2 ) { backToInteractiveMainHidden(); }
	    if (link !== 3 ) { stopMotionVideo(); 			  }
	    //if (link !== 4 ) { clearAurora(); }
	};

	var level_0 = new TimelineLite();
	var level_1 = new TimelineLite();
	var level_2 = new TimelineLite();
	var level_3 = new TimelineLite();
	var level_4 = new TimelineLite();
	var level_5 = new TimelineLite();


// End Main NAV
	










	// - - - - - - ISOTOPE FILTERS / CLICK HANDLER - - - - - //






	// filter functions


	// init Isotope
	var $grid_skills = $('.grid.skills').isotope({
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
		  , initLayout: false
	});


	var $grid_interactive = $('.grid.interactive').isotope({
	  	itemSelector: '.grid-item',
	  	percentPosition: true,
	  	//layoutMode: 'fitColumns',
	  	//layoutMode: 'horiz',
	  	/*masonry: {
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
  	  	},*/
  	  	stagger: 30,
  	  	animationEngine: 'css',
  	  	transitionDuration: '0.9s'
  	  	, initLayout: false
	});


	var $grid_motion = $('.grid.motion').isotope({
	  	itemSelector: '.grid-item',
	  	percentPosition: true,
  	  	stagger: 30,
  	  	animationEngine: 'css',
  	  	transitionDuration: '0.9s'
  	  	, initLayout: false
	});














	//> SKILLS filter functions

	// bind filter button click
	//$('.skills#filters-s').on( 'click', 'button', function() {
	$('.skills#filters-s > button').on( 'click', function() {
	  $('.element-item').removeClass('big');
	  $('.element-item').css('margin-bottom', '');
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  //filterValue = filterFns[ filterValue ] || filterValue;
	  $grid_skills.isotope({ filter: filterValue });
	});

	//bind sort button click
	$('.skills#filters-s > #sorts').on( 'click', 'button', function() {
	  $('.element-item').removeClass('big');
	  $('.element-item').css('margin-bottom', '');
	  var sortByValue = $(this).attr('data-sort-by');
	  //console.log(sortByValue);
	  $grid_skills.isotope({ sortBy: sortByValue });
	});

	// change is-checked class on buttons
	// $('#filters-s.skills.button-group').each( function( i, buttonGroup ) {
	//   var $buttonGroup = $( buttonGroup );
	//   $buttonGroup.on( 'click', 'button', function() {
	//     $buttonGroup.find('.is-checked').removeClass('is-checked');
	//     $( this ).addClass('is-checked');
	//     console.log($( this ).html());
	//   });
	// });

	$('#filters-s.skills.button-group button').on( 'click', function() {
	  var $buttonGroup = $( this ).parent();
	  //$buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  //});
	});


	// $('.skills.button-group#filters-s button').on( 'click', function() {
	//     $( this ).parent().find('.is-checked').removeClass('is-checked');
	//     $( this ).addClass('is-checked');
	//   });

	//> skills details (.big)
	$('.element-item').click(function(){
	    var $this = $(this);
	    var commentHeight = $this.find('.comments').height();
	   //     tileStyle = $this.hasClass('big');// ? { width: 50, height: 50} : { width: 170, height: 110};
	    if ($this.hasClass('big')) {
	    	$this.removeClass('big');
	    	$this.css('margin-bottom','');
	    } else {
	    	$('.element-item').removeClass('big');
	  		$('.element-item').css('margin-bottom', '');
	    	$this.addClass('big');
	    	$this.css('margin-bottom', commentHeight+15);
		}
	    //$this.find('.item-content').stop().animate( tileStyle );
	    $grid_skills.isotope('layout');
	}); 
	 
	


	//> INTERACTIVE filter functions

	// bind filter button click
	$('.interactive#filters-i').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  //filterValue = filterFns[ filterValue ] || filterValue;
	  TweenMax.to('.place3D.stop2 .holder .gridContain', 0.9, {scrollTo:0, ease:Power2.easeOut});
	  $grid_interactive.isotope({ filter: filterValue });
	});

	// change is-checked class on buttons
	$('.interactive.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});



	//> MOTION filter functions

	$('.motion#filters-m').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  //filterValue = filterFns[ filterValue ] || filterValue;
	  TweenMax.to('.place3D.stop3 .holder .gridContain', 0.9, {scrollTo:0, ease:Power2.easeOut});
	  $grid_motion.isotope({ filter: filterValue });
	  

	});

	// change is-checked class on buttons
	$('.motion.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});








	//var titleInt = new TimelineLite({repeat: -1});
	var toTitle;
	var toTitleNub;
	var otherTitles;


	function animateNav(speed, link) {
		//var delayCalc =  (speed+0.75); 
			
		if (link === 0 && window.matchMedia("(max-width: 599.9px)").matches || 
			link === 0 && window.matchMedia("(max-height: 500px)").matches ) {

			navAnimationMobileOpen(1, link);
			//showGrass(speed);
			//console.log(link + " animateNav() = 0");
			//function openNavIntro(){
				//navAnimationMobileOpen(0) 
				//setTimeout(function(){ 
					//console.log(link);
				//}, speed*400);
				//TweenLite.to('.grass', 5, {onComplete: function(){  } });
				// setTimeout(function(){ 
				// 	TweenLite.to('.grass', 0.3, { css:{'display':'block','transform':'translateY(110vh)'}, ease: Power2.easeOut});//.delay(0.75);
				// }, speed*385);
			//}
//		} else if (link === 0 && window.matchMedia("(min-width: 600px)").matches )  {  

			//showGrass(speed);

			  //console.log(link);
			  //console.log(navDelay);
			  //TweenLite.to('.grass', 0, { opacity: 1, css:{ 'transform':'translateY(150vh)'}});
			  //function changeGrassState() {  
			  //TweenLite.to('.grass', 0.5, { css:{'display':'block','transform':'translateY(100vh)'}, overwrite:false, ease: Power2.easeOut}).delay(0);
			  //}
			  //TweenLite.to('nav .navLine.navLineMobile', 0.3, { css:{'top':''}, ease:Power1.easeOut, onComplete: function() { changeGrassState() } })
		} else {
			navAnimationMobile(1, link);
			//console.log(link + " animateNav() = 0");
		}

	}

	function play_level_0( speed ) {
		//console.log(" - - - level 0 - - - ");
		toTitleNub = "0";
		toTitle = "intro";

		play_title(toTitle, toTitleNub, speed);

		TweenMax.to('.welcomeContainer h1', 0.25, {opacity: 1}).delay(speed+1);
		var d;
		if (window.matchMedia("(max-width: 599.9px)").matches || window.matchMedia("(max-height: 500px)").matches ) {
			d = speed+1.75;
		} else {
			d = speed+1.25;
		}
		TweenMax.to('.intro-content', 1, {rotationX: 0}).delay(d);

		// $('.grass').delay(delayCalc).fadeIn(50).delay(100, 
		// 	function(){
		// 		navAnimationMobileOpen(0);
		// 	}
		// ); 
		//console.log(delayCalc);

	} 

	function play_level_1( speed ) {
		//console.log(" - - - level 1 - - - ");
		toTitleNub = "1";
		toTitle = "skills";

		skillsIsotope();

		play_title(toTitle, toTitleNub, speed);
		
		if (window.matchMedia("(max-width: 599.9px)").matches || window.matchMedia("(max-height: 500px)").matches ) {
			setTimeout(function(){ 
				$('body').removeClass('level0');
		 	}, 3000);
		}

		//TweenLite.from("#third .stop1 .lineGrid", speed, { y: -1000, ease: easy });
	}  

	function play_level_2( speed ) {
		//console.log(" - - - level 2 - - - ");
		toTitleNub = "2";
		toTitle = "interactive";

		interactiveIsotope();
		
		play_title(toTitle, toTitleNub, speed);

		if (window.matchMedia("(max-width: 599.9px)").matches || window.matchMedia("(max-height: 500px)").matches ) {
			setTimeout(function(){ 
				$('body').removeClass('level0');
		 	}, 2000);
		}

		//TweenLite.from("#third .stop2 .lineGrid", speed, { y: -1000, ease: easy });

	}  

	function play_level_3( speed ) {
		//console.log(" - - - level 3 - - - ");
		toTitleNub = "3";
		toTitle = "motion";

		motionIsotope();

		play_title(toTitle, toTitleNub, speed);
		//play_isotopeAnimationIn (toTitle, toTitleNub, speed);
		

		if ($('.place3D.stop3 .holder').hasClass('open')) {
			$("#currentVideo")[0].volume = 1;
		}
		if (window.matchMedia("(max-width: 599.9px)").matches || window.matchMedia("(max-height: 500px)").matches ) {
			setTimeout(function(){ 
				$('body').removeClass('level0');
		 	}, 2000);
		}

		//TweenLite.from("#third .stop3 .lineGrid", speed, { y: -1000, ease: easy });
	} 

	function play_level_4( speed ) {
		//console.log(" - - - level 4 - - - ");
		toTitleNub = "4";
		toTitle = "art";
		
		play_title(toTitle, toTitleNub, speed);

		//TweenLite.from("#third .stop4 .lineGrid", speed, { y: -1000, ease: easy });
		//if (!window.matchMedia("(max-width: 599.9px)").matches) {
		  //TweenLite.to('.moon', speed/6, { scale:0.65, ease: easy });
		//}
		if (window.matchMedia("(max-width: 599.9px)").matches || window.matchMedia("(max-height: 500px)").matches ) {
			setTimeout(function(){ 
				$('body').removeClass('level0');
		 	}, 2000);
		}
	} 

	function play_level_5( speed ) {
		//console.log(" - - - level 5 - - - ");
		toTitleNub = "5";
		toTitle = "credits";
		
		play_title(toTitle, toTitleNub, speed);

		
		//TweenLite.from("#third .stop5 .lineGrid", speed, { y: -1000, ease: easy });
		if (window.matchMedia("(max-width: 599.9px)").matches || window.matchMedia("(max-height: 500px)").matches ) {
			//TweenLite.to('.moon', 3, { scale:0.7, ease: easy }).delay(speed-3);

			setTimeout(function(){ 
				$('body').removeClass('level0');
		 	}, 2000);
		}
	} 

	

	function play_title(toTitle, toTitleNub, speed) {
		//
		//console.log("toTitleNub = " + toTitleNub  );
		//console.log("link = " + link );

		var otherTitles = [
			"svg.intro 		 line, svg.intro 	   polyline, svg.intro path", 		
			"svg.skills 	 line, svg.skills 	   polyline, svg.skills path", 		
			"svg.interactive line, svg.interactive polyline, svg.interactive path",
			"svg.motion 	 line, svg.motion 	   polyline, svg.motion path", 		
			"svg.art 		 line, svg.art 		   polyline, svg.art path", 			
			"svg.credits 	 line, svg.credits 	   polyline, svg.credits path"
		];
		
		otherTitles.splice(toTitleNub, 1);
//		console.log(otherTitles.toString());
		TweenMax.staggerTo( otherTitles.toString() , 0.10, { drawSVG:0, overwrite:true, delay: 0 }, -0.015);
		TweenMax.staggerTo('svg.' + toTitle + ' line, svg.' + toTitle + ' polyline, svg.' + toTitle + ' path',	0.125, { drawSVG:100, overwrite:false, delay: speed-0.2 	}, 0.035);
	
	//}



	//function play_isotopeAnimationIn (toTitle, toTitleNub, speed) {
		// var notTitles = [
		// 	".button-group.intro 	.button", 		
		// 	".button-group.skills 	.button", 		
		// 	".button-group.interactive .button",
		// 	".button-group.motion 	.button", 		
		// 	".button-group.art 		.button", 			
		// 	".button-group.credits 	.button"
		// ];

		// notTitles.splice(toTitleNub, 1);
		// console.log( notTitles.toString() );
		if (toTitle === 'credits'){
			TweenMax.to('.place3D.stop5 .scene', 1, {opacity: 1}).delay(speed);
			TweenMax.staggerTo('.button-group.carouselBtns button:not(.no)', 0.2, {opacity: 1, overwrite:false, delay: speed+0.75}, 0.05);
		} else {
			TweenMax.to('.place3D.stop5 .scene', 0, {opacity: 0}).delay(1);
	    	TweenMax.to('.button-group.carouselBtns button', 0, {opacity: 0}).delay(1);
		}


		// TweenMax.staggerTo( notTitles.toString() , 0.33, { opacity: 0, overwrite:true, delay: 0 }, -0.05);
		// TweenMax.staggerTo('.button-group.' + toTitle + " .button", 0.25, {opacity: 1, overwrite:false, delay: speed-0.3}, 0.1125);

		//console.log("toTitle = " + toTitle  );
		TweenMax.staggerTo('.button-group:not(.' + toTitle + ') button.button' , 0.33, { opacity: 0, overwrite:true }, -0.05);
		TweenMax.staggerTo('.button-group.' + toTitle + ' button.button', 0.33, {opacity: 1, overwrite:false, delay: speed+0.75}, 0.1125);

		//console.log('.button-group:not(.' + toTitle + ') button.button');
		//console.log('.button-group.' + toTitle + ' button.button');

		//> this is sloppy, needs fix:	
		TweenMax.staggerTo('.grid:not(.' + toTitle + ') .grid-item, .grid:not(.' + toTitle + ')  .element-item', 0.15, {opacity: 0, scale:0.9, overwrite:true}, 0.0125);
		TweenMax.staggerTo('.grid.'      + toTitle + '  .grid-item, .grid.'      + toTitle + '   .element-item', 0.5, {opacity: 1, scale:1, overwrite:false, delay: speed+0.3}, 0.05);



		//console.log('.grid:not(.' + toTitle + ') .grid-item, .grid:not(.' + toTitle + ')  .element-item');
		//console.log('.grid.'      + toTitle + '  .grid-item, .grid.'      + toTitle + '   .element-item');
	    
	}








			function makeInteractive($itemInt){
	    		$itemInt.addClass('selected');

			    var source 		= $itemInt.data('url');
			    var iSize 		= $itemInt.data('iframesize');
			    var size 		= $itemInt.data('size');
			    var bgcolor 	= $itemInt.data('bgcolor');
			    var target 		= $itemInt.data('location');
			    var ifCodepen 	= $itemInt.data('codepen');
				var intTitle 	= $itemInt.find('p.project .title').text();
				var gotourl 	= $itemInt.data('gotourl');
				//var urlParam = vidTitle.replace(/ /g,"_");

				//console.log($itemInt.data('location'));

			    //> adds url data to new video player
			    $('.place3D.stop3 .holder .fromTop .interactive-content').empty();

				var int = '';

			    if (ifCodepen === 'codepen') {
			        //int  += '<p data-height="440" data-slug-hash="qVGmXW" data-default-tab="result" data-user="EricBintner" data-embed-version="2" data-pen-title="D3 : 11% Animation" class="codepen">See the Pen <a href="https://codepen.io/EricBintner/pen/qVGmXW/">D3 : 11% Animation</a></p>';
					int += '	<div id="iContainer" class="interactive-container codepen   ' + size + '" >';
			        int += '		<p data-height="324" data-slug-hash="'+source+'" data-default-tab="result" data-user="EricBintner" data-embed-version="2" data-pen-title="Code Test V2" class="codepen"><span class="showCP" style="display:none">See the Pen <a href="https://codepen.io/EricBintner/pen/'+source+'/">Code Test V2</a> by Eric (<a href="https://codepen.io/EricBintner">@EricBintner</a>) on <a href="https://codepen.io">CodePen</a>.</span></p>';
					int += '		<script async src="https://static.codepen.io/assets/embed/ei.js"></script>';
					int += '	</div>';
					int += '	<div class="interactive-info codepen" >';
					int += '		<div class="client"><p><span>' 		+ $itemInt.find('p.client span').text()   + 		 '</span></p><p class="year hideDesktop">' + $itemInt.find('span.year').text() + '</p></div>';
					int += '		<div class="title"><p><span>' 		+ intTitle + 		 '</span></p></div>';
					int += '		<div class="year hideMobile"><p><span>'+ $itemInt.find('span.year').text() + 		  	 '</span></p></div>';
					int += '		<div class="description"><p><span>' + $itemInt.find('p.project .description').text() +'</span></p></div>';
					int += '		<div class="tech"><p><span>' 		+ $itemInt.find('p.project .tech').text() + 		 '</span></p></div>';
					int += '	</div>';

			    } else {
			    	int += '	<div id="iContainer" class="interactive-container   ' + size + '    " style="background:'+bgcolor+'">';
					int += '		<div class="control"><a class="reloadBtn"><span>replay</span><svg x="0px" y="0px" viewBox="0 0 430 430"><path class="reload" d="M387.1,218.5c-0.1,7.1-0.6,14.3-1.5,21.5c-12.6,94.4-99.3,160.8-193.7,148.3S31,288.9,43.6,194.5 S142.9,33.7,237.3,46.2c46.3,6.2,85.9,30.1,112.7,64.1 M259.9,120.3l90.1-9.9L340.7,19"/></svg></a></div>';
					if (target === '_blank') {
						int += '		<a class="controlTab" href="'+gotourl+'" target="_blank"><div class="newTabBtn"><span>open&nbsp;in new&nbsp;tab</span><svg x="0px" y="0px" viewBox="0 0 430 430"><path class="newTab arrow" d="M387.1,218.5v159.2c0,6.6-5.4,12-12,12h-321c-6.6,0-12-5.4-12-12v-321c0-6.6,5.4-12,12-12h160.5"/><g><line class="newTab" x1="407.1" y1="24.7" x2="214.6" y2="217.2"/><polyline class="newTab" points="304,24.7 407.1,24.7 407.1,121 	"/></g></svg></div></a>'; 
					}
					int += '		<div class="ibox"><iframe class="iiframe '+iSize+'" src="'+source+'"></iframe></div>';
					int += '	</div>';
					int += '	<div class="interactive-info" >';
					int += '		<div class="client"><p><span>' 		+ $itemInt.find('p.client span').text()   + 		 '</span></p><p class="year hideDesktop">' + $itemInt.find('span.year').text() + '</p></div>';
					int += '		<div class="title"><p><span>' 		+ intTitle + 		 '</span></p></div>';
					int += '		<div class="year hideMobile"><p><span>'+ $itemInt.find('span.year').text() + 		  	 '</span></p></div>';
					int += '		<div class="description"><p><span>' + $itemInt.find('p.project .description').text() +'</span></p></div>';
					int += '		<div class="tech"><p><span>' 		+ $itemInt.find('p.project .tech').text() + 		 '</span></p></div>';
					int += '	</div>';
			    	
			    }

			    
				
				$('.place3D.stop2 .holder .fromTop .interactive-content').html(int);	
				// if (ifCodepen === 'codepen') {
				// 	$(".holder.interactiveHolder .videoBox .interactive-content .interactive-info").css('max-height','700px');
				// 	$(".holder.interactiveHolder .videoBox .interactive-content #iContainer").css('max-width','800px');
				// 	$(".holder.interactiveHolder .videoBox .interactive-content #iContainer iframe").css('max-height','700px');
				// // 	heightWidth(700, 800);
				// // 	$('#iContainer').css('max-height':'700px');
				// }
			}



	    	function makeVideo($item){
	    		$item.addClass('selected');

			    var source 	= $item.data('video');
				var vidTitle = $item.find('p.project .title').text();
				//var urlParam = vidTitle.replace(/ /g,"_");

			    //> adds url data to new video player
			    $('.place3D.stop3 .holder .fromTop .video-content').empty();
			    //$('.place3D.stop3 .holder .fromTop video source').attr('src', $(this).data('video') + '.mp4')
			    var vid = '';

			    	vid += '	<div id="vContainer" class="video-container   ' + $item.data('ratio') + '    " >';
					//vid += '		<video id="currentVideo" controls="controls" autoplay="" autobuffer="">';
					//vid += '			<source src="' + source + '.webm" type="video/webm">';
					//vid += '			<source src="' + source + '.ogv" type="video/ogv">';
					//vid += '			<source src="' + source + '.mp4" type="video/mp4">';
					//vid += '		</video>';
					vid += '	</div>';
					vid += '	<div class="video-info" >';
					vid += '		<div class="client"><p><span>' 		+ $item.find('p.client span').text()   + 		 '</span></p><p class="year hideDesktop">' + $(this).find('span.year').text() + '</p></div>';
					vid += '		<div class="title"><p><span>' 		+ vidTitle + 		 '</span></p></div>';
					vid += '		<div class="year hideMobile"><p><span>'+ $item.find('span.year').text() + 		  	 '</span></p></div>';
					vid += '		<div class="description"><p><span>' + $item.find('p.project .description').text() +'</span></p></div>';
					vid += '		<div class="tech"><p><span>' 		+ $item.find('p.project .tech').text() + 		 '</span></p></div>';
					vid += '	</div>';

				$('.place3D.stop3 .holder .fromTop .video-content').html(vid);	

				var pause = $item.data('pause');
 				
 				//> build html5 video
				var vContainer = document.getElementById("vContainer");
				var v = document.createElement("video");
				    v.id = 'currentVideo';

			    if (v.canPlayType("video/mp4")) {
			        v.setAttribute("src", source + ".mp4");
			    } else {
			        v.setAttribute("src", source + ".ogg");
			    }
				    v.setAttribute("controls", "controls");
				    
				    //v.setAttribute("autoplay", "autoplay");
				if (window.innerWidth > 600 || window.innerHeight > 500) {
			        v.setAttribute("autoplay", "autoplay");
			    } else {
			    	v.setAttribute("autoplay", "false");
			    }
				    v.setAttribute("autobuffer", "autobuffer");
				    vContainer.appendChild(v);

			    playVid(pause);

			    //document.getElementById("currentVideo").currentTime(pause);
			    //setTimeout(function(){
			 //    $(window).bind("load", function() {
				//     document.getElementById('currentVideo').addEventListener('loadedmetadata', function() {
				// 	      $("#currentVideo")[0].volume = 0;
				// 		  this.currentTime = pause;
				// 		  $("#currentVideo").animate({volume: 1}, 490);
				// 		  //openMotionItem();
				// 		  //setTimeout(function(){
				// 		  //	$("#currentVideo").trigger('resize');
				// 		  //	alert('2sec delay');
				// 		  //}, 4000);
				// 	}, false);
				// //}, 10);
				// });
				
				//
				// var vidLoad = document.getElementById('currentVideo');
				// vidLoad.load();
				// //$(".video-container").css('max-width','99.9%');
				// setTimeout(function(){
				// 	//$(".video-container").css('max-width','');
				// 	vidLoad.play();
				// }, 500);
			}

			function playVid(pause){
					var vidInstance = document.getElementById('currentVideo')
					vidInstance.addEventListener('loadedmetadata', function() {

					      $("#currentVideo")[0].volume = 0;
						  this.currentTime = pause;
						  //this.controls = true;
						  $("#currentVideo").animate({volume: 1}, 490);

					}, false);
					// if ( window.matchMedia("(max-width: 599.9px)").matches ) { 
						
					// 	// vidInstance.addEventListener('ended', function() {
					// 	// 	viewportFix();
					// 	// }, false);
					// 	vidInstance.onended = function() {
					// 		$("body").addClass('videoed');
					// 		viewportFix(0); 
					// 		document.body.scrollTop = -1; 
					// 		// TweenMax.to(window, 0.25, {scrollTo: 1, onComplete: function(){ 
					// 		// 	viewportFix(0); 
					// 		// 	document.body.scrollTop = -1; 
					// 		// }}).delay(0.25);
					// 	};
						
						
					// 	vidInstance.onpause = function() {
					// 		//console.log('PAUSED???');

					// 		//TweenMax.to(window, 0.5, {scrollTo: 0, onComplete: function(){ viewportFix(500); document.body.scrollTop = -1; }}).delay(1);
					// 		// TweenMax.to(window, 0.25, {scrollTo: 100, onComplete: function(){ 
					// 		$("body").addClass('videoed');
					// 		viewportFix(0); 
					// 		document.body.scrollTop = -1; 
					// 		// }}).delay(0.25);

					// 	};


					// }
			}



			// function fixView(){
			// 		TweenMax.to(window, 0.15, {scrollTo: 1, onComplete: function(){ 
			// 					viewportFix(0); 
			// 					document.body.scrollTop = -1; 
			// 		}}).delay(0.15);
			// }







		function closeMotionItem(){
	    	stopMotionVideo();
	        backToMotionMain();
		}
		function openMotionItem(){ 
			TweenMax.to('.place3D.stop3 .holder', 0.5, {className:"+=open"}).delay(0.25);
	    	
	    	TweenMax.staggerTo('#filters-m button', 2, {x: 2000, overwrite:true, ease:Power3.easeOut}, -0.09);
	    	TweenMax.staggerTo('.grid.motion .grid-item:not(.selected)', 0.35, {opacity: 0, scale:0.9, overwrite:true}, 0.0125);
	    	TweenMax.staggerFrom('.video-info p', 0.666,  {x: 20, overwrite:false, ease:Back.easeOut, delay: 0.5}, 0.05);
	    	TweenMax.staggerFrom('.video-info p', 0.333, {opacity: 0, overwrite:false, delay: 0.5}, 0.05);

	    	TweenMax.fromTo('a.motion.closeBtn', 0.25, {opacity: 0, x: -40}, {opacity: 1, x: 0}).delay(0.9);
	    	TweenMax.to('a.motion.closeBtn', 0, {className:"-=hidden"}).delay(1.15);
		}	
		function openMotionItemInstant(){ 
			TweenMax.to('.place3D.stop3 .holder', 0, {className:"+=open"});
	    	
	    	TweenMax.staggerTo('#filters-m button', 0, {x: 2000, overwrite:true, ease:Power3.easeOut}, 0);
	    	TweenMax.staggerTo('.grid.motion .grid-item:not(.selected)', 0, {opacity: 0, scale:0.9, overwrite:true}, 0.0125);
	    	TweenMax.staggerFrom('.video-info p', 0.666,  {x: 20, overwrite:false, ease:Back.easeOut, delay: 1.5}, 0.05);
	    	TweenMax.staggerFrom('.video-info p', 0.333, {opacity: 0, overwrite:false, delay: 1.5}, 0.05);

	    	TweenMax.fromTo('a.motion.closeBtn', 0.25, {opacity: 0, x: -40}, {opacity: 1, x: 0}).delay(1.9);
	    	TweenMax.to('a.motion.closeBtn', 0, {className:"-=hidden"}).delay(2.15);
		}	     

		function stopMotionVideo(){
			if ($('.place3D.stop3 .holder').hasClass('open')) {
				updateQueryStringParam( 'work', '');
		        var pause = document.getElementById("currentVideo").currentTime;
			    $('.grid.motion .grid-item.selected').data('pause', pause);
			    $("#currentVideo").animate({volume: 0}, 900);
			    setTimeout(function(){ 
			    	document.getElementById('currentVideo').pause();
			    }, 750);
			}
		}
		function backToMotionMain(){			    
		        $('.place3D.stop3 .holder').removeClass('open');
	  			TweenMax.staggerTo('#filters-m button', 0.75, {x: 0, opacity: 1, overwrite:true}, 0.1);
				TweenMax.staggerTo('.grid.motion .grid-item:not(.selected)', 0.15, {opacity: 1, scale:1, overwrite:true, delay: 0.5}, 0.0125);
				 
				TweenMax.to('a.motion.closeBtn', 0.05, {opacity: 0, x: -60});
				TweenMax.to('a.motion.closeBtn', 0, {className:"+=hidden"}).delay(0.05);
				updateQueryStringParam( 'work', '');
		}








	//> Motion Grid CLick Handlers
//	$('.motion .grid-item').dblclick( function(e){
//    	e.preventDefault();
//  	});
	$('.motion .grid-item').click( function(){
	    var $item 	= $(this);

	    if ( $item.hasClass('selected') ) { 
	    //> don't swap video if already selected
	    	$("#currentVideo")[0].volume = 0;
	    	setTimeout(function(){ 
	    		document.getElementById('currentVideo').play();
	    		$("#currentVideo").animate({volume: 1}, 1000);
	    	}, 250);
	    	
	    	openMotionItem();

		} else {
		//> swap video urls
	    	$('.grid.motion .grid-item').removeClass('selected');
			makeVideo($item);
			var vidTitle = $item.find('p.project .title').text();
			var urlParam = vidTitle.replace(/ /g,"_");
			updateQueryStringParam( 'work', urlParam );
			openMotionItem();
		}
	    
	});


	$('.motion.closeBtn').click( function(){
		if ($('.place3D.stop3 .holder').hasClass('open')) { 
	    	closeMotionItem();
	    }
	});











	function closeInteractiveItem(){
	    	//stopMotionVideo();
	        backToInteractiveMain();
	}


 	function openInteractiveItem(){ 
			TweenMax.to('.place3D.stop2 .holder', 0.5, {className:"+=open"}).delay(0.25);
	    	
	    	TweenMax.staggerTo('#filters-i button', 2, {x: 2000, overwrite:true, ease:Power3.easeOut}, -0.09);
	    	TweenMax.staggerTo('.grid.interactive .grid-item:not(.selected)', 0.35, {opacity: 0, scale:0.9, overwrite:true}, 0.0125);
	    	TweenMax.staggerFrom('.interactive-info p', 0.666,  {x: 20, overwrite:false, ease:Back.easeOut, delay: 0.5}, 0.05);
	    	TweenMax.staggerFrom('.interactive-info p', 0.333, {opacity: 0, overwrite:false, delay: 0.5}, 0.05);

	    	TweenMax.fromTo('a.interactive.closeBtn', 0.25, {opacity: 0, x: -40}, {opacity: 1, x: 0}).delay(0.9);
	    	TweenMax.to('a.interactive.closeBtn', 0, {className:"-=hidden"}).delay(1.15);
	    	reloadiframe();
	}
	// function storeInteractive(){
	// 		if ($('.place3D.stop2 .holder').hasClass('open')) {
	// 			//$('.interactive-content .interactive-container .ibox').empty();
	// 			var $iframeContainer = $('.interactive-content .interactive-container .ibox');
	// 			var  iframe = $iframeContainer.html();
	// 			$iframeContainer.empty();
	// 			return iframe;
	// 		}
	// }
	function backToInteractiveMain(){			    
		        $('.place3D.stop2 .holder').removeClass('open');
	  			TweenMax.staggerTo('#filters-i button', 0.75, {x: 0, opacity: 1, overwrite:true}, 0.1);
				TweenMax.staggerTo('.grid.interactive .grid-item:not(.selected)', 0.15, {opacity: 1, scale:1, overwrite:true, delay: 0.5}, 0.0125);
				 
				TweenMax.to('a.interactive.closeBtn', 0.05, {opacity: 0, x: -60});
				TweenMax.to('a.interactive.closeBtn', 0, {className:"+=hidden"}).delay(0.05);
				updateQueryStringParam( 'work', '');

				$('.interactive-content .interactive-container .ibox').empty();
	}
	function backToInteractiveMainHidden(){			    
		    if ($('.place3D.stop2 .holder').hasClass('open')) {
		        updateQueryStringParam( 'work', '');
		        setTimeout(function(){  
			        $('.place3D.stop2 .holder').removeClass('open');
		  			TweenMax.staggerTo('#filters-i button', 0, {x: 0, overwrite:true}, 0);
					TweenMax.staggerTo('.grid.interactive .grid-item', 0.15, {opacity: 0, scale:0.9, overwrite:true, delay: 0}, 0);
					 
					TweenMax.to('a.interactive.closeBtn', 0, {opacity: 0, x: -60});
					TweenMax.to('a.interactive.closeBtn', 0, {className:"+=hidden"}).delay(0);
					$('.interactive-content .interactive-container .ibox').empty();
				}, 700);
		    }
	}




	$('.interactive .grid-item').click( 	  function(){
	    var $itemInt 	= $(this);

	 	// if ( $itemInt.hasClass('selected') ) { 
	 	//
	 	//    	openInteractiveItem();
	 	//
		// } else {
		//> swap video urls
	    	$('.grid.interactive .grid-item').removeClass('selected');
			makeInteractive($itemInt);
			var intTitle = $itemInt.find('p.project .title').text();
			var urlParam = intTitle.replace(/ /g,"_");
			updateQueryStringParam( 'work', urlParam );
			openInteractiveItem();
		//}
	    
	});



	$('.interactive.closeBtn').click(function(){
		if ($('.place3D.stop2 .holder').hasClass('open')) { 
	    	closeInteractiveItem();
	    }
	});












	var metroTL   = new TimelineLite();



	// function metroAnimation() {
	// 	//console.log("metroAnimation()")
	// 	//if (metroTime === null ) { metroTime == 0; }

	//  metroTL.to("svg#metro #dark-blue", 	metroTime, 	 { drawSVG: "100% 100%", ease: metroEase })
	// 		.to("svg#metro #dark-blue", 	metroTime/4, { opacity: 0 }, "-="+metroTime/4)
	// 		.to("svg#metro #blue", 			metroTime,   { drawSVG: "85% 85%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #blue", 			metroTime/4, { opacity: 0 }, "-="+metroTime/4)
	// 		.to("svg#metro #green", 		metroTime,   { drawSVG: "0% 0%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #green", 		metroTime/4, { opacity: 0 }, "-="+metroTime/4)
	// 		.to("svg#metro #blue-green", 	metroTime,   { drawSVG: "62% 62%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #blue-green", 	metroTime/4, { opacity: 0 }, "-="+metroTime/4)
	// 		.to("svg#metro #dark-green", 	metroTime,   { drawSVG: "50% 50%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #dark-green", 	metroTime/4, { opacity: 0 }, "-="+metroTime/4)
	// 		.to("svg#metro #orange", 		metroTime,   { drawSVG: "59% 59%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #orange", 		metroTime/4, { opacity: 0 }, "-="+metroTime/4)
	// 		.to("svg#metro #purple", 		metroTime,   { drawSVG: "82% 82%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #purple", 		metroTime/4, { opacity: 0 }, "-="+metroTime/4)
	// 		.to("svg#metro #yellow", 		metroTime,   { drawSVG: "100% 100%", ease: metroEase },	"-="+metroTime )
	// 		.to("svg#metro #yellow", 		metroTime/4, { opacity: 0 }, "-="+metroTime/4)
	// 		.to("svg#metro #grey", 			metroTime,   { drawSVG: "57% 57%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #grey", 			metroTime/4, { opacity: 0 }, "-="+metroTime/4)
	// 		.to("svg#metro rect", 			metroTime/4,   { opacity: 0, scaleX: 0, x: "50%", ease: metroEase }, 	"-="+metroTime/4 )
	// 		.to("svg#metro", 				0, 	 { className:"-=show" }, 	"+="+metroTime );
	// }
	// //.delay(navDelay)
	// function metroAnimationOpen(navDelay) {
	// 	mapOpenDelay = (navDelay*1000) - 200;
	// 	//metroTime = metroTime*2;
	// 	setTimeout(function(){  
	//  metroTL.to("svg#metro", 				0, 	 { className:"+=show" })
	//  		.to("svg#metro #dark-blue", 	metroTime, 	 { drawSVG: "0% 100%", ease: metroEase })
	// 		.to("svg#metro #dark-blue", 	metroTime/2, { opacity: 1, ease: metroEaseIn }, "-="+metroTime/2)
	// 		.to("svg#metro #blue", 			metroTime,   { drawSVG: "0% 100%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #blue", 			metroTime/2, { opacity: 1, ease: metroEaseIn }, "-="+metroTime/2)
	// 		.to("svg#metro #green", 		metroTime,   { drawSVG: "0% 100%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #green", 		metroTime/2, { opacity: 1, ease: metroEaseIn }, "-="+metroTime/2)
	// 		.to("svg#metro #blue-green", 	metroTime,   { drawSVG: "0% 100%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #blue-green", 	metroTime/2, { opacity: 1, ease: metroEaseIn }, "-="+metroTime/2)
	// 		.to("svg#metro #dark-green", 	metroTime,   { drawSVG: "0% 100%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #dark-green", 	metroTime/2, { opacity: 1, ease: metroEaseIn }, "-="+metroTime/2)
	// 		.to("svg#metro #orange", 		metroTime,   { drawSVG: "0% 100%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #orange", 		metroTime/2, { opacity: 1, ease: metroEaseIn }, "-="+metroTime/2)
	// 		.to("svg#metro #purple", 		metroTime,   { drawSVG: "0% 100%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #purple", 		metroTime/2, { opacity: 1, ease: metroEaseIn }, "-="+metroTime/2)
	// 		.to("svg#metro #yellow", 		metroTime,   { drawSVG: "0% 100%", ease: metroEase },	"-="+metroTime )
	// 		.to("svg#metro #yellow", 		metroTime/2, { opacity: 1, ease: metroEaseIn }, "-="+metroTime/2)
	// 		.to("svg#metro #grey", 			metroTime,   { drawSVG: "0% 100%", ease: metroEase }, 	"-="+metroTime )
	// 		.to("svg#metro #grey", 			metroTime/2, { opacity: 1, ease: metroEaseIn }, "-="+metroTime/2)
	// 		.to("svg#metro rect", 			metroTime/4, { opacity: 1, scaleX: 1, x: "0%", ease: metroEase }, 	"-="+metroTime/2 );
	// 	}, mapOpenDelay );
	// }




	function navIsClosed(){
	  //var tl = new TimelineLite({repeat: -1});

	  TweenLite.to(".navPos a", 0, { className:"-=show" });
	  //tl.staggerTo(".navPos a", 0, { y:"0", x:"0" }, 0);
	  //TweenLite.to('.navPos a', 0, { 'border-width' : '0px', 'padding': '9px'});
	}

	function navAnimation(navDelay, link){
		// if ( navDelay === undefined ) {
		//      navDelay = metroTime;
		// }
	 //  var tl = new TimelineLite({repeat: -1});
		
	 //  tl.delay(navDelay).staggerTo(".navPos a", metroTime/2, { className:"-=show" }, 0.05);
	  //TweenLite.to('.navPos a', metroTime/4, { 'border-width' : '0px', 'padding': '9px'}).delay(navDelay);

	  if (link === 0 ) {  
	  	navAnimationMobileOpen(0, 0)
	  } else {
	  	navAnimationMobile(0, link)
	  }

	}

	function navAnimationOpen(navDelay){
	    //console.log("navAnimationOpen = " + navDelay);
	    
	//    TweenLite.to(".navPos a", metroTime/3, { className:"+=show" }).delay(navDelay);
	}


/*
	function navAnimationMobile(navDelay) {
	  var setNav = new TimelineLite({repeat: -1});
	  var subPlace = '-42';
	  //var titlePlace = 'calc(-2px + 3.7vh)';
	  var titlePlace = 'calc(-2px + 3.7vh)'

	  if (window.matchMedia("(orientation: landscape)").matches) { 
	  		subPlace = '-29';  
	  		titlePlace = '0'//titlePlace = 'calc(-47px + 3.7vh)';
	  }
	  //console.log(window.matchMedia("(orientation: landscape)").matches);

	  console.log('navAnimationMobile('+navDelay+')');

	  setNav.staggerTo('.navPos a .subStop', 0.5, { x: subPlace, y: '18', height: '', width: '', right: '', top: '', borderWidth: '', ease: metroEase}, 0.05);
	  TweenLite.to('.navPos a', 0.1, { 'background-color' :'rgba(255,255,255,0)' , 'color' :'rgba(255,255,255,0)'});
	  //TweenLite.to('.navPos a', 0, { className:"-=aOpen" });
	  //var setNavClosed = new TimelineLite({repeat: -1});
	  //setNavClosed.staggerTo(".navPos a", 0.5, { className:"-=aOpen" }, 0.05);
	  
	  TweenLite.to('.navPos  ', metroTime, { y:'25px', yoyo:true });
	  //TweenLite.to('nav .navLine.navLineMobile', 0.5, { css:{'top':'16px', 'right':'calc(35px - 24vh)'}, ease:metroEase });
	  TweenLite.to('nav .navLine.navLineMobile', 0.5, { y:'43', ease:metroEase });

	  //TweenLite.to('.mainTitle .background', metroTime, { backgroundColor: 'rgb(34,34,85, 0.80)'});//.delay(navDelay);
	  //TweenLite.to('.mainTitle', 0.45, { css:{'bottom': titlePlace }, ease:metroEase });
	  TweenLite.to('.mainTitle', 0.45, { y:titlePlace , ease:metroEase });
	 
//right: calc(35px - 24vh);
//    top: calc(70px + 2vh);

	  TweenMax.to('body', 0, {className:"-=navOpen"});
	  TweenMax.to('nav', 0, {className:"-=open"}).delay(0.1);
	  //logoText = "       E B                                                                 .";
 	  if (window.matchMedia("(orientation: portrait)").matches) { 
 	  	logoText = "       E B                                                                 .";
 	  } else {
 	  	logoText = "E  R  I  C  B  I  N  T  N  E  R  .  C  O  M";
 	  }

	}



	function navAnimationMobileOpen(navDelay, link) {
	  navDelayFrac = navDelay + 0.225;
	  //var subPlace = '-42';
	  //if (window.matchMedia("(orientation: landscape)")) { subPlace = -29 }
	  //var titlePlace = '-115px'

	  //if (window.matchMedia("(orientation: landscape)").matches) { 
	  		//subPlace = '-29';  
	  		//titlePlace = '0'//titlePlace = 'calc(-47px + 3.7vh)';
	  //}

	  var setNavOpen = new TimelineLite({repeat: -1});
	  setNavOpen.staggerTo('.navPos a .subStop', 0.35, { x: '0', y: '0', height: '40px', width: '40px', right: '-26px', 
	  	top: '-8px', borderWidth: '15px', ease: metroEase}, 0.025);
	  //setNavOpen.staggerTo('.navPos a .subStop', 0.35, { x: '0', y: '0', height: '40px', width: '40px', right: '-26px', 
	  //	top: '-8px', borderWidth: '15px', ease: metroEase, delay: navDelay}, 0.025);

	  var setNavOpen2 = new TimelineLite({repeat: -1});
	  setNavOpen2.delay(navDelayFrac).staggerTo('.navPos a', 0.2, { 'background-color' :'rgba(255,255,255,1)' , 'color' :'#222'}, 0.025);
	  //setNavOpen2.staggerTo('.navPos a', 0, {className:"+=aOpen"}, 0.025);
	  //setNavOpen.staggerTo(".navPos a", metroTime/2, { className:"+=show" }, 0.05);
 		//'background-color' :'rgba(255,255,255,1)' , 'color' :'#222'

	  TweenLite.to('.navPos  ', 0.3, { y:'0'}).delay(navDelay);

	  //TweenLite.to('.mainTitle .background', metroTime, { backgroundColor: 'rgba(250, 250, 250, 0.80)' }).delay(navDelay);
	  //TweenLite.to('.mainTitle', 0.3, { css:{'bottom':'135px'}, ease:Power1.easeOut });
	  TweenLite.to('.mainTitle', 0.3, { y:'-115px', ease:Power1.easeOut });
	  TweenMax.to('body', 0, {className:"+=navOpen"}).delay(navDelay);
	  TweenMax.to('nav', 0, {className:"+=open"}).delay(navDelay);

	  if (link === 0 ) {  
	  	//TweenLite.to('.grass', 0, { opacity: 1, css:{ 'transform':'translateY(170vh)'}});
	  	showGrass(speed);
	  }

	  function changeNavState() {
	  	//TweenLite.to('.mainTitle', 0, { css:{'width':''} }).delay(0.1);
	  	//TweenLite.to('.mainTitle canvas',  0, { css:{'width':''} }).delay(0.1);
	  	logoText = "E  R  I  C  B  I  N  T  N  E  R  .  C  O  M";
	  	if (link === 0 ) {  
	  		//TweenLite.to('.grass', 0.5, { css:{'display':'block','transform':'translateY(110vh)'}, ease: Power2.easeOut}).delay(0.05);
	  	}
	  }
	  
	  //TweenLite.to('nav .navLine', 0.35, { css:{'top':'', 'right':''}, ease:Power3.easeIn, onComplete: function() { changeNavState() } }).delay(navDelay);
	  //TweenLite.to('nav .navLine.navLineMobile', 0.3, { css:{'top':''}, ease:Power1.easeOut, onComplete: function() { changeNavState() } }).delay(navDelay);
	  TweenLite.to('nav .navLine.navLineMobile', 0.3, { y: '', ease:Power1.easeOut, onComplete: function() { changeNavState() } }).delay(navDelay);

	}*/




function navAnimationMobile(navDelay) {
	  var setNav = new TimelineLite({repeat: -1});

	  var vh = window.innerHeight/100;
	  var subPlace = '-42';
	  //var titlePlace = 'calc(-2px + 3.7vh)';
	  var linePlace = '43';
	  var titlePlace = '0';

	  if (window.matchMedia("(orientation: landscape)").matches) { 
	  		subPlace = -1*(14+(5*vh));//'-29';  
	  		//linePlace = 17.5+(6.5*vh);
	  		linePlace = 5+(8.5*vh);
	  		titlePlace = -1*(3+(1*vh)); //'-12'
	  		//titlePlace = 'calc(-47px + 3.7vh)';
	  }

	  //console.log('navAnimationMobile('+navDelay+')');

	  setNav.staggerTo('.navPos a .subStop', 0.5, { x: subPlace, y: '18', height: '', width: '', right: '', top: '', borderWidth: '', ease: metroEase}, 0.05);
	  TweenLite.to('.navPos a', 0.1, { 'background-color' :'rgba(255,255,255,0)' , 'color' :'rgba(255,255,255,0)'});
	  
	  var colorBorder = $('nav a.selected').data('color');
	  //TweenMax.fromTo('.navMobileShow', 0.5, { opacity:0 },
	  //										 { opacity:1, borderColor: colorBorder, ease: Power2.easeOut, overwrite:true }).delay(0.5);
	  TweenLite.to('.navMobileShow', 0.5, { opacity:1, borderColor: colorBorder, ease: Power2.easeOut, overwrite:true }).delay(0.5);

	  TweenLite.to('.navPos  ', metroTime, { y:'25px', yoyo:true });
	  //console.log(linePlace);
	  TweenLite.to('nav .navLine.navLineMobile', 0.5, { y: linePlace, ease:metroEase, overwrite:false });
	  TweenLite.to('.mainTitle', 0.45, { y:titlePlace , ease:metroEase });
	 
//	  right: calc(35px - 24vh);
//    top: calc(70px + 2vh);

	  TweenMax.to('body', 0, {className:"-=navOpen"});
	  TweenMax.to('nav', 0, {className:"-=open"}).delay(0.1);

 	   if (window.matchMedia("(max-width: 599.9px)").matches && window.matchMedia("(orientation: portrait)").matches ) {
 	  	//offsetAmount = 200/ratio;
	 	vWidth = Math.floor(winW/(14.25/ratio)) + "px";
		logoStyle = "600 "+vWidth+" \'Dosis\'";
 	  	logoText = "       E B                                                                 .";
 	  } else if (window.matchMedia("(max-height: 500px)").matches && window.matchMedia("(orientation: landscape)").matches ) {
 	  	//logoText = "E  R  I  C  B  I  N  T  N  E  R  .  C  O  M";
 	  	offsetAmount = 200/(ratio*2);
 	  	vWidth = Math.floor(winW/(22.5/ratio)) + "px"
		logoStyle = "600 "+vWidth+" \'Dosis\'";
		logoText = "E R I C B I N T N E R . C O M";
 	  }




	}



	function navAnimationMobileOpen(navDelay, link) {
	  navDelayFrac = navDelay + 0.225;
	  //var subPlace = '-42';
	  //if (window.matchMedia("(orientation: landscape)")) { subPlace = -29 }
	  //var titlePlace = '-115px'

	  //if (window.matchMedia("(orientation: landscape)").matches) { 
	  		//subPlace = '-29';  
	  		//titlePlace = '0'//titlePlace = 'calc(-47px + 3.7vh)';
	  //}

	  var setNavOpen = new TimelineLite({repeat: -1});
	  setNavOpen.staggerTo('.navPos a .subStop', 0.35, { x: '0', y: '0', height: '40px', width: '40px', right: '-26px', 
	  	top: '-8px', borderWidth: '15px', ease: metroEase}, 0.025);

	  var setNavOpen2 = new TimelineLite({repeat: -1});
	  setNavOpen2.delay(navDelayFrac).staggerTo('.navPos a', 0.2, { 'background-color' :'rgba(255,255,255,1)' , 'color' :'#222'}, 0.025);
	  
	  TweenLite.to('.navPos  ', 0.3, { y:'0' }).delay(navDelay);
	  TweenLite.to('.mainTitle', 0.3, { y:'-115px', ease:Power1.easeOut , onComplete: function() { changeNavState() } });

	  TweenMax.to('body', 0, {className:"+=navOpen"}).delay(navDelay);
	  TweenMax.to('nav', 0, {className:"+=open"}).delay(navDelay);

	  if (link === 0 ) {  
	  	//showGrass(speed);

	  }

	  function changeNavState() {

	  	if (window.matchMedia("(max-width: 599.9px)").matches && window.matchMedia("(orientation: portrait)").matches ) {
	 	  	//offsetAmount = 200/ratio;
	 	  	vWidth = Math.floor(winW/(14.25/ratio)) + "px";
			logoStyle = "600 "+vWidth+" \'Dosis\'";
	 	  	logoText = "E  R  I  C  B  I  N  T  N  E  R  .  C  O  M";
	 	  } else if (window.matchMedia("(max-height: 500px)").matches && window.matchMedia("(orientation: landscape)").matches ) {
	 	  	//logoText = "E  R  I  C  B  I  N  T  N  E  R  .  C  O  M";
	 	  	offsetAmount = 200/(ratio*2);
	 	  	vWidth = Math.floor(winW/(22.5/ratio)) + "px"
			logoStyle = "600 "+vWidth+" \'Dosis\'";
			logoText = "E R I C B I N T N E R . C O M";
	 	  }

	  	if (link === 0 ) {  
	  		//TweenLite.to('.grass', 0.5, { css:{'display':'block','transform':'translateY(110vh)'}, ease: Power2.easeOut}).delay(0.05);
	  	}
	  }
	  //TweenLite.to('nav .navLine.navLineMobile', 0.3, { y: '', ease:Power1.easeOut, onComplete: function() { changeNavState() } }).delay(navDelay);
	  TweenLite.to('nav .navLine.navLineMobile', 0.3, { y: '', ease:Power1.easeOut}).delay(navDelay);

	}










$('.navMobileShow').click(function() {
	navAnimationMobileOpen(0);

	//$('.navOpen #environment').click(function() {
});	

$('.clickAway').click(function() {
		//console.log('THIS SHOULD CLOSE THE NAV!!!!!!');
	if ( $('body').hasClass('navOpen') ){
		navAnimationMobile(0);
	} else {
		return false
	}
		
});


// window.addEventListener("orientationchange", function() {
//     alert("the orientation of the device is now " + screen.orientation);
//     if ( $('body').hasClass('navOpen') && screen.orientation ){
// 		navAnimationMobile(0);
// 	} else if ( !$('body').hasClass('navOpen') && screen.orientation) {
// 		navAnimationMobileOpen();
// 	}
// });


// Find matches
var mql = window.matchMedia("(orientation: portrait)");

// If there are matches, we're in portrait
// if(mql.matches  && window.matchMedia("(max-width: 599.9px)").matches || 
//   !mql.matches && window.matchMedia("(max-height: 500px)").matches ) {

//   	console.log('INIT orientation: * (mobile), level = '+ level);
// 	navAnimationMobile(0);

// 	if ( level === 0 ) {
// 		navAnimationMobileOpen();
// 	} else {
// 		navAnimationMobile(0);
// 	}

// } else  {
// 	// not mobile, hopefully
// 	console.log('INIT orientation: * (not mobile, hopefully), is portrait: ' + mql.matches);
// }

// Add a media query change listener
mql.addListener(function(m) {
	if(m.matches  && window.matchMedia("(max-width: 599.9px)").matches) {
		setTimeout(function(){ 
			//console.log('orientation: portrait, link = ' + link);	// Changed to portrait
			//navAnimationMobile(0);
			navAnimation(0, link);
			//viewportFix(0); 
		}, 5);
	}
	else if( !m.matches && window.matchMedia("(max-height: 500px)").matches ) {
		setTimeout(function(){ 
			//console.log('orientation: landscape');
			navAnimationMobile(0); 
		}, 1000);
		oldOffset = 0;
		return oldOffset;
	}
});




	var updateQueryStringParam = function (key, value) {

	    var baseUrl = [location.protocol, '//', location.host, location.pathname].join(''),
	        urlQueryString = document.location.search,
	        newParam = key + '=' + value,
	        params = '?' + newParam;

	    // If the "search" string exists, then build params from it
	    if (urlQueryString) {

	        updateRegex = new RegExp('([\?&])' + key + '[^&]*');
	        removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');

	        if( typeof value == 'undefined' || value == null || value == '' ) { // Remove param if value is empty

	            params = urlQueryString.replace(removeRegex, "$1");
	            params = params.replace( /[&;]$/, "" );
	            //alert('UNDEFINED URL Param');

	        } else if (urlQueryString.match(updateRegex) !== null) { // If param exists already, update it

	            params = urlQueryString.replace(updateRegex, "$1" + newParam);
	            //alert('NULL URL Param');

	        } else { // Otherwise, add it to end of query string

	            params = urlQueryString + '&' + newParam;

	        }

	    }
	    window.history.replaceState({}, "", baseUrl + params);
	}



	function reloadiframe(){

		// sledgehammer approach because replacing src on dynamically loaded iframe was not working with vanilla js
		$('.interactive-content').find('.control a.reloadBtn').click(function(){

			//$('.interactive-content').find('.control').removeClass('showReplay');
			//TweenMax.to('.interactive-content .control', 1, {opacity: 0, overwrite:false});
			//TweenMax.to('.interactive-content .control', 0, {width: "0%", overwrite:false}).delay(1);

			var tlhide = new TimelineLite();
			tlhide.to('.interactive-content .control', 0.5, {opacity: 0, overwrite:false})
				  .to('.interactive-content .control svg', 0.5, {rotation: 60, ease:Power3.easeIn}, "-=0.5")
			      .to('.interactive-content .control', 0, {width: "0%", left:-5000, overwrite:false});

			var $iframeContainer = $('.interactive-content .interactive-container .ibox');
			var  iframe = $iframeContainer.html();
			$iframeContainer.empty();
			$iframeContainer.html(iframe);

			reloadiframe();
			TweenLite.to(".interactive-content #iContainer .ibox", 0.3, {opacity: 1}).delay(0.3);
			//$('.interactive-content .interactive-container .control a.reloadBtn').
		});
	}







	var state = 'notReady';
	  	
	//function finishPage(){


	//> Check URL Paramater
   	function ifUrl(){
	    // Force initial state based on url variables 
		var url_string = window.location.href;
		var url = new URL(url_string);

		var nav = url.searchParams.get("nav");
		var work = url.searchParams.get("work");

		var $level;
		var navClass
		var navLevel;
		var loadOffset;
		var level;
		

		TweenMax.to('.button-group button.button', 0, {opacity: 0});
		TweenMax.to('.place3D.stop5 .scene', 0, {opacity: 0});
	    TweenMax.to('.button-group.carouselBtns button', 0, {opacity: 0});
	    var otherTitles = [
									"svg.intro 		 line, svg.intro 	   polyline, svg.intro path", 		
									"svg.skills 	 line, svg.skills 	   polyline, svg.skills path", 		
									"svg.interactive line, svg.interactive polyline, svg.interactive path",
									"svg.motion 	 line, svg.motion 	   polyline, svg.motion path", 		
									"svg.art 		 line, svg.art 		   polyline, svg.art path", 			
									"svg.credits 	 line, svg.credits 	   polyline, svg.credits path"
		];
		//console.log(otherTitles)
		//otherTitles.splice(level, 1);
		TweenMax.to( otherTitles.toString() , 0, { drawSVG:0, overwrite:true});
		TweenMax.to('.intro-content', 0, {rotationX: 90});


		// if ( 		nav === 'undefined'){
		// 		playIntro(state)
		// } else 

	    if ( 		nav === 'Skills'){
	    	//checkCloudSize();
	    	skillsIsotope(state);

	    	if ( state === 'ready' ){
		    	if ( work !== null){
		    		//console.log(" NOT null = deletes work in URL ");
		    		updateQueryStringParam( 'work', '');
		    	}

	    		$level = $('nav a.level-1');
		    	navClass 	= 'skills';
		    	navLevel 	= 160000;
		    	loadOffset	= navLevel+10000;
				level 		= 1;
				introAnimTime = 2.15;
				
				TweenMax.to('.grid.skills .element-item:not(.selected), .grid.interactive .grid-item:not(.selected), .grid.motion .grid-item:not(.selected)', 0, {opacity: 0, scale:0.9});
				//TweenMax.to('.button-group button.button', 0, {opacity: 0});
				
				TweenLite.to("#content", 0, { y: loadOffset });
	    		TweenLite.to("#content", 1, { opacity: 1, overwrite: false, onComplete: //});
			    	function(){				    		
			    		TweenMax.staggerTo('.grid.skills .element-item', 0.5, {opacity: 1, scale:1, overwrite:true, delay: 2.15}, 0.05);
			    		TweenMax.staggerTo('.button-group.skills button.button', 0.33, {opacity: 1, overwrite:true, delay: 1.65}, 0.1125);
	                	showContent(state, navClass, navLevel, loadOffset, level, introAnimTime);
			    	} 
	    		}).delay(metroDelay);


			}//);
	    } else if ( nav === 'Interactive'){
	    	interactiveIsotope(state);

			if ( state === 'ready' ){


				$level = $('nav a.level-2');
		    	navClass 	= 'interactive';
		    	navLevel 	= 320000;
		    	loadOffset	= navLevel+10000;
				level 		= 2;
				introAnimTime = 2.15;

				TweenMax.to('.grid.skills .element-item:not(.selected), .grid.interactive .grid-item:not(.selected), .grid.motion .grid-item:not(.selected)', 0, {opacity: 0, scale:0.9});
				//TweenMax.to('.button-group button.button', 0, {opacity: 0});

				TweenLite.to("#content", 0, { y: loadOffset });
	    		TweenLite.to("#content", 1, { opacity: 1, overwrite: false, onComplete: //});
			    	function(){
			    		if ( work == ''  ||  work == 'undefined' ){
				    		//console.log("work = nothing at all");  
				    		updateQueryStringParam( 'work', '');
				    		interactivePageAnimateIn();
				    	} else
				    	if ( work !== null) {
							var $itemInt = $('.grid.interactive').find('.grid-item.' + work);
							// check if item exist, if bad URL param then remove param
							if ($itemInt.length) {
					    		makeInteractive($itemInt);	
					    		$itemInt.addClass('selected').css({'opacity':1, 'transform':'scale(1)'});
					    		TweenLite.to('.button-group.interactive button.button', 0, {opacity: 1});
						    	openInteractiveItem(); 
							} else { 
								//console.log("no item exists");  
								updateQueryStringParam( 'work', ''); 
								interactivePageAnimateIn();
							}
				    	} else {
				    		interactivePageAnimateIn();
				    	}
				    	function interactivePageAnimateIn(){
				    		 TweenMax.staggerTo('.grid.interactive .grid-item', 0.5, {opacity: 1, scale:1, overwrite:true, delay: 2.15}, 0.05);
			    			 TweenMax.staggerTo('.button-group.interactive button.button', 0.33, {opacity: 1, overwrite:true, delay: 1.65}, 0.1125);
				    	}
	                	showContent(state, navClass, navLevel, loadOffset, level, introAnimTime);
			    	} 
	    		}).delay(metroDelay);

			}
	    } else if ( nav === 'Motion'){
	    	motionIsotope(state);
	    	//console.log("This Is Work: "+work);  
		    if ( state === 'ready' ){
		    	
		    	//play_title('motion', 3, 1);
				//TweenLite.to("#content", 0, {y: 480000 });
				//$level = $('nav a.level-3');
				//showContent(state);

				$level = $('nav a.level-3');
		    	navClass 	= 'motion';
		    	navLevel 	= 480000;
		    	loadOffset	= navLevel+10000;
				level 		= 3;
				introAnimTime = 2.15;

				TweenMax.to('.grid.skills .element-item:not(.selected), .grid.interactive .grid-item:not(.selected), .grid.motion .grid-item:not(.selected)', 0, {opacity: 0, scale:0.9});

				TweenLite.to("#content", 0, { y: loadOffset });
	    		TweenLite.to("#content", 1, { opacity: 1, overwrite: false, ease: Power3.easeOut, onComplete: //});
			    	function(){
			    		if ( work == ''  ||  work == 'undefined' ) {
				    		//console.log("work = nothing at all");  
				    		updateQueryStringParam( 'work', '');
				    		motionPageAnimateIn();
				    	} else 
				    	if ( work !== null) {//&&  work !== 'undefined' ){ 
							var $item = $('.grid.motion').find('.grid-item.' + work);
							// check if item exist, if bad URL param then remove param
							if ($item.length) {
					    		makeVideo($item);	
					    		$item.addClass('selected').css({'opacity':1, 'transform':'scale(1)'});
					    		TweenLite.to('.button-group.motion button.button', 0, {opacity: 1});
						    	openMotionItemInstant(); 
							} else { 
								//console.log("no item exists");  
								updateQueryStringParam( 'work', ''); 
								motionPageAnimateIn();
							}
				    	} else {
				    		motionPageAnimateIn();
				    	}
				    	function motionPageAnimateIn(){
			    			TweenMax.staggerTo('.grid.motion .grid-item', 0.5, {opacity: 1, scale:1, overwrite:true, delay: 2.15}, 0.05);
			    			TweenMax.staggerTo('.button-group.motion button.button', 0.33, {opacity: 1, overwrite:true, delay: 1.65}, 0.1125);
				    	}
			    		//state = 'ready';
	                	showContent(state, navClass, navLevel, loadOffset, level, introAnimTime);
			    	} 
	    		}).delay(metroDelay);

			}//);
	    } else if ( nav === 'Art'){
	    		if ( work !== null){
		    		updateQueryStringParam( 'work', '');
		    	}
		    	//play_title('art', 4, 1);
		    	//TweenLite.to("#content", 0, {y: 640000 });
		    	//$level = $('nav a.level-4');
		    	//$.when( runAurora() ).then(auroraDone(state));
				//function auroraDone(state){
	                //state = 'ready';
	                //showContent(state);
	            //};
				TweenMax.to('.grid.skills .element-item:not(.selected), .grid.interactive .grid-item:not(.selected), .grid.motion .grid-item:not(.selected)', 0, {opacity: 0, scale:0.9});

	            $level = $('nav a.level-4');
		    	navClass 	= 'art';
		    	navLevel 	= 640000;
		    	loadOffset	= navLevel-100000;
				level 		= 4;

				TweenLite.to("#content", 0, { y: loadOffset });
	    		TweenLite.to("#content", 1, { opacity: 1, overwrite: false, onComplete: //});
			    	function(){
			    		//TweenMax.staggerTo('.button-group.carouselBtns button:not(.no)', 0.75, {opacity: 1, overwrite:true, delay: 5}, 0.125);
			    		//TweenMax.to('.place3D.stop5 .scene', 0.5, {opacity: 1}).delay(6.25);
			    		state = 'ready';
	                	showContent(state, navClass, navLevel, loadOffset, level);
			    	} 
	    		}).delay(metroDelay);

	    }else if ( nav === 'About'){

	    	//if ( state === 'ready' ){
	    		if ( work !== null){
		    		updateQueryStringParam( 'work', '');
		    	}
		    	//play_title('credits', 5, 1);
		    	//TweenLite.to("#content", 0, {y: 800000 });
				TweenMax.to('.grid.skills .element-item:not(.selected), .grid.interactive .grid-item:not(.selected), .grid.motion .grid-item:not(.selected)', 0, {opacity: 0, scale:0.9});

		    	$level = $('nav a.level-5');
		    	navClass 	= 'credits';
		    	navLevel 	= 800000;
		    	loadOffset	= navLevel-100000;
				level 		= 5;
				introAnimTime = 6;

				TweenLite.to("#content", 0, { y: loadOffset });
	    		TweenLite.to("#content", 1, { opacity: 1, overwrite: false, onComplete: //});
			    	function(){
			    		TweenMax.staggerTo('.button-group.carouselBtns button:not(.no)', 0.75, {opacity: 1, overwrite:true, delay: 5}, 0.125);
			    		TweenMax.to('.place3D.stop5 .scene', 0.5, {opacity: 1}).delay(6.25);
			    		state = 'ready';
	                	showContent(state, navClass, navLevel, loadOffset, level, introAnimTime);
			    	} 
	    		}).delay(metroDelay);
		    //}

	    
	   	} else {

	   		playIntro(state)

	 	}
		

		function playIntro(state){
	    		if ( work !== null){
		    		updateQueryStringParam( 'work', '');
		    	}
		    	if ( nav !== null){
		    		updateQueryStringParam( 'nav', '');
		    	} 
		    	//window.history.replaceState({}
		    	//window.location = String(window.location).match(/(.*?)\?/)[1];
		    	
		    	//$('nav').addClass('open');
				
			
				

		        if (window.matchMedia("(max-width: 599.9px)").matches || window.matchMedia("(max-height: 500px)").matches ) {
					///navAnimationMobileOpen(0);
					//console.log("THIS SHOULD BE MOBILE");
				} 
				//$.when(grass(0)).then(grassDone(state));
				//function grassDone(state){






				// TweenLite.to("#content", 1, {opacity: 1, overwrite: false}).delay(metroDelay);
				// TweenMax.fromTo("#content", 6, {y: 10000}, { y: 0, onComplete: //});
			 //    	function(){ 
			 //    		animateNav(1, 0);
			 //    		$('nav').addClass('open');
			 //    		state = 'ready';
	   //              	showContent(state);
			 //    	} 
	   //  		}).delay(metroDelay+1);

				nav = "Intro";
	   			$level = $('nav a.level-G');
	   			navClass 	= 'intro';
		    	navLevel 	= 0;
				loadOffset = 10000;
				level = 0;
				introAnimTime = 6;

				TweenMax.to('.grid.skills .element-item:not(.selected), .grid.interactive .grid-item:not(.selected), .grid.motion .grid-item:not(.selected)', 0, {opacity: 0, scale:0.9});

				TweenMax.to("#content", 0, { y: loadOffset });
	    		TweenLite.to("#content", 1, {opacity: 1, overwrite: false, onComplete: //});
			    	function(){ 
			    		//animateNav(1, 0);
			    		if (window.matchMedia("(max-width: 599.9px)").matches || window.matchMedia("(max-height: 500px)").matches ) {
							d = 4;
						} else {
							d = 3;
						}
			    		TweenMax.to('.intro-content', 1, {rotationX: 0}).delay(d);
			    		TweenMax.to('.welcomeContainer h1', 0.75, {opacity: 1}).delay(2.25);
			    		state = 'ready';
	                	showContent(state, navClass, navLevel, loadOffset, level, introAnimTime);
			    	} 
	    		}).delay(metroDelay);

	            
		}
		
		function showContent(state, navClass, navLevel, loadOffset, level, introAnimTime){
			
			if ( state === 'ready') {
				//console.log("READY++: "+state, state2);
				function waitForState2(){
				    if( state2 === 'ready'){
				    	//console.log(state, state2);
				        showIt();
				    }
				    else{
				    	//console.log(state, state2);
				        setTimeout(waitForState2, 333);
				        //showIt();
				    }
				}	
				waitForState2();

				function showIt(){
				    $level.addClass('selected');
					var levelColor = $level.data('color');
				    //TweenLite.to('.navMobileShow', 1, { css:{borderColor: levelColor}, ease: Power3.easeOut, overwrite:true, onComplete: function(){
	
						if (level === 0 && window.matchMedia("(max-width: 599.9px)").matches || level === 0 && window.matchMedia("(max-height: 500px)").matches ) {	
							animateNav(0, 1);	
						} else if (level !== 0 && window.matchMedia("(max-width: 599.9px)").matches || level !== 0 && window.matchMedia("(max-height: 500px)").matches ) {		
							animateNav(0, level);
						} else {
							TweenLite.to( $level , 1, { css:{ borderColor: levelColor }} );
						}	

						//if (level === 0 && window.matchMedia("(max-width: 599.9px)").matches || window.matchMedia("(max-height: 500px)").matches ) {
						TweenLite.to('nav .navLine', 0, { css:{backgroundColor: levelColor}, ease: Power3.easeOut, overwrite:false})
					    TweenLite.to("nav", 1, {opacity: 1, overwrite: false, onComplete: function(){ 
					    	//setTimeout(function(){ 
					    		//play_title(navClass, level, 0); 
					    		

								var textTime;
								if (level === 0){
									textTime = 2.05
								} else {
									textTime = introAnimTime;
								}
								
								TweenMax.staggerTo('svg.' + navClass + ' line, svg.' + navClass + ' polyline, svg.' + navClass + ' path',	0.125, { drawSVG:100, overwrite:false, delay: textTime-2}, 0.035);
							
					    	//}, (introAnimTime-1.75) );
					    }  });
				    	//}
				    		
				    		
					//} });

					//var interval = 0.1;
				    //TweenLite.to("#content", interval, {opacity: 1, overwrite: false}).delay(0);
				    TweenMax.fromTo("#content", introAnimTime, {y: loadOffset}, { y: navLevel, onComplete: //});
				    	function(){ 
				    		//play_title(navClass, level, 0); 
				    		if (level === 0 && window.matchMedia("(max-width: 599.9px)").matches || level === 0 && window.matchMedia("(max-height: 500px)").matches ) {
					    		animateNav(0, level);
					    		$('nav').addClass('open');	
							    $('body').addClass('navOpen level0');
					    	} else if (window.matchMedia("(max-height: 500px)").matches && window.matchMedia("(orientation: landscape)").matches ){
					    		animateNav(0, level);
					    	}
					    	//addCanvas();
				    	} 
				    });
				}

			}
			
		}

 	
		function addCanvas(){
			//if ( nav !== 'Intro'){  setTimeout(function(){ 		grassStart(0) 			}, 1500);}  //showGrass(0)
			//if ( nav !== 'Skills'){ setTimeout(function(){ 		checkCloudSize(); 	}, 2500);}//runClouds() 	
			//if ( nav !== 'Art'){    setTimeout(function(){ 		runAurora() 		}, 3000);}	
		}
   	}


// INIT all 3 isotopes, but only once each

	var skillsIsotope = (function() {
	    var executed = false;
	    return function() {
	        if (!executed) {
	            executed = true;
	            $grid_skills.isotope( 'on', 'arrangeComplete', function() {
	             	state = 'ready';
	             	return state;
				});
				//setTimeout(function(){ $grid_skills.isotope(); }, 500);
	            $grid_skills.isotope();
	        }
	    };
	})();
	var interactiveIsotope = (function() {
	    var executed = false;
	    return function() {
	        if (!executed) {
	            executed = true;
	            $grid_interactive.isotope( 'on', 'arrangeComplete', function() {
	             	state = 'ready';
	             	return state;
				});
	            $grid_interactive.isotope();
	        }
	    };
	})();
	var motionIsotope = (function() {
	    var executed = false;
	    return function() {
	        if (!executed) {
	            executed = true;
	            $grid_motion.isotope( 'on', 'arrangeComplete', function() {
	             	state = 'ready';
	             	return state;
				});
	            $grid_motion.isotope();
	        }
	    };
	})();
	// function grassInit(state){
	// 	console.log(state);
 //      //var executed = false;
 //      //return function() {
 //          //if (!executed) {
 //          //    executed = true;
 //          	  $.when(grass()).then(grassDone(state));

 //              function grassDone(state){
 //                state = 'ready';
 //                console.log(state);
 //                return state;
 //              };              
 //          //}

 //       return state;

	// };






	ifUrl();




var oldOffset = (document.documentElement.clientHeight - window.innerHeight);
var height;

	function viewportFix(){

		if (window.matchMedia("(max-width: 599.9px)").matches && window.matchMedia("(orientation: portrait)")  ){
			//|| 
			//window.matchMedia("(max-height: 599.9px)").matches && window.matchMedia("(orientation: landscape)") ) {


			
			var gridHeight;
			var offset;

			function figure(){

				height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
				
				offset = (document.documentElement.clientHeight - window.innerHeight);

				gridHeight = Math.floor((height*0.81));// + offset 

				fixIt(height, offset, gridHeight);
			}
			

			

			function fixIt(height, offset, gridHeight){
				if (offset !== 0){
					$("section#zero .carousel").removeClass("short");
				} else {
					$("section#zero .carousel").addClass("short");
				}
				if ( !$("body").hasClass("firstLoad") ) {

						var makeOffset;

						if 			(oldOffset !== 0 && offset === 0 ){
							//console.log(makeOffset+" = makeOffset (normal), THIS IS SHORT, move lower?");
							makeOffset = (-1)*oldOffset+'px';

						} else if (oldOffset === 0 && offset !== 0){
							//console.log(makeOffset+" = makeOffset, THIS IS TALL, move Higher??");
							makeOffset = '-1px';
							
						} else if 	(oldOffset !== 0 && offset !== 0){
							// Used to fix false resize caused by fullscreen video ( assumes 0 )
							//console.log("oldOffset = " +oldOffset +" (NOT 0),  new offset = "+offset+" (NOT 0), RESET to 0 #="+oldOffset+" Used to fix false resize caused by fullscreen video");
							makeOffset = '0';
						} else {
							// Used to fix false resize caused by fullscreen video or orientation event to portriat ( assumes "offset" so use VW calc to get close to. This could find largest old value, but that wil also cause incorrect variables)
							//console.log("oldOffset = " +oldOffset +" ( = 0),  new offset = "+offset+" ( = all 000), !!SET vh!! (Else... hacky fix in case old value is missing)"+oldOffset+", "+offset);
							makeOffset = 'calc(10vh + 9px)';
							
						}
						//console.log(document.documentElement.clientHeight, window.innerHeight);
						$("body").css('margin-top', makeOffset );
						$(".holder").css({'height': gridHeight + 'px'});
						$(".holder .gridContain").css({'height': gridHeight + 'px'});
						
				} else {
					$(".holder").css({'height': gridHeight + 'px'});
					$(".holder .gridContain").css({'height': gridHeight + 'px'});
					$("body").removeClass('firstLoad');
				}
				
				//
				// $(".holder").css({'height': gridHeight + 'px'});
				// $(".holder .gridContain").css({'height': gridHeight + 'px'});
				



				oldOffset = offset;
				return oldOffset;
			}

			figure();

		} else {
			
			$("body").css('margin-top', '');
			$(".holder").css({'height': ''});
			$(".holder .gridContain").css({'height': ''});
		}
		
	}
	//window.addEventListener('resize', function() {
	//document.addEventListener('resize', function() {


	 // $( window ).resize(function() {
		// 	viewportFix();
	 // });

	$( window ).resize(function() {
			viewportFix(oldOffset);
	});
	//console.log('INIT ' + oldOffset );
	//console.log('INIT = '+document.documentElement.clientHeight, window.innerHeight);

	//viewportFix(oldOffset);
// var resizeId;
// $(window).resize(function() {
//     clearTimeout(resizeId);
//     resizeId = setTimeout(viewportFix, 300);
// });


			// var winWid = window.innerWidth;
			// function onWindowResize( event ) {
			//   if(window.innerWidth != winWi){	
			//   	winWid = window.innerWidth;
			// 	clearTimeout(window.resizedFinished);
			// 	if(window.matchMedia("(max-width: 599.9px)").matches && window.matchMedia("(orientation: portrait)").matches){
			// 	    window.resizedFinished = setTimeout(function(){
			// 			viewportFix();
			// 	    }, 10);
			// 	} else {
			// 		window.resizedFinished = setTimeout(function(){
			// 			viewportFix();
			// 	    }, 250);
			// 	}
			//   }

			// }




	viewportFix();


};




function replayShow(){
	//console.log('replayShow() called!!!');
	//$('.interactive-content').find('.control').addClass('showReplay');
	//$('.interactive-content .control').addClass('showReplay');

	var tlshow = new TimelineLite();
	
	tlshow.to('.interactive-content .control', 0, {width: "100%", left: 0})
		  .to('.interactive-content .control svg', 0, {rotation: -15})
		  .to('.interactive-content .control svg', 0.75, {rotation: 0})
		  .to('.interactive-content .control', 1, {opacity: 1, overwrite:false}, "-=0.75");

	TweenLite.to(".interactive-content #iContainer .ibox", 0.9, {opacity: 0.66}).delay(0.1);
}

// keep iframe at proportions sent from function inside iframe
function heightWidth(height, width){
	$(".holder.interactiveHolder .videoBox .interactive-content .interactive-info").css('max-height',height);
	$(".holder.interactiveHolder .videoBox .interactive-content #iContainer").css('max-width',width);
}






//}

