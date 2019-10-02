(function (global) {
    global.CFG.packages.graphics = {
        fov: 15,
        minfov: 3,
        maxfov: 22,
        zoomSpeed: 2
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

        var renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setSize(global.innerWidth, global.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshLambertMaterial({ color: 0x4444ff });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        var planeGeometry = new THREE.PlaneGeometry(180, 180);
        var planeMaterial = new THREE.MeshLambertMaterial({ color: 0x44ff44, side: THREE.DoubleSide });
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.position.set(0, 0, 0);
        plane.rotation.x = Math.PI / 2;
        plane.receiveShadow = true;
        scene.add(plane);

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

        global.CFG.classes.Player.Create3D = function (player) {
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
            var roadGeometry = new THREE.BoxGeometry(20, 0.1, 1);
            var roadMaterial = new THREE.MeshLambertMaterial({ color: 0x111111 });
            var road = new THREE.Mesh(roadGeometry, roadMaterial);
            road.receiveShadow = true;
            road.position.set(0, 0.05, 5);
            scene.add(road);
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
