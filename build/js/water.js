
// Water Springs
//
// Made by BASICS09
// http://basics09.de
//
// https://github.com/hirasso/water-spring
//

(function($){

function water(){
	//"use strict";

	var mypaper;

	//$(document).ready(function() {

		// initialize the paper animation
		mypaper = new PaperWrap( $('#water')[0] );
		$('#water').css('display','none');
		
		
	//});

	function PaperWrap( canvasElement ) {

		var mypaper = new paper.PaperScope();
		mypaper.setup( canvasElement );
		//mypaper.style.width = window.innerWidth+"px";
 		//mypaper.style.height = window.innerHeight+"px";

    var view = mypaper.view,
      Point = mypaper.Point,
      Path = mypaper.Path,
      Group = mypaper.Group,
      Tool = mypaper.Tool,
      Item = mypaper.Item;

    // Values for the spring
    var values = {
      friction: 0.09,
      timeStep: 0.01,
      mass: 1.3
    };
    values.invMass = 1 / values.mass;
    var springs = [];

    var pendulumForce = (0.33 - values.friction * values.timeStep)*1;

    var Spring = function(a, b, strength, restLength) {
      this.a = a;
      this.b = b;
      this.restLength = restLength;
      this.strength = strength*4;
      this.mamb = values.invMass * values.invMass;
    };


     

    Spring.prototype.update = function() {
      var delta = this.b.subtract( this.a );
      var dist = delta.length;
      var normDistStrength = (dist - this.restLength) / (dist * this.mamb) * this.strength;
      delta = delta.multiply( normDistStrength * values.invMass * 0.5);
      if ( !this.a.fixed ) {
        this.a.y += delta.y*1.15;
      }
      if ( !this.b.fixed ) {
        this.b.y -= delta.y*1.13;
      }
    };

    // Surface
    var surface = new Path();

        
    function createSurface() {
      if( surface ) {
        surface.remove();
      }
      // if( rectA ) {
      //   rectA.remove();
      // }
      surface = new Path();
      // surface.fullySelected = true;
      //surface.fillColor = 'rgba(31, 138, 148, 0.22)';

      surface.fillColor = {
	        gradient: {
	            //stops: ['rgba(31, 138, 148, 0.22)', 'rgba(45,31,17,0.95)']
	            stops: ['rgba(31, 138, 148, 0.4)', 'rgba(40,91,170, 0.80)', 'rgba(42,26,140,0.95)', 'rgba(42,26,140,1)']
	        },
	        origin: [0,($(window).height()/1.25)],
	        destination: [0,$(window).height()]
	    }



	// var surface = new Path.Rectangle({
	//     //topLeft: topLeft,
	//     //bottomRight: bottomRight,
	//     // Fill the path with a gradient of three color stops
	//     // that runs between the two points we defined earlier:
	//     fillColor: {
	//         gradient: {
	//             stops: ['rgba(31, 138, 148, 0.22)', 'brown']
	//         },
	//         origin: 0,
	//         destination: 100
	//     }
	// });

      var margin = -300;
      var waterDepth = view.size.height/1.25;

      var calc;

      if (window.matchMedia("(max-width: 599.9px)").matches) {
	       calc = 1.85;
	  } else {
	       calc = 1.25;
	  }

      surface.add( new Point(margin, view.size.height / calc) );
      surface.add( new Point(view.size.width - margin, view.size.height / calc) );

      var segmentAmount = 30;
      var segmentWidth = Math.floor( surface.length / segmentAmount) ;
      // Add Segments every 100 px
      surface.flatten(segmentWidth);

      // Save the point positions in the point objects
      for( var i = 0; i < surface.segments.length; i++ ) {
        var segment = surface.segments[i];
        var point = segment.point;
        point.anchor = new Point(point.x, point.y);
        
        point.px = point.x;
        point.py = point.y;

        point.fixed = false;

        if( i > 0 ) {
          var spring = new Spring(segment.previous.point, point, 0.25, segmentWidth * 0.5);
    //       console.log(view.size.height);
    //       var rectA = new Path.Rectangle({
		  //   point: [-20+(i*(view.size.height/30)), (view.size.height-550)],
		  //   size: [10, 550],
		  //   strokeColor: 'rgba(100,195,100, 0.3)',
		  //   strokeWidth: 2, 
		  //   fillColor:'rgba(100,255,100, 0.5)'
		  // });
          springs.push(spring);
        }

      }
      surface.firstSegment.point.fixed = true;
      surface.lastSegment.point.fixed = true;


      surface.add( new Point(view.size.width - margin, view.size.height / 2 + waterDepth) );
      surface.lastSegment.point.fixed = true;
      surface.add( new Point(margin, view.size.height / 2 + waterDepth) );
      surface.lastSegment.point.fixed = true;
      surface.closePath();
    }
    createSurface();

    // Mouse Path
    var mousePos = view.center.add( new Point(200, 100) );
    var lastMousePos = view.center.add( new Point(-300, -100) );

    var mousePath = new Path( lastMousePos, mousePos );
        mousePath.strokeColor = 'rgba(0,0,0,0)';
        mousePath.fullySelected = false;
    
    var mouseVector = new Point(0,0);

    function resetLastMousePos() {
      
      //setTimeout( resetLastMousePos, 200 );
    }
    resetLastMousePos();

    var tool = new Tool();
    tool.onMouseMove = function( event ) {
      mousePos = event.point;
    };

    view.onFrame = function(event) {

      // Adjust the Mouse Path
      //lastMousePos = lastMousePos.add( mousePos.subtract( lastMousePos ).divide(12) );
      mousePath.removeSegments();
      mousePath.addSegments( [lastMousePos, mousePos] );
      mouseVector = mousePos.subtract( lastMousePos );

      lastMousePos = mousePos;
      // disable the x coordinate on the vector
      mouseVector.x = 0;

      for( var i = 0; i < surface.segments.length; i++ ) {
        if( i > 0 && i < surface.segments.length - 1 ) {
          //surface.segments[i].selected = false;
        } else {
          //surface.segments[i].selected = true;
        }
        // surface.segments[i].selected = true;
        
      }
      //console.log( mousePath.angle );
      var intersections = surface.getIntersections( mousePath );
      if( intersections.length ) {
        var hitLocation = intersections[0];
        var segment = hitLocation.segment || hitLocation._segment1;

        if( "undefined" === typeof segment ) {
          segment = hitLocation.segment1;
        }
        
        if( !segment.point.fixed  ) {
          segment.point = segment.point.add( mouseVector.divide(1.01) );
        }
        var next = segment.next;
        var previous = segment.previous;
        if( next && !next.point.fixed) {
          next.point = next.point.add( mouseVector.divide(6) );
        }
        if( previous && !previous.point.fixed) {
          previous.point = previous.point.add( mouseVector.divide(6) );
        }
      }


      var surfaceLength = surface.firstSegment.point.getDistance( surface.lastSegment.point );
      var maxDist = view.size.height / 2;

      for( i = 0; i < surface.segments.length; i++ ) {
        var point = surface.segments[i].point;
        var anchor = point.anchor;

        if( !point.fixed ) {

          var dy = (point.y - point.py) * (pendulumForce/10.095);
          point.py = point.y;
          point.y = Math.min( point.anchor.y + maxDist, Math.max(point.anchor.y - maxDist, point.y + dy) );

          
          // Uncomment this if you want to have a more jelly-like behaviour
          // point.y += ( anchor.y - point.y) / 80;
        }
      }

      for (var j = 0; j < springs.length; j++) {
        springs[j].update();
      }

      surface.smooth();
      

    };

    view.onResize = function() {
      createSurface();
    };

    var fit = this.fit = function() {

      var $canvas = $( view.element );

      var canvasWidth =  $(window).width();
      var canvasHeight = $(window).height();

      //var canvasHeight;
      //var calc =  $(window).height();
      //var canvasHeight =  calc*1.5;
   //    if (window.matchMedia("(max-width: 599.9px)").matches) {
	      
	  // } else {
	  //     canvasHeight =  $(window).height();
	  // }
      

      $canvas
        .attr("width", canvasWidth)
        .attr("height", canvasHeight);
      
      mypaper.view.viewSize = new mypaper.Size( canvasWidth, canvasHeight);
    };
	}
  
  // Utilities

  function fitPaperWraps() {
    mypaper.fit();
    $('#water').css('display','block');
    //alert('WATER');
  }

  $(window).resize(function() {
    waitForFinalEvent(fitPaperWraps, 150, "resizing-papers");
  });


  var waitForFinalEvent = (function () {
    var timers = {};
      return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
    };
  })();


window.dispatchEvent(new Event('resize'));


}
water();
})(jQuery);













// // Code modified from Paper.js example http://paperjs.org/examples/future-splash/

// window.onload = function() {
//         // Get a reference to the canvas object
//         //var view = document.getElementById('water');
//         // Create an empty project and a view for the canvas:
        
//         //paper.setup(view);



//         var view = document.getElementById("water");
// 		view.style.width = window.innerWidth+"px";
// 		view.style.height = window.innerHeight+"px";
// 		//Install paper to the global scope
// 		paper.install(window);
// 		paper.setup("water");
        

// 	var values = {
// 		friction: 0.08,
// 		timeStep: 0.01,
// 		amount: 30,
// 		mass: 10,
// 		count: 0
// 	};

// 	values.invMass = 1 / values.mass;

// 	var path, springs;
// 	var size = view.size * [1.2, 1];


// 	var Spring = function(a, b, strength, restLength) {
// 		this.a = a;
// 		this.b = b;
// 		this.restLength = restLength || 80;
// 		this.strength = strength ? strength : 0.55;
// 		this.mamb = values.invMass * values.invMass;
// 	};

// 	Spring.prototype.update = function() {
// 		var delta = this.b - this.a;
// 		var dist = delta.length;
// 		var normDistStrength = (dist - this.restLength) /
// 				(dist * this.mamb) * this.strength;
// 		delta.y *= normDistStrength * values.invMass * 0.3;
// 		if (!this.a.fixed)
// 			this.a.y += delta.y*3.5;
// 		if (!this.b.fixed)
// 			this.b.y -= delta.y*3.5;
// 	};


// 	function createPath(strength) {
// 		var path = new Path({
// 			fillColor: 'rgba(41, 128, 138, 0.5)'
// 		});
// 		springs = [];
// 		for (var i = 0; i <= values.amount; i++) {
// 			var segment = path.add(new Point(i / values.amount, 0.5) * size);
// 			var point = segment.point;
// 			if (i == 0 || i == values.amount)
// 				point.y += size.height;
// 			point.px = point.x;
// 			point.py = point.y;
// 			// The first two and last two points are fixed:
// 			point.fixed = i < 2 || i > values.amount - 2;
// 			if (i > 0) {
// 				var spring = new Spring(segment.previous.point, point, strength);
// 				springs.push(spring);
// 			}
// 		}
// 		path.position.x -= size.width / 4;
// 		return path;
// 	}

// 	function onResize() {
// 		if (path)
// 			path.remove();
// 		size = view.bounds.size * [2, 1];
// 		path = createPath(0.1);
// 	}

// 	function onMouseMove(event) {
// 		var location = path.getNearestLocation(event.point);
// 		var segment = location.segment;
// 		var point = segment.point;

// 		if (!point.fixed && location.distance < size.height / 4) {
// 			var y = event.point.y;
// 			point.y += (y - point.y) / 6;
// 			if (segment.previous && !segment.previous.fixed) {
// 				var previous = segment.previous.point;
// 				previous.y += (y - previous.y) / 24;
// 			}
// 			if (segment.next && !segment.next.fixed) {
// 				var next = segment.next.point;
// 				next.y += (y - next.y) / 24;
// 			}
// 		}
// 	}

// 	function onFrame(event) {
// 		updateWave(path);

// 	}

// 	function updateWave(path) {
// 		var force = 1 - values.friction * values.timeStep * values.timeStep;
// 		for (var i = 0, l = path.segments.length; i < l; i++) {
// 			var point = path.segments[i].point;
// 			var dy = (point.y - point.py) * (force/1.5);
// 			point.py = point.y;
// 			point.y = Math.max(point.y + dy, 0);
// 		}

// 		for (var j = 0, l = springs.length; j < l; j++) {
// 			springs[j].update();
// 		}

// 		path.smooth({ type: 'continuous' });
// 	}

// // function onKeyDown(event) {
// // 	if (event.key == 'space') {
// // 		path.fullySelected = !path.fullySelected;
// // 		path.fillColor = path.fullySelected ? null : 'black';
// // 	}
// // }
// }