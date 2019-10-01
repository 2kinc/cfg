(function (global) {
    global.CFG.packages.graphics = {
        fov: 15
    };
    global.CFG.packages.graphics.init = function () {
        var scene = new THREE.Scene();

        var aspect = global.innerWidth / global.innerHeight;
        var d = global.CFG.packages.graphics.fov;
        camera = new THREE.OrthographicCamera(- d * aspect, d * aspect, d, - d, 1, 1000);

        camera.position.set(20, 20, 20); // all components equal
        camera.lookAt(scene.position); // or the origin

        global.CFG.packages.graphics.updateCamera = function () {
            var d = global.CFG.packages.graphics.fov;
            camera.left = - d * aspect;
            camera.right = d * aspect;
            camera.top = d;
            camera.bottom = -d;
            camera.updateProjectionMatrix();
        }

        var renderer = new THREE.WebGLRenderer()
        renderer.setSize(global.innerWidth, global.innerHeight);
        document.body.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshLambertMaterial({ color: 0x4444ff });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        var planeGeometry = new THREE.PlaneGeometry(1000, 1000);
        var planeMaterial = new THREE.MeshLambertMaterial({ color: 0x44ff44 });
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        scene.add(plane);

        var light = new THREE.DirectionalLight(0xffffff, 1);
        scene.add(light);

        var ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        global.CFG.classes.Player.Create3D = function (player) {
            var f = player.factory;
            if (f.importDepot) {
                var g = new THREE.BoxGeometry(1, 2, 1);
                var m = new THREE.MeshLambertMaterial({ color: 0xffffff });
                var o = new THREE.Mesh(g, m);
                o.position.set(-5, 0, 0);
                scene.add(o);
            }
            if (f.productionBay) {
                var g = new THREE.BoxGeometry(3, 5, 1.5);
                var m = new THREE.MeshLambertMaterial({ color: 0xaaaaff });
                var o = new THREE.Mesh(g, m);
                o.position.set(-3, 0, 0);
                scene.add(o);
            }
            if (f.storageBuilding) {
                var g = new THREE.BoxGeometry(3, 3, 2);
                var m = new THREE.MeshLambertMaterial({ color: 0xaaffaa });
                var o = new THREE.Mesh(g, m);
                o.position.set(1, 0, 0);
                scene.add(o);
            }
            if (f.shippingDepot) {
                var g = new THREE.BoxGeometry(1, 2, 1);
                var m = new THREE.MeshLambertMaterial({ color: 0xffffff });
                var o = new THREE.Mesh(g, m);
                o.position.set(5, 0, 0);
                scene.add(o);
            }
        }

        function animationFrame() {
            requestAnimationFrame(animationFrame);

            //cube.rotation.x += 0.02;
            //cube.rotation.y += 0.02;

            renderer.render(scene, camera);
        }

        animationFrame();
    }


})(this);
