var loadingText = document.querySelector('#loadingText');
setTimeout(function () {loadingText.innerText = 'loading factory data'}, 0);

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

export { Factory, ImportDepot, ProductionBay, StorageBuilding, ShippingDepot };