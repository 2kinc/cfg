import { Player } from "./scripts/core.js";
import { OrbitControls } from "./scripts/OrbitControls.js";

let Graphics = {
    fov: 15,
    minZoom: 8,
    maxZoom: 160,
    zoomSpeed: 2,
    skyColor: 0x00b0ff,
};
var scene = new THREE.Scene();

var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(Graphics.fov, aspect, 0.1, 1000);

camera.position.set(20, 20, 20); // all components equal
camera.lookAt(scene.position); // or the origin

Graphics.updateCamera = function () {
    var aspect = window.innerWidth / window.innerHeight;
    camera.fov = Graphics.fov;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
}

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(Graphics.skyColor);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

var controls = new OrbitControls(camera);

var planeGeometry = new THREE.PlaneGeometry(180, 180);
var planeMaterial = new THREE.MeshLambertMaterial({ color: 0x44ff44, side: THREE.DoubleSide });
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.set(0, 0, 0);
plane.rotation.x = Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

var rG = new THREE.BoxGeometry(40, 0.1, 1);
var rM = new THREE.MeshLambertMaterial({ color: 0x111111 });
var road = new THREE.Mesh(rG, rM);
road.receiveShadow = true;
road.position.set(0, 0.05, 5);
scene.add(road);

var r1G = new THREE.BoxGeometry(10, 0.1, 1);
var r1M = new THREE.MeshLambertMaterial({ color: 0x111111 });
var road1 = new THREE.Mesh(r1G, r1M);
road1.rotation.y = Math.PI / 2;
road1.position.set(19.5, 0.05, 0);
scene.add(road1);

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-10, 5, 5);
light.castShadow = true;

light.shadow.mapSize.width = 512;  // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5;    // default
light.shadow.camera.far = 500;     // default

scene.add(light);

var ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(ambientLight);

Player.Create3D = function (player) {
    var f = player.factory;
    if (f.importDepot) {
        var g = new THREE.BoxGeometry(1, 1, 2);
        var m = new THREE.MeshLambertMaterial({ color: 0xffffff });
        var o = new THREE.Mesh(g, m);
        o.position.set(-5, 0.5, 0);
        o.castShadow = true;
        o.receiveShadow = true;
        scene.add(o);
    }
    if (f.productionBay) {
        var g = new THREE.BoxGeometry(3, 1.5, 5);
        var m = new THREE.MeshLambertMaterial({ color: 0xaaaaff });
        var o = new THREE.Mesh(g, m);
        o.position.set(-3, 0.75, 0);
        o.castShadow = true;
        o.receiveShadow = true;
        scene.add(o);
    }
    if (f.storageBuilding) {
        var g = new THREE.BoxGeometry(3, 2, 3);
        var m = new THREE.MeshLambertMaterial({ color: 0xaaffaa });
        var o = new THREE.Mesh(g, m);
        o.position.set(1, 1, 0);
        o.castShadow = true;
        o.receiveShadow = true;
        scene.add(o);
    }
    if (f.shippingDepot) {
        var g = new THREE.BoxGeometry(1, 1, 2);
        var m = new THREE.MeshLambertMaterial({ color: 0xffffff });
        var o = new THREE.Mesh(g, m);
        o.position.set(5, 0.5, 0);
        o.castShadow = true;
        o.receiveShadow = true;
        scene.add(o);
    }
}

function onWindowResize() {
    Graphics.updateCamera();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

function animationFrame() {
    requestAnimationFrame(animationFrame);

    controls.update();

    renderer.render(scene, camera);
}

animationFrame();

export { Graphics };