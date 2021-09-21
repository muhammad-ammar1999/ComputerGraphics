const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )

renderer.setClearColor("rgb(255,255,255)" )
document.body.appendChild( renderer.domElement )
camera.position.z = 5

var geometry = new THREE.BoxGeometry( 1, 1, 1)
var material = new THREE.MeshStandardMaterial( { color: "rgb(94,0,0)" })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )

const geometrySphere = new THREE.SphereGeometry( 0.5, 70, 46 );
const materialSphere = new THREE.MeshBasicMaterial( { color:"rgb(0,0,0)" } );
const sphere = new THREE.Mesh( geometrySphere, materialSphere );
scene.add( sphere )
sphere.position.y=0.9
sphere.position.x=0.9

const geometrySphere1 = new THREE.SphereGeometry(  0.5, 32, 16 );
const materialSphere1 = new THREE.MeshBasicMaterial( { color:"rgb(100,200,100)" } );
const sphere1 = new THREE.Mesh( geometrySphere1, materialSphere1 );
scene.add( sphere1 )
sphere1.position.y=0.9
sphere1.position.x-=0.9

const geometrySphere2 = new THREE.SphereGeometry(  0.5, 32, 16 );
const materialSphere2 = new THREE.MeshBasicMaterial( { color:"rgb(100,200,100)" } );
const sphere2 = new THREE.Mesh( geometrySphere2, materialSphere2 );
scene.add( sphere2 )
sphere2.position.y-=0.9
sphere2.position.x-=0.9

const geometrySphere4 = new THREE.SphereGeometry( 0.5, 70, 46 );
const materialSphere4 = new THREE.MeshBasicMaterial( { color:"rgb(0,0,0)" } );
const sphere4 = new THREE.Mesh( geometrySphere4, materialSphere4 );
scene.add( sphere4 )
sphere4.position.y-=0.9
sphere4.position.x=0.9


var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )


var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );


function animate() {
	requestAnimationFrame( animate )
	cube.rotation.x += 0.;
	cube.rotation.y += 0.1;
	sphere1.rotation.x += 0.1;
	sphere1.rotation.y += 0.5;
	sphere1.rotation.z -= 0.5;
	
	renderer.render( scene, camera )
}
animate()