





function stars(){
	
var items = 380;
var inCircle = Raphael.animation({'opacity':'1'}, 200, '<');
var starColor = "#ccc"  

    for (var i = 0; i < items ; i++) {
				
			//var sp = (2*i)+1000;	
			var sp = 2000;
			var spVar = (i*35);
			// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 343 * Math.cos(2  * Math.PI * i / items);
					var y = 255 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-20)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t580,267'}).animate(inCircle.delay(250));
						}
					})(i,j),(j * sp)+spVar)
				}
				
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 410 * Math.cos(2  * Math.PI * i / items);
					var y = 350 * Math.sin(2  * Math.PI * i /items);
						return function() {
							var box = paper.circle(j+x, j*50-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t510,300'}).animate(inCircle.delay(0));
						}
					})(i,j),(j*sp)+spVar)
				}
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 350 * Math.cos(2  * Math.PI * i / items);
					var y = 235 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-20)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t495,327'}).animate(inCircle.delay(500));
						}
					})(i,j),(j * sp)+spVar)
				}
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 520 * Math.cos(2  * Math.PI * i / items);
					var y = 125 + 350 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*50-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t510,420'}).animate(inCircle.delay(1000));
						}
					})(i,j),(j*sp)+spVar)
				}
				// -------------------------------------------------------
	/*			for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 500 * Math.cos(2  * Math.PI * i / items);
					var y = 105 + 450 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*50-y,0.75);
							box.attr({fill:'#f0f','stroke-width': '0','opacity':'0', transform:'t565,280'}).animate(inCircle.delay(1500));
						}
					})(i,j),(j*sp)+spVar)
				}*/
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 500 * Math.cos(2  * Math.PI * i / items);
					var y = 105 + 450 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*50-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t510,420'}).animate(inCircle.delay(2100));
						}
					})(i,j),(j*sp)+spVar)
				}
/*				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 350 * Math.cos(2  * Math.PI * i / items);
					var y = 235 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-20)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t515,303'}).animate(inCircle.delay(2700));
						}
					})(i,j),(j * sp)+spVar)
				}*/
				// -------------------------------------------------------
				for (var j = 0; j < 1; j++) {
					window.setTimeout(
					(function (i,j){ 
					var x = 46 + 415 * Math.cos(2  * Math.PI * i / items);
					var y = 280 * Math.sin(2  * Math.PI * i / items);
						return function() {
							var box = paper.circle(j+x, j*(-20)-y,0.75);
							box.attr({fill:starColor,'stroke-width': '0','opacity':'0', transform:'t545,307'}).animate(inCircle.delay(2700));
						}
					})(i,j),(j * sp)+spVar)
				}
				
				
				
	};
};
	
	
	
	
	
	
	
	