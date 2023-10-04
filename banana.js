import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const loader = new GLTFLoader();
const EXPERIMENT_1_DIV = document.getElementById("experiment-1");

//threeJS stuff
const bananaSettings = {
    //make an object containing the settings of the threeJS component
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    1,//window.innerWidth / window.innerHeight,
    0.1,
    1000
)
const renderer = new THREE.WebGLRenderer();
scene.background = new THREE.Color("0xaaaaaa")
renderer.setSize(300, 300);    //TODO: change to a smaller size
//creating a cube (wip: create a banana instead)
let banana;
loader.load('banana.glb', function(gltf){
    banana = gltf.scene;
    scene.add(gltf.scene);
}, undefined, function(error){
    console.error(error);
});
// const geometry = new THREE.BoxGeometry(1,1,1);  //TODO: change to banana mesh
// const material = new THREE.MeshPhongMaterial({color: 0xcccccc});    //TODO: change to banana material
// const cube = new THREE.Mesh(geometry, material);
//LIGHTS!!
const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);
//scene.add(cube);
camera.position.z = 5;
EXPERIMENT_1_DIV.appendChild(renderer.domElement); //TODO: change this so it appears where it belongs

//animation
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    banana.rotation.y += 0.02;
    banana.rotation.x += 0.01;
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
}
animate();


console.log("MOTHER@NostromoWY >> Banana script loaded.");