//clouds.js

var state2;


function runCloudsMobile(){
// console.log('on: runCloudsMobile '+ state2);


var bgImg = $('.mobileClouds'),

      rotX = 0,
      rotY = 0,

      wrapperWidth = $('body').width(),
      wrapperHeight = $('body').height(),

      bgImgWidth = bgImg.width(),
      bgImgHeight = bgImg.height(),

      moveMaxHeight = (bgImgHeight - wrapperHeight),
      moveMaxWidth = (bgImgWidth - wrapperWidth);




  if ( window.DeviceMotionEvent ) { 

 		window.ondeviceorientation = function(event) {

		      // fix if orientation is upside-down
		      var fix;
		      if (event.gamma < 0) {
				fix = "-1";
			  } else {
			  	fix = "1";
			  }

			  // swap [beta gamma] if orientation is landscape
		      if(window.matchMedia("(orientation:portrait)").matches){ 
				beta =  Math.abs(event.beta * 7) - 200;
		      	gamma = event.gamma * 3;
		      } else {
		      	beta =  Math.abs(event.gamma * 7) - 200;
		      	gamma = (fix*event.beta) * 3;
		      }

		      setTimeout(function(){
		        normalizeData(gamma, beta)
		      }, 50)
		} 


	//} 


	// if ($('nav a.level-1').hasClass('selected')) {
	// 	window.addEventListener("orientationchange", function(event) {
	// 	      beta = event.beta * 1.667;
	// 	      gamma = event.gamma * 3;
	// 	      setTimeout(function(){
	// 	        normalizeData(gamma, beta)
	// 	      }, 50)
	// 	});
 //  	} else {
 //         window.removeEventListener('deviceorientation');
 //   	} 



  }

  function normalizeData(_g, _b){
    
    b = Math.round(_b);
    g = Math.round(_g);
    
    rotY += (g - rotY) / 5;
    rotX += (b - rotX) / 5;

    //bgImg.css('transform', 'translateX('+rotY+'px) translateY('+rotX+'px)');


    if ($('nav a.level-1').hasClass('selected')) {
    	bgImg.css('transform', 'translateX('+rotY+'px) translateY('+rotX+'px)');
    } else {
       return false
    }


  } 

  state2 = 'ready';
  return state2;


}





if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

function runClouds(){
	 //console.log('on: runClouds '+ state2);
			var container;
			var camera, scene, renderer;
			var mesh, geometry, material;

			var mouseX = 0, mouseY = 0;
			var start_time = Date.now();

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
			//var windowHalfY = 1500;
			var winWi = window.innerWidth;

			init(state2);

			function init(state2) {

				container = document.createElement( 'div' );
				container.setAttribute("id", "cloudContainer");
				//document.body.appendChild( container );
				$('#fourth .place3D.stop1').append(container);

				// Bg gradient

				var canvas = document.createElement( 'canvas' );
				canvas.width = 32;
				canvas.height = window.innerHeight*3;
				//canvas.height = 3000;

				var context = canvas.getContext( '2d' );

				context.fillStyle = "rgba(255, 255, 255, 0)";

				camera = new THREE.PerspectiveCamera( 30, window.innerWidth / (window.innerHeight*3), 1, 3000 );
				camera.position.z = 600000;

				scene = new THREE.Scene();

				geometry = new THREE.Geometry();

				var texture = THREE.ImageUtils.loadTexture( 'img/cloud.png', null, animate );
				texture.magFilter = THREE.LinearMipMapLinearFilter;
				texture.minFilter = THREE.LinearMipMapLinearFilter;

				var fog = new THREE.Fog( 0x70b7e8, - 100, 30000 );

				material = new THREE.ShaderMaterial( {

					uniforms: {

						"map": { type: "t", value: texture },
						"fogColor" : { type: "c", value: fog.color },
						"fogNear" : { type: "f", value: fog.near },
						"fogFar" : { type: "f", value: fog.far },

					},
					vertexShader: document.getElementById( 'vs' ).textContent,
					fragmentShader: document.getElementById( 'fs' ).textContent,
					depthWrite: false,
					depthTest: false,
					transparent: true

				} );

				var plane = new THREE.Mesh( new THREE.PlaneGeometry( 64, 64 ) );

				for ( var i = 0; i < 8000; i++ ) {

					plane.position.x = Math.random() * 1000 - 500;
					plane.position.y = - Math.random() * Math.random() * 90 + 55;
					plane.position.z = i;
					plane.rotation.z = Math.random() * Math.PI;
					plane.scale.x = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.03125;

					THREE.GeometryUtils.merge( geometry, plane);

					// if(i === 8000) {
					//     state2 = 'ready';
					// 	return state2;
					// }

				}

				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );

				mesh = new THREE.Mesh( geometry, material );
				mesh.position.z = - 8000;
				scene.add( mesh );
				renderer = new THREE.WebGLRenderer( { antialias: false, alpha: true} );
				renderer.setSize( window.innerWidth, window.innerHeight*3 );
				container.appendChild( renderer.domElement );

				//
				window.addEventListener( 'resize', onWindowResize, false );

				document.addEventListener( 'mousemove', onDocumentMouseMove, false ); 
				// cant get script to effectively update state on complete

				//document.addEventListener( 'mousemove', onDocumentMouseMove, false ); 
				// setTimeout(function(){

				// 		if ( $('nav').find('a.selected').hasClass('level-1') ) {
				// 				console.log($('nav').find('a.level-1'));
				// 				console.log('Skills');
				// 				document.addEventListener( 'mousemove', onDocumentMouseMove, false ); 
				// 		} else {
				// 				//document.removeEventListener( 'mousemove', onDocumentMouseMove, false ); 
				// 				console.log('NOT Skills');
				// 				console.log($('nav').find('a.level-1'));
				// 		}
					
				// }, 20000);
				
						// if ( $('nav').find('a.selected').hasClass('level-1') ) {
						// 		console.log($('nav').find('a.level-1'));
						// 		console.log('Skills');
						// 		document.addEventListener( 'mousemove', onDocumentMouseMove, false ); 
						// } else {
						// 		//document.removeEventListener( 'mousemove', onDocumentMouseMove, false ); 
						// 		console.log('NOT Skills');
						// 		console.log($('nav').find('a.level-1'));
						// }

				
				//return state2;

			}

			function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX ) * 0.25;
				mouseY = ( event.clientY - windowHalfY ) * 0.05;

			}

			$('nav a.level-1').click(function() { 
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				//window.addEventListener( 'resize', onWindowResize, false );
			});
			$('nav a:not(.level-1)').click(function() { 
				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				//window.removeEventListener( 'resize', onWindowResize, false );
			});
			

			function onWindowResize( event ) {

			    	camera.aspect = window.innerWidth / (window.innerHeight*3);
					camera.updateProjectionMatrix();

					renderer.setSize( window.innerWidth, window.innerHeight*3 );

			}



			function animate() {

				requestAnimationFrame( animate );

				position = ( ( Date.now() - start_time ) * 0.0015 ) % 600;

				camera.position.x -= ( mouseX + camera.position.x ) * 0.001;
				camera.position.y -= ( - mouseY + camera.position.y ) * 0.005;
				camera.position.z = - position + 8500;

				renderer.render( scene, camera );

			}
			// function initState() {
			// 	//animate();

			// 			if ( $('nav').find('a.selected').hasClass('level-1') ) {
			// 					console.log($('nav').find('a.level-1'));
			// 					console.log('Skills');
			// 					document.addEventListener( 'mousemove', onDocumentMouseMove, false ); 
			// 			} else {
			// 					//document.removeEventListener( 'mousemove', onDocumentMouseMove, false ); 
			// 					console.log('NOT Skills');
			// 					console.log($('nav').find('a.level-1'));
			// 			}



			// }				
			state2 = 'ready';
			return state2;
}









function checkCloudSize(){

  // if (window.matchMedia("(max-width: 599.9px)").matches) {
  //      $("#cloudContainer").remove();
  //      runCloudsMobile();
  //      //console.log(window.matchMedia("(max-width: 599.9px)").matches);

  // } else {
  //      runClouds();
  //      //console.log('NOT MOBILE');
  // }


	if ( $('html').hasClass('touch') ){
			state2 = 'notReady';
		   	//console.log('on: test touch '+ state2);
		   	$("#cloudContainer").remove();
	       	$.when( runCloudsMobile() ).then(function( state2 ) {
			  //state2 = 'ready';
			  return state2;
			});

	} else if ( $('html').hasClass('webgl') ){
			state2 = 'notReady';
			//console.log('on: test webgl '+ state2);
	       	$(".mobileClouds").remove();
	       	$.when( runClouds(state2) ).then(function( state2 ) {
			  //console.log("THEN "+state2);
			  //document.addEventListener( 'mousemove', onDocumentMouseMove, false );
			  return state2;
			});

	} else {
			//state2 = 'notReady';
			//$.when( runCloudsMobile() ).then(function( ) {
			  $("#cloudContainer").remove();
			  $(".mobileClouds").remove();
			  //console.log('dont make animation '+ state2);
			  state2 = 'ready';
			  return state2;
			//});
	}


}

//runClouds();










