(function (global) {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, global.innerWidth / global.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    var renderer = new THREE.WebGLRenderer()
    renderer.setSize(global.innerWidth, global.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x4444ff });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function animationFrame() {
        requestAnimationFrame(animationFrame);

        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;

        renderer.render(scene, camera);
    }

    animationFrame();
})(this);