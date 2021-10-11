const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )

renderer.setClearColor("rgb(0,0,0)" )
document.body.appendChild( renderer.domElement )
camera.position.z = 15

var geometry = new THREE.BoxGeometry( 15, 0.5, 10)
var material = new THREE.MeshStandardMaterial( { color: 0x964B00 })
var cube = new THREE.Mesh ( geometry, material )
const texture= new THREE.TextureLoader().load(".ground.png")
const material8 = new THREE.MeshBasicMaterial({ map: texture })
scene.add( cube )
cube.position.x=0
cube.position.y-=5
cube.position.z=0

const geometry1 = new THREE.PlaneGeometry( 0.1, 5 );
const material1 = new THREE.MeshBasicMaterial( {color:"rgb(255,255,255)" , side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry1, material1 );
scene.add( plane );
plane.position.y -= 2.5
plane.position.x =0.3 
plane.position.z -= 4

const geometry2 = new THREE.PlaneGeometry( 4, 2 );
const material2 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)", side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( geometry2, material2 );
scene.add( plane2 );
plane2.position.y -= 0.3
plane2.position.x = 0.3
plane2.position.z -= 4

const geometry3 = new THREE.RingGeometry( 1, 0.5, 15 );
const material3 = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry3, material3 );
scene.add( mesh );
mesh.position.y -= 0.3
mesh.position.x = 0.3
mesh.position.z -= 3.5
mesh.rotation.x +=1.5;


const geometry7 = new THREE.SphereGeometry( 0.4, 69, 45);
const material7 = new THREE.MeshBasicMaterial( { color:  0xFF8C00} );
const sphere7 = new THREE.Mesh( geometry7, material7 );
scene.add( sphere7 );
sphere7.position.y += 1.5
sphere7.position.z -= 1.5



const geometry4 = new THREE.PlaneGeometry( 0.1, 5 );
const material4 = new THREE.MeshBasicMaterial( {color:"rgb(255,255,255)" , side: THREE.DoubleSide} );
const plane3 = new THREE.Mesh( geometry4, material4 );
scene.add( plane3);
plane3.position.y -=2.5
plane3.position.x -=0.3 
plane3.position.z = 4

const geometry5 = new THREE.PlaneGeometry( 4, 2 );
const material5 = new THREE.MeshBasicMaterial( {color: "rgb(255,255,255)", side: THREE.DoubleSide} );
const plane4 = new THREE.Mesh( geometry5, material5 );
scene.add( plane4 );
plane4.position.y -= 0.3
plane4.position.x -= 0.3
plane4.position.z = 4

const geometry6 = new THREE.RingGeometry( 1, 0.5, 15 );
const material6 = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
const mesh2 = new THREE.Mesh( geometry6, material6 );
scene.add( mesh2 );
mesh2.position.y -= 0.3
mesh2.position.x -= 0.3
mesh2.position.z = 3.5
mesh2.rotation.x +=1.5;


var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )


var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

document.addEventListener('keydown',(e)=>{
	if(e.keyCode==38){//up
	  camera.position.z -= 1
	  renderer.render(scene,camera)
	}
	else if(e.keyCode==40){//down
	camera.position.z += 1
	renderer.render(scene,camera)
	}
	else if(e.keyCode==37){//left
	  camera.position.x -= 1
	  renderer.render(scene,camera)
	  }
	  else if(e.keyCode==39){//rightarrow
		camera.position.x += 1
		renderer.render(scene,camera)
		}
		else if(e.keyCode==69){//e
		  camera.rotation.x -= 0.1
		  renderer.render(scene,camera)
		  }
		  else if(e.keyCode==68){//d
			camera.rotation.x += 0.1
			renderer.render(scene,camera)
			}
			else if(e.keyCode==83){//s
			  camera.rotation.y += 0.1
			  renderer.render(scene,camera)
			  }
			  else if(e.keyCode==70){//f
				camera.rotation.y -= 0.1
				renderer.render(scene,camera)
				}
	
				else if(e.keyCode==79){//o
				  camera.position.y += 1
				  renderer.render(scene,camera)
				  }
				  else if(e.keyCode==75){//k
					camera.position.y -= 1
					renderer.render(scene,camera)
					}
		})


		let r=62;
		let angle=0;
		
		var animate = function(){
		requestAnimationFrame(animate)
		  sphere7.position.x=Math.cos(angle);
		sphere7.position.y=Math.sin(angle);
		sphere7.position.z= angle;
		angle+=Math.PI/500;
		
		
		
		
		
		
		
		renderer.render( scene, camera);
		
		
		
		
		
		};
		animate();	  