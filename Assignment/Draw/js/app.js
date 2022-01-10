const scene = new THREE.Scene();
var camera, renderer, controls;
class factory {
    constructor(pox, poy, poz, len) {
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(pox, poy, poz).setLength(len);
        this.render();
        this.controls();  
    }
    render() {
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
        document.body.appendChild(renderer.domElement);
    }
    controls() {
        controls = new THREE.OrbitControls(camera, renderer.domElement)
    }
    renderScene() {
        renderer.render(scene, camera);
    }

}

var fac = new factory(0, 5, 50, 100); //factory arguments (position_X, position_Y, position_Y, Length)

var plane = new THREE.GridHelper(100, 10);
scene.add(plane);

initialize();

animate();
//Declare or Initialize variables here..
var point, initAngle = 0, t;

//Code your logic here..
function initialize() {

  point = new THREE.Vector2(0, 0);
  initAngle = 0;
 const t = new Navigator(point, initAngle);
   
 const shape = t.drawPath('f-ff-f-fff+f');
 console.log(shape)

 shape.forEach(element => {
   if(element){
     scene.add(element)
   }
 });
                                                                   
}

function animate() {
  requestAnimationFrame(animate);

  fac.renderScene();
}

