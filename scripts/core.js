import { Graphics } from "/scripts/graphics.js";
import { InputHandler } from "/scripts/events.js";
import { Factory, ImportDepot, ProductionBay, StorageBuilding, ShippingDepot } from "/scripts/factory.js"

class Player {
    constructor(_name, _type, _factory) {
        this.name = _name;
        this.type = _type;
        this.factory = _factory;
    }
    money = 0;
    name = 'Guest';
    type;
    factory;
    candy;
}

// Start everything up
window.onload = function () {

    var factory = new Factory(true);
    var player = new Player('e', 'Candy Corn', factory);
    console.log(player);

    Player.Create3D(player);

    var handler = new InputHandler(window);
    handler.start();
}

export { Player };