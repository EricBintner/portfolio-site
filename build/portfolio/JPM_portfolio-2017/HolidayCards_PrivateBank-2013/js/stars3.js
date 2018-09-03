




	
function stars3(){


var items = 380;
var inCircle = Raphael.animation({'opacity':'1'}, 150, '<');
var starColor = "#ccc"  

    for (var i = 0; i < items ; i++) {
				
			//var sp = (2*i)+1000;	
			var sp = 2000;
			var spVar = (i*25);
			
			
			
			   /* for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 395 * Math.cos(2  * Math.PI * i / items);
					var y = 280 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-20)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t545,317'}).animate(inCircle.delay(0));
						}
					})(i,j),(j * sp)+spVar)
				}  */
				
				// -------------------------------------------------------
				
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 500 * Math.cos(2  * Math.PI * i / items);
					var y = 105 + 450 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*50-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t510,420'}).animate(inCircle.delay(800));
						}
					})(i,j),(j*sp)+spVar)
				}
				
				
				
				// -------------------------------------------------------
				
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 480 * Math.cos(2  * Math.PI * i / items);
					var y = 125 + 350 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*50-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t510,370'}).animate(inCircle.delay(1500));
						}
					})(i,j),(j*sp)+spVar)
				}
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 395 * Math.cos(2  * Math.PI * i / items);
					var y = 275 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-20)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t505,315'}).animate(inCircle.delay(2200));
						}
					})(i,j),(j * sp)+spVar)
				}
				
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 435 * Math.cos(2  * Math.PI * i / items);
					var y = 260 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-20)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t548,281'}).animate(inCircle.delay(2750));
						}
					})(i,j),(j * sp)+spVar)
				}
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 495 * Math.cos(2  * Math.PI * i / items);
					var y = 350 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-20)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t568,261'}).animate(inCircle.delay(3100));
						}
					})(i,j),(j * sp)+spVar)
				}
			
	};   
}; //end stars

