// // function logoText(){

// // 	var c = document.querySelector('#textLogo')
// // 	//var box = document.querySelector('#mainTitle')
// // 	var ctx = c.getContext('2d')
// // 	var m = {x: 0, y: 0}
// // 	var ratio = window.devicePixelRatio || 1

// // 	c.width = $('.mainTitle').width();
// // 	c.height = c.width/5;
// // 	//console.log(c.width);

// // 	var logoText = "E  R  I  C  B  I  N  T  N  E  R  .  C  O  M";
// // 	var logoStyle = "400 13vw \'Dosis\'";


// // 	// Handle canvas size
// // 	window.addEventListener('resize', function() {
	
// // 		 c.width = $('.mainTitle').width();
// // 		 c.height = c.width/5;
// // 		// ctx.width = $('.mainTitle').width()
// // 		// ctx.height = $('.mainTitle').height()
		
// // 		ctx.globalCompositeOperation = 'screen'
// // 	})

// // 	window.dispatchEvent(new Event('resize'))

// // 	// Handle mouse position
// // 	window.addEventListener('mousemove', function(e) {
// // 		//m.x = e.clientX
// // 		//m.y = e.clientY
// // 		m.x = window.innerWidth -  e.clientX;
// // 		m.y = window.innerHeight - e.clientY;
// // 		//console.log(window.innerWidth - m.x)
// // 	})

// // 	// angletools
// // 	var angleTools = {
// // 		getAngle: function(obj1, obj2) {
// // 			var dX = obj2.x - obj1.x
// // 			var dY = obj2.y - obj1.y
// // 			return Math.atan2(dY, dX) / Math.PI * 180
// // 		},
// // 		getDistance: function(obj1, obj2) {
// // 			var dx = obj1.x - obj2.x
// // 			var dy = obj1.y - obj2.y
// // 			return Math.sqrt(dx * dx + dy * dy)
// // 		},
// // 		moveOnAngle: function(obj, distance) {
// // 			var vel = this.getOneFrameDistance(obj, distance)
// // 			obj.x += vel.x
// // 			obj.y += vel.y
// // 		},
// // 		getOneFrameDistance: function(obj, speed) {
// // 			return {
// // 				x: speed * Math.cos(obj.rotation * Math.PI / 180),
// // 				y: speed * Math.sin(obj.rotation * Math.PI / 180)
// // 			}
// // 		}
// // 	}

// // 	// Rendering frames
// // 	function render() {
// // 		ctx.clearRect(0, 0, c.width, c.height)
// // 		//console.log("c.width = " + c.width);
// // 		//console.log("c.height = " + c.height);
// // 		var size = 175 * ratio
// // 		var center = {x: c.width / (ratio * 2), y: c.height }/// (ratio * 2)
		
// // 		var oRotation = angleTools.getAngle(center, m)
		
// // 		var tmpObj = {rotation: oRotation}
// // 		var d = angleTools.getOneFrameDistance(tmpObj, angleTools.getDistance(center, m) / 100)
		
// // 		ctx.font = logoStyle;
// // 		ctx.textAlign = "center";
// // 		ctx.beginPath()
// // 		ctx.fillStyle = '#f00'
// // 		ctx.fillText(logoText, c.width/2 + d.x, c.height/1.8 + d.y, size, 0, 2*Math.PI, false);
// // 		ctx.fill()
		
// // 		tmpObj.rotation = oRotation+120
// // 		d = angleTools.getOneFrameDistance(tmpObj, angleTools.getDistance(center, m) / 100)
		
// // 		ctx.beginPath()
// // 		ctx.fillStyle = '#0F0'
// // 		ctx.fillText(logoText, 	c.width/2 + d.x, c.height/1.8 + d.y, size, 0, 2*Math.PI, false);
// // 		ctx.fill()
		
// // 		tmpObj.rotation = oRotation+240
// // 		d = angleTools.getOneFrameDistance(tmpObj, angleTools.getDistance(center, m) / 100)
		
// // 		ctx.beginPath()
// // 		ctx.fillStyle = '#00F'
// // 		ctx.fillText(logoText, 	c.width/2 + d.x, c.height/1.8 + d.y, size, 0, 2*Math.PI, false);
// // 		ctx.fill()
// // 	}

// // 	// Animation loop
// // 	;(function animloop(){
// // 		requestAnimationFrame(animloop)
// // 		render()
// // 	})()
// // }







// function logoText(){

// 	var c = document.querySelector('#textLogo')
// 	//var box = document.querySelector('#mainTitle')
// 	var ctx = c.getContext('2d')
// 	var m = {x: 0, y: 0}
// 	var ratio = window.devicePixelRatio || 1

// 	var aspectRatio = 0.2;    // height:width = 3:2
// 	c.height = c.width * aspectRatio;

// 	//c.width = $('.mainTitle').width();
// 	//c.height = c.width/5;
// 	//console.log(c.width);

// 	var logoText = "E  R  I  C  B  I  N  T  N  E  R  .  C  O  M";
// 	var logoStyle = "400 13vw \'Dosis\'";


// 	// Handle canvas size
// 	window.addEventListener('resize', function() {
	
// 		 //c.width = $('.mainTitle').width();
// 		// c.height = c.width/5;
// 		// ctx.width = $('.mainTitle').width()
// 		// ctx.height = $('.mainTitle').height()

// 		//c.height = c.width * aspectRatio;

// 	//function resize(canvas) {
// 	  // Lookup the size the browser is displaying the canvas.
// 	  var displayWidth  = c.clientWidth;
// 	  var displayHeight = c.clientHeight;
	 
// 	  // Check if the canvas is not the same size.
// 	  if (c.width  != displayWidth ||
// 	      c.height != displayHeight) {
	 
// 	    // Make the canvas the same size
// 	    c.width  = displayWidth;
// 	    c.height = displayHeight;
// 	  }
// 	//}
		
// 		ctx.globalCompositeOperation = 'screen'
// 	})

// 	window.dispatchEvent(new Event('resize'))

// 	// Handle mouse position
// 	window.addEventListener('mousemove', function(e) {
// 		//m.x = e.clientX
// 		//m.y = e.clientY
// 		m.x = window.innerWidth -  e.clientX;
// 		m.y = window.innerHeight - e.clientY;
// 		//console.log(window.innerWidth - m.x)
// 	})

// 	// angletools
// 	var angleTools = {
// 		getAngle: function(obj1, obj2) {
// 			var dX = obj2.x - obj1.x
// 			var dY = obj2.y - obj1.y
// 			return Math.atan2(dY, dX) / Math.PI * 180
// 		},
// 		getDistance: function(obj1, obj2) {
// 			var dx = obj1.x - obj2.x
// 			var dy = obj1.y - obj2.y
// 			return Math.sqrt(dx * dx + dy * dy)
// 		},
// 		moveOnAngle: function(obj, distance) {
// 			var vel = this.getOneFrameDistance(obj, distance)
// 			obj.x += vel.x
// 			obj.y += vel.y
// 		},
// 		getOneFrameDistance: function(obj, speed) {
// 			return {
// 				x: speed * Math.cos(obj.rotation * Math.PI / 180),
// 				y: speed * Math.sin(obj.rotation * Math.PI / 180)
// 			}
// 		}
// 	}

// 	// Rendering frames
// 	function render() {
// 		ctx.clearRect(0, 0, c.width, c.height)
// 		//console.log("c.width = " + c.width);
// 		//console.log("c.height = " + c.height);
// 		var size = 300 * ratio
// 		var center = {x: c.width / (ratio * 2), y: c.height }// / (ratio * 2)
		
// 		var oRotation = angleTools.getAngle(center, m)
		
// 		var tmpObj = {rotation: oRotation}
// 		var d = angleTools.getOneFrameDistance(tmpObj, angleTools.getDistance(center, m) / 100)
		
// 		ctx.font = logoStyle;
// 		ctx.textAlign = "center";

// 		ctx.beginPath()
// 		ctx.fillStyle = '#f00'
// 		ctx.fillText(logoText, c.width/2 + d.x, c.height/2 + d.y, size, 0, 2*Math.PI, false);
// 		ctx.fill()
		
// 		tmpObj.rotation = oRotation+120
// 		d = angleTools.getOneFrameDistance(tmpObj, angleTools.getDistance(center, m) / 100)
		
// 		ctx.beginPath()
// 		ctx.fillStyle = '#0F0'
// 		ctx.fillText(logoText, 	c.width/2 + d.x, c.height/2 + d.y, size, 0, 2*Math.PI, false);
// 		ctx.fill()
		
// 		tmpObj.rotation = oRotation+240
// 		d = angleTools.getOneFrameDistance(tmpObj, angleTools.getDistance(center, m) / 100)
		
// 		ctx.beginPath()
// 		ctx.fillStyle = '#00F'
// 		ctx.fillText(logoText, 	c.width/2 + d.x, c.height/2 + d.y, size, 0, 2*Math.PI, false);
// 		ctx.fill()
// 	}



// 	// Animation loop
// 	;(function animloop(){
// 		requestAnimationFrame(animloop)
// 		render()
// 	})()
// }


// $(function() {
//   logoText();
// });




var c = document.querySelector('#textLogo')
var ctx = c.getContext('2d')
var m = {x: 0, y: 0}
//var ratio = 1 
var ratio = window.devicePixelRatio || 1

var logoText;
var logoStyle;

var offsetAmount = 200/ratio; // lower number = more offset
var winW = window.innerWidth;
var winH = window.innerHeight;
// Handle canvas size
window.addEventListener('resize', function() {
	if(window.innerWidth != winW){	
		//winW = window.innerWidth;
		makeLogo();	
	}
})
window.addEventListener('orientationchange', function() {
		makeLogo();	
})
function makeLogo(){
  	
		winW = window.innerWidth;	
	    winH = window.innerHeight;
	   // ratio = window.devicePixelRatio || 1



	    var vWidth;
	    var vHeight;
	    
		// if mobile (portrait)
		if (winW < 600) {
			//
			// if (ratio === 1) {
			// 	vWidth = Math.floor(winW/14.25) + "px"
			// } else {
			// 	//vWidth = Math.floor(winW/7.125) + "px"
			// 	vWidth = Math.floor(winW/(14.25/ratio)) + "px"
			// }

			vWidth = Math.floor(winW/(14.25/ratio)) + "px";
			
			logoStyle = "600 "+vWidth+" \'Dosis\'";
			logoText = "E  R  I  C  B  I  N  T  N  E  R  .  C  O  M";
		}
		if (winW < 600 && !$('nav').hasClass('open') ) {
			logoText = "       E B                                                                 .";
		}
		// if (winH < 500 && window.matchMedia("(orientation: landscape)").matches ) {
		// 	offsetAmount = 200/(ratio*2);
		// 	logoStyle = "900 "+vWidth*1.91667+" \'Dosis\'";
		// 	logoText = "  E R I C B I N T N E R . C O M";
		// }


		//var width = $(window).width();
		//$(window).on('resize', function(){

		//       console.log(width);
		 
		//});
		// if tablet (LANDSCAPE) or small desktop
		// if (winW > 600 && winW < 1199.9 && winH < winW ) {//1199.9
		// 	//vHeight = winH/22 + "px"
		// 	//logoStyle = "400 "+vHeight+" \'Dosis\'";
		// 	vWidth = winW/17.5 + "px"
		// 	logoStyle = "500 "+vWidth+" \'Dosis\'";
		// }
		// // if tablet (PORTRAIT)
		// if (winW > 600 && winW < 1199.9 && winH > winW ) {
		// 	//vHeight = winH/20 + "px"
		// 	//logoStyle = "400 "+vHeight+" \'Dosis\'"; 
		// 	vWidth = winW/33 + "px"
		// 	logoStyle = "500 "+vWidth+" \'Dosis\'";
		// }


		if (winW > 600 && winW < 1300 ) {//1199.9
			//vHeight = winH/22 + "px"
			//logoStyle = "400 "+vHeight+" \'Dosis\'";
			vWidth = Math.floor(winW/(26/ratio)) + "px"
			logoStyle = "600 "+vWidth+" \'Dosis\'";
			logoText = "E  R  I  C  B  I  N  T  N  E  R  .  C  O  M";
		}
		if (winH < 500 && window.matchMedia("(orientation: landscape)").matches ) {
			offsetAmount = 200/(ratio*2);
			vWidth = Math.floor(winW/(22.5/ratio)) + "px"
			logoStyle = "600 "+vWidth+" \'Dosis\'";
			logoText = "E R I C B I N T N E R . C O M";
		}
		
		// if large screen
		if (winW > 1300) {
			vWidth = Math.floor(40*ratio) + "px"
			logoStyle = "600 "+vWidth+" \'Dosis\'";
			logoText = "E   R   I   C   B   I   N   T   N   E   R   .   C   O   M";
		}
		//console.log(winW);  

		var container = document.getElementById('mainTitle')
		c.width = container.clientWidth * ratio
		c.height = container.clientHeight * ratio
		
		
		ctx.globalCompositeOperation = 'screen'
  	
}


// $('nav a').on( 'click', function() {
// 	if ($('body').hasClass('navOpen')) {
// 		logoText = "E B                                                        .";
// 	} else {
// 		logoText = "E  R  I  C  B  I  N  T  N  E  R  .  C  O  M";
// 	}

// });


//window.dispatchEvent(new Event('resize'))
makeLogo()



// Handle mouse position
window.addEventListener('mousemove', function(e) {
		m.x = e.clientX
 		m.y = e.clientY
 		//m.x = window.innerWidth -  e.clientX;
 		//m.y = window.innerHeight - e.clientY;
})

window.addEventListener("touchmove", function (e) {
				var touch = e.touches[0];
				var mouseEvent = new MouseEvent("mousemove", {
					clientX: touch.clientX,
					clientY: touch.clientY
				});
				window.dispatchEvent(mouseEvent);
 }, false);

// var clientXT, clientYT;

// window.addEventListener('touchstart', function(e) {
//   // Cache the client X/Y coordinates
//   clientXT = e.touches[0].clientX;
//   clientYT = e.touches[0].clientY;
//   //m.x = e.touches[0].clientX;
//   //m.x = e.touches[0].clientY;
// });

// window.addEventListener('touchend', function(e) {
//   var deltaX, deltaY;

//   // Compute the change in X and Y coordinates. 
//   // The first touch point in the changedTouches
//   // list is the touch point that was just removed from the surface.
//   deltaX = e.changedTouches[0].clientX - clientXT;
//   deltaY = e.changedTouches[0].clientY - clientYT;

//   m.x = e.deltaX
//   m.y = e.deltaY

// });





// angletools
var angleTools = {
	getAngle: function(obj1, obj2) {
		var dX = obj2.x - obj1.x
		var dY = obj2.y - obj1.y
		return Math.atan2(dY, dX) / Math.PI * 180
	},
	getDistance: function(obj1, obj2) {
		var dx = obj1.x - obj2.x
		var dy = obj1.y - obj2.y
		return Math.sqrt(dx * dx + dy * dy)
	},
	moveOnAngle: function(obj, distance) {
		var vel = this.getOneFrameDistance(obj, distance)
		obj.x += vel.x
		obj.y += vel.y
	},
	getOneFrameDistance: function(obj, speed) {
		return {
			x: speed * Math.cos(obj.rotation * Math.PI / 180),
			y: speed * Math.sin(obj.rotation * Math.PI / 180)
		}
	}
}

// Rendering frames
function render() {
	ctx.clearRect(0, 0, c.width, c.height)
	
	var size = 1100 * ratio
	var center = {x: c.width / (ratio * 2), y: c.height / (ratio * 2)}
	
	var oRotation = angleTools.getAngle(center, m)
	
	var tmpObj = {rotation: oRotation}
	var d = angleTools.getOneFrameDistance(tmpObj, angleTools.getDistance(center, m) / offsetAmount)
	
	ctx.font = logoStyle;
	ctx.textAlign = "center";
	ctx.beginPath()
	ctx.fillStyle = '#f00'
	
	ctx.fillText(logoText, c.width/2 + d.x, c.height/1.5 + d.y, size, 0, 2*Math.PI, false);
	ctx.fill()
	
	tmpObj.rotation = oRotation+120
	d = angleTools.getOneFrameDistance(tmpObj, angleTools.getDistance(center, m) / offsetAmount)
	
	ctx.beginPath()
	ctx.fillStyle = '#0F0'
	ctx.fillText(logoText, 	c.width/2 + d.x, c.height/1.5 + d.y, size, 0, 2*Math.PI, false);
	ctx.fill()
	
	tmpObj.rotation = oRotation+240
	d = angleTools.getOneFrameDistance(tmpObj, angleTools.getDistance(center, m) / offsetAmount)
	
	ctx.beginPath()
	ctx.fillStyle = '#00F'
	ctx.fillText(logoText, 	c.width/2 + d.x, c.height/1.5 + d.y, size, 0, 2*Math.PI, false);
	ctx.fill()
}

clientX: winW/2;
clientY: winH;

// Animation loop
;(function animloop(){
	requestAnimationFrame(animloop)
	render()
})()