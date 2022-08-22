import './style.css'

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import gsap from 'gsap'


const canvas = document.getElementById('webgl')

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer(
  {
    canvas: canvas,
    alpha: true
  });
renderer.setClearColor(0x000000, 0)

renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);


// Object in the scene
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// cube.position.x = 5;

let colonnesMesh = null
const loader = new GLTFLoader()

// Load a glTF resource
loader.load(
  // resource URL
  './ressources/colonnes.glb',
  // called when the resource is loaded
  function (gltf) {

    colonnesMesh = gltf.scene
    colonnesMesh.position.x = 5
    scene.add(colonnesMesh);
  }
);

camera.position.z = 5;
controls.update()

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
