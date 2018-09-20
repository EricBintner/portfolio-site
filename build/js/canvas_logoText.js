


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

			vWidth = Math.floor(winW/(14.25/ratio)) + "px";
			
			logoStyle = "600 "+vWidth+" \'Dosis\'";
			logoText = "E  R  I  C  B  I  N  T  N  E  R  .  C  O  M";
		}
		if (winW < 600 && !$('nav').hasClass('open') ) {
			logoText = "       E B                                                                 .";
		}


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