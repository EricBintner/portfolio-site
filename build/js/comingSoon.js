//comingSoon.js

(function () {

if ( !$('html').hasClass('touch') ){
    


	/* ****************************** */
	/* GLOBAL VARIABLES */

	// CANVAS RELATED
	var ghostCanvas = document.getElementById("ghost-canvas");
	var visibleCanvas = document.getElementById("visible-canvas");
	var ctx = ghostCanvas.getContext('2d');
	var ctx_ = visibleCanvas.getContext('2d');

	// SETUP & SHAPE RELATED
  	var w, h; 				// Width, height
	var shapeSize;			// Size of sample square 
	var mouseX = 0, mouseY = 0;

	/* ****************************** */
	/* SETUP & DRAW */
	
	function fitCanvas() {
		var ww = window.innerWidth;
		var wh = window.innerHeight;

		w = ww;
		h = wh / 3 + 50; // adjust accordingly

		ctx.canvas.width = ctx_.canvas.width = w;
		ctx.canvas.height = ctx_.canvas.height = h;

		shapeSize = Math.round(w / 150);
	}
	
	function draw() {

		myTitle = new Title();

		// Get pixels data from ghost canvas
		var pixels = ctx.getImageData(0, 0, w, h); 
		var data = pixels.data;	
		
		// Resetting background on each 'frame'
		ctx_.fillStyle = "rgba(0,0,0, 0.0)";
		ctx_.fillRect(0, 0, w, h);

		// for each dot coordinates
		for (var x = 0; x < w; x += shapeSize) {
			for (var y = 0; y < h; y += shapeSize) {

				// get RGB from pixels data
				var i = ( y * w + x ) * 4;
					
				var iR = i + 0; // Red
				var iG = i + 1;	// Green
				var iB = i + 2;	// Blue
				// var iA = i + 3;	// Alpha

				// convert img RGB to grayscale
				var greyscale = Math.round( 0.299*data[iR] + 0.587*data[iG] + 0.114*data[iB]); // convert img to greyscale
				var mappedGrey = greyscale.map(0, 255, 0, 0.5); // maps greyscale from range 0-255 to range 0-1
				
				// create shape
				var myShape = new Shape(x, y, mappedGrey, mouseX, mouseY); 			
				
				// create random golor
				var randColor = 100 + Math.round(155 * Math.random());
				var col = "rgb("+randColor+","+randColor+","+randColor+",1)";
				myShape.colorMe = col;

				// draw shape
				myShape.display();			
			}
		}
	}

	/* ****************************** */
	/* CLASSES */
	function Shape (x, y, mappedGrey, MX, MY ) {

		var gapRatio = 1.4; // scaling factor of gap between shapes
		var minDiam = 0.1; // smallest diameter allowed to be shown

		var dx = x - MX; // distance from mouse
		var dy = y - MY; // distance from mouse

		this.colorMe; // The color that will be randomly assigned on creation

		var distFromMouse = Math.sqrt( Math.pow(Math.abs(dx), 2) + Math.pow(Math.abs(dy), 2) );	// distance from mouse
		var maxDist = Math.sqrt( Math.pow(Math.abs(w), 2) + Math.pow(Math.abs(h), 2) );	// maximum possible distance			
		var mappedDistance = distFromMouse.map(0, maxDist, 0, 4); // map distance from 0 - 8
		
		var elemSize = (shapeSize * gapRatio * mappedGrey) - mappedDistance/2 ; // dot size according to dist from mouse

		this.display = function() {
			if (elemSize > minDiam) {

				ctx_.fillStyle = this.colorMe;
				// ctx_.fillRect(x+shapeSize/2, y+shapeSize/2, elemSize, elemSize);

				ctx_.beginPath();
				ctx_.arc(x+shapeSize/2, y+shapeSize/2, elemSize/2, 0, Math.PI*2, true); 
				ctx_.closePath();
				ctx_.fill();
			}
		}
	}

	function Title() {
		var fontSize = w / 9;
		var myTitle = "C O M I N G   S O O N";
		ctx.font = "600 "+fontSize+"px \'Dosis\'";
		ctx.fillStyle = "rgb(255,255,255)";
		ctx.textAlign = "center";
		ctx.fillText( myTitle, w/2, h/2);
	}

	/* ****************************** */
	/* EVENT LISTENERS */
	window.addEventListener("resize", function () { fitCanvas();}, false );	// Reset canvas on resize
	visibleCanvas.addEventListener("mousemove", function(e) { mouseX= e.layerX, mouseY= e.layerY; }, false); // Gets mouse coords on visible canvas
	window.addEventListener("load", function() {
		fitCanvas(); // Set canvas on load
		//window.setInterval( function(){ draw(); }, 100); // animate
		
		//function doSomething() {  }

		(function loop() {
				//var rand = (Math.random()*80) + 100;
				setTimeout(function() {
								draw();
								loop();  
				}, 120); //rand);
		}());
		
	}, false); 
	

	/* ****************************** */
	/* PROTOTYPE */
	Number.prototype.map = function (inMIN, inMAX, outMIN, outMAX) {
	  return outMIN + ( (this - inMIN) * (outMAX - outMIN) / (inMAX - inMIN) );
	}


  } // if not .touch


})();