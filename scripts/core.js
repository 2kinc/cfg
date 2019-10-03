import { Graphics } from "./scripts/graphics.js";
import { InputHandler } from "./scripts/events.js";
import { Factory, ImportDepot, ProductionBay, StorageBuilding, ShippingDepot } from "./scripts/factory.js"

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


window.onload = function () {

    var factory = new Factory(true);
    var player = new Player('e', factory);
    console.log(player);

    Player.Create3D(player);

    var handler = new InputHandler(window);
    /*handler.onWheel = function (e) {
        Graphics.fov -= e.direction * Graphics.zoomSpeed;

        if (Graphics.fov < Graphics.minfov)
            Graphics.fov = Graphics.minfov;

        if (Graphics.fov > Graphics.maxfov)
            Graphics.fov = Graphics.maxfov;

        Graphics.updateCamera();
    }*/
    handler.start();
}

export { Player };