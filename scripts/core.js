import { Graphics } from "/scripts/graphics.js";
import { InputHandler } from "/scripts/events.js";

class Player {
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

window.onload = function () {

    var factory = new Factory(true);
    var player = new Player('e', factory);
    console.log(player);

    Player.Create3D(player);

    var handler = new InputHandler(window);
    handler.onWheel = function (e) {
        Graphics.fov -= e.direction * Graphics.zoomSpeed;

        if (Graphics.fov < Graphics.minfov)
            Graphics.fov = Graphics.minfov;

        if (Graphics.fov > Graphics.maxfov)
            Graphics.fov = Graphics.maxfov;

        Graphics.updateCamera();
    }
    handler.start();
}

export { Player };