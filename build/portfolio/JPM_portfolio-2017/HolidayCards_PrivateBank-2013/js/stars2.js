




	
function stars2(){


var items = 380;
var inCircle = Raphael.animation({'opacity':'1'}, 175, '<');
var starColor = "#ccc"  

    for (var i = 0; i < items ; i++) {
				
			//var sp = (2*i)+1000;	
			var sp = 2000;
			var spVar = (i*30);
			
			
			
				
				// -------------------------------------------------------
			/*for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 435 * Math.cos(2  * Math.PI * i / items);
					var y = 280 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-20)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t555,381'}).animate(inCircle.delay(1400));
						}
					})(i,j),(j * sp)+spVar)
				}
				*/
			
			
			
			
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 550 * Math.cos(2  * Math.PI * i /  items);
					var y = 105 + 460 * Math.sin(2  * Math.PI * i /  items);
						return function() {
							var box = paper.circle(j+x, j*50-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t510,390'}).animate(inCircle.delay(2100));
						}
					})(i,j),(j * sp)+spVar)
				}
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 475 * Math.cos(2  * Math.PI * i / items);
					var y = 290 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-30)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t510,255'}).animate(inCircle.delay(2700));
						}
					})(i,j),(j * sp)+spVar)
				}
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 480 * Math.cos(2  * Math.PI * i / items);
					var y = 330 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-30)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t495,350'}).animate(inCircle.delay(3400));
						}
					})(i,j),(j * sp)+spVar)
				}
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 460 * Math.cos(2  * Math.PI * i / items);
					var y = 330 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-30)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t510,310'}).animate(inCircle.delay(1400));
						}
					})(i,j),(j * sp)+spVar)
				}
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 600 * Math.cos(2  * Math.PI * i /  items);
					var y = 435 * Math.sin(2  * Math.PI * i /  items);
						return function() {
							var box = paper.circle(j+x, j*50-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t520,340'}).animate(inCircle.delay(700));
						}
					})(i,j),(j * sp)+spVar)
				}
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 340 * Math.cos(2  * Math.PI * i / items);
					var y = 242 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-20)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t528,308'}).animate(inCircle.delay(0));
						}
					})(i,j),(j * sp)+spVar)
				}
				// -------------------------------------------------------
	
	
	
				
				//	for (var j = 0; j < 20; j++) {
				//		window.setTimeout(
				//		(function (i,j){ 
				//		var x = 46 + 370 * Math.cos(2.7  * Math.PI * i / (items-80));
				//		var y = 280 * Math.sin(2  * Math.PI * i / (items-80));
				//			return function() {
				//				var box = paper.circle(j+x, j*(-20)-y,0.75);
				//				//box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t510,320'}).animate(inCircle.delay(900));
				//				box.attr({fill:'#0ff','stroke-width': '0','opacity':'0', transform:'t510,320'}).animate(inCircle.delay(0));
				//			}
				//		})(i,j),(j * sp*2)+i*50)
				//	}
	};   
}; //end stars

