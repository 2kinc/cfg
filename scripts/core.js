(function (global) {
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
            
        };

        static Tiers = {

        };
    }
    class StorageBuilding {
        storageCapacity = 1;

        static Defaults = {
            
        };

        static Tiers = {

        };
    }
    class ShippingDepot {
        workerSpeed = 1;
        vehicleSpeed = 1;
        vehicleCapacity = 1;

        static Defaults = {
            
        };

        static Tiers = {

        };
    }

    console.log(new Player('d'));
})(this);