(function (global) {
    global.CFG.classes.Player = class Player {
        constructor(_name, _factory) {
            this.name = _name;
            this.factory = _factory;
        }
        money = 0;
        name = 'Guest';
        factory;
        candy;
    }
    class Factory {
        constructor(_createBuildings) {
            if (_createBuildings) {
                this.importDepot = new ImportDepot();
                this.productionBay = new ProductionBay();
                this.storageBuilding = new StorageBuilding();
                this.shippingDepot = new ShippingDepot();
            }
        }
        importDepot;
        productionBay;
        storageBuilding;
        shippingDepot;
    }
    class ImportDepot {
        workerSpeed = 1;
        vehicleSpeed = 1;
        vehicleCapacity = 1;
        vehicleMaxCount = 0;

        vehicles = [];

        static Defaults = {
            workerSpeed: 1,
            vehicleSpeed: 5,
            vehicleCapacity: 25,
            vehicleMaxCount: 5
        };
    }
    class ProductionBay {
        workerSpeed = 1;
        productionRate = 1;

        static Defaults = {
            workerSpeed: 1,
            productionRate: 30
        };

        static Tiers = {

        };
    }
    class StorageBuilding {
        storageCapacity = 1;

        static Defaults = {
            storageCapacity: 500
        };

        static Tiers = {

        };
    }
    class ShippingDepot {
        workerSpeed = 1;
        vehicleSpeed = 1;
        vehicleCapacity = 1;

        static Defaults = {
            workerSpeed: 1,
            vehicleSpeed: 1,
            vehicleCapacity: 35
        };

        static Tiers = {

        };
    }

    var factory = new Factory(true);
    var player = new global.CFG.classes.Player('e', factory);
    console.log(player);

    global.CFG.packages.graphics.init();
    global.CFG.packages.events.init();
    global.CFG.classes.Player.Create3D(player);
    
    var handler = new global.CFG.classes.InputHandler(global);
    handler.onWheel = function (e) {
        global.CFG.packages.graphics.fov += e.direction;

        if (global.CFG.packages.graphics.fov < 3)
            global.CFG.packages.graphics.fov = 3;

        if (global.CFG.packages.graphics.fov > 30)
            global.CFG.packages.graphics.fov = 30;

        global.CFG.packages.graphics.updateCamera();
    }
    handler.start();
})(this);