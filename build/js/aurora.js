
function runAurora(){
			var auroraContainer;
			var camera, scene, renderer;
			var mesh,texture, geometry, material;
			var clock = new THREE.Clock();
			var mouseX = 0, 
				mouseY = 0;

			var worldWidth = 256, 
				worldDepth = 96;
			var worldHalfWidth = worldWidth / 3, 
				worldHalfDepth = worldDepth / 3;
				
			var winWa = window.innerWidth;

			init2();
			generateTexture(); 	
			animate();

			function init2(){
				scene = new THREE.Scene();
				auroraContainer = document.createElement('div');
				auroraContainer.setAttribute("id", "auroraContainer");
				$('#third .place3D.stop4').append(auroraContainer);
				
				camera = new THREE.PerspectiveCamera( 105, window.innerWidth / (window.innerHeight*2.75), 0.01, 50000 );
			    camera.position.z = 0;
				renderer = new THREE.WebGLRenderer({alpha: true});
				//renderer.setSize(760,700);
				renderer.setSize( window.innerWidth, window.innerHeight*3 );
				auroraContainer.appendChild(renderer.domElement);
				
				//document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				window.addEventListener( 'resize', onWindowResize, false );
				if ( $('a.level-4').hasClass('.selected') ) { 
					document.addEventListener( 'mousemove', onDocumentMouseMove, false ); 
					//window.addEventListener( 'resize', onWindowResize, false );
				}

			}

			function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - worldWidth/2 ) * 0.25;
				mouseY = ( event.clientY - worldDepth/2 ) * 0.05;

			}
			$('nav a.level-4').click(function() { 
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				//window.addEventListener( 'resize', onWindowResize, false );
				//$('#auroraContainer').css('display','block');
				$('#auroraContainer').fadeIn(0);
			});
			$('nav a:not(.level-4)').click(function() { 
				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				//window.removeEventListener( 'resize', onWindowResize, false );
				//$('#auroraContainer').css('display','none');
				$('#auroraContainer').delay(1000).fadeOut(0);
			});

			// function onWindowResize( event ) {

			// 	camera.aspect = window.innerWidth / (window.innerHeight*2.75);
			// 	camera.updateProjectionMatrix();

			// 	renderer.setSize( window.innerWidth, window.innerHeight*3 );

			// }
			function onWindowResize( event ) {
			  if(window.innerWidth != winWa){	
			  	winWa = window.innerWidth;
				//clearTimeout(window.resizedFinished);
			    //window.resizedFinished = setTimeout(function(){

					camera.aspect = window.innerWidth / (window.innerHeight*2.75);
					camera.updateProjectionMatrix();

					renderer.setSize( window.innerWidth, window.innerHeight*3 );

			    //}, 250);
			  }

			}

			function generateTexture(){
				geometry = new THREE.PlaneGeometry( 1000, 40, worldWidth - 57, worldDepth - 56);
        		geometry.rotateZ( 1.4 );
				geometry.rotateX( - Math.PI / 7 );
				for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {
					geometry.vertices[ i ].y = 25 * Math.sin( i / 5  );
				}
				//var canvas = document.createElement("canvas");
				//canvas.width = window.innerWidth;
				//canvas.height = window.innerHeight;
				//var context = canvas.getContext( '2d' );
				var texture = new THREE.TextureLoader().load( "img/aurora2.png" );
				texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
				texture.repeat.set( 10,37);
				material = new THREE.MeshBasicMaterial( { color: 0x22bb77, transparent:true,  opacity: 0.167, map: texture } );
				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );

			}
			function animate() {
				// Render the scene.
				requestAnimationFrame( animate );
				camera.position.x -= ( (mouseX/10) + camera.position.x ) * 0.0005;
				camera.position.y -= ( - (mouseY/10) + camera.position.y ) * 0.005;
				render();
			}
			function render() {
				var delta = clock.getDelta(),
					time = clock.getElapsedTime() * 1;
				for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {
					geometry.vertices[ i ].y = 20 * Math.sin( i / 5 + ( time + i ) / 6 );
				}
				mesh.geometry.verticesNeedUpdate = true;			
				renderer.render( scene, camera );
			}

}


// function clearAurora(){
//   console.log('fadingOut');
//   $("#auroraContainer").fadeOut(2000, function (){
// 		  $("#auroraContainer").remove();
// 		  console.log('DONE fadingOut');
// 	} );
  	
// 	// function clearA(){
// 	// 	  $("#auroraContainer").remove();
// 	// 	  console.log('DONE fadingOut');
// 	// }
// }
//runAurora();
