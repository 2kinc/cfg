import { Graphics } from "../scripts/graphics.js";
import { InputHandler } from "../scripts/events.js";
import { Factory, ImportDepot, ProductionBay, StorageBuilding, ShippingDepot } from "../scripts/factory.js";
import { UI } from "../scripts/ui.js";

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

var shown = false; // for topbar

// Start everything up
window.onload = function () {

    var factory = new Factory(true);
    var player = new Player('e', 'Candy Corn', factory);
    console.log(player);

    Player.Create3D(player);

    var handler = new InputHandler(window);
    handler.onMouseMove = function (e) {
        if (e.clientY > window.innerHeight - 32 && !shown) {
            var shown = true;
            this.UI.vue.$refs.bottomBar.classList.add('shown');
        } else if (e.clientY < window.innerHeight - 64) {
            var shown = false;
            this.UI.vue.$refs.bottomBar.classList.remove('shown');
        }
    };

    var ui = new UI(player, "#ui", handler);
    ui.activate();

    window.player = player;
}


export { Player };