import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.2, 1000);
const height = window.innerHeight;
const width = window.innerWidth;
const displayinfow = document.getElementById("width");
const displayinfoh = document.getElementById("height");

displayinfow.textContent = `width: ${width}`;
displayinfoh.textContent = `height: ${height}`;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth - 4, window.innerHeight - 30);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

let size = 1000;
let step = 100;

let gridHelper = new THREE.GridHelper(size, step);
scene.add(gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(0, 1, 7);
controls.update();

function animate() {
    controls.update();
    renderer.render(scene, camera);
}

const handleKeyDown = (event) => {
    // キーコード（どのキーが押されたか）を取得
    const keyCode = event.keyCode;
    console.log(keyCode);
    if (keyCode == 65) {
        cube.position.x -= 0.2;
    } else if (keyCode == 87) {
        cube.position.z -= 0.2;
    } else if (keyCode == 68) {
        cube.position.x += 0.2;
    } else if (keyCode == 83) {
        cube.position.z += 0.2;
    }
};

window.addEventListener('keydown', handleKeyDown);

window.addEventListener("gamepadconnected", () => {
    const gp = navigator.getGamepads()[0];
    if (gp.buttons[0].pressed) {
        gameLoop();
    }
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth  / window.innerHeight ;
    renderer.setSize(window.innerWidth , window.innerHeight - 30);
    camera.updateProjectionMatrix();
    displayinfow.textContent = `width: ${window.innerWidth}`;
    displayinfoh.textContent = `height: ${window.innerHeight}`;
});

function gameLoop() {
    const gp = navigator.getGamepads()[0];
    if (gp.buttons[0].pressed) {
        cube.rotation.x += 0.03;

    } else if (gp.buttons[1].pressed) {
        cube.rotation.y += 0.06;
    }
    else {
        btndisp.textContent = "Button not pressed.";
    }

    requestAnimationFrame(gameLoop);
}
