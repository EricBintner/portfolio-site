




$(function() {

	TweenLite.to("#content", 0, {y: 0 });

	var link 	= null;
	var oldLink = null;
	var speed 	= null;
	var yaxis 	= null;
	var easy 	= null;

	$('nav a').click(function() {
	 	yaxis = $(this).data('yaxis');
	 	link  = $(this).data('level');
	    if ( oldLink === null ) {
	         oldLink = link;
			}
	    GenerateSpeed(link, oldLink, yaxis);
	    return false;
	});

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
	}

});



