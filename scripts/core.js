import { Graphics } from "../scripts/graphics.js";
import { InputHandler } from "../scripts/events.js";
import { Factory, ImportDepot, ProductionBay, StorageBuilding, ShippingDepot } from "../scripts/factory.js";
import { UI } from "../scripts/ui.js";
import { Player } from "../scripts/player.js";


var shown = false; // for left bar

// Start everything up
window.onload = function () {

    var factory = new Factory(true);
    var player = new Player('e', 'Candy Corn', factory);
    console.log(player);

    Player.Create3D(player);

    var handler = new InputHandler(window);

    //open bottom bar
    handler.onMouseMove = function (e) {
        if (e.clientX < 64 && !shown) {
            var shown = true;
            this.UI.vue.$refs.leftBar.classList.add('shown');
        } else if (e.clientX > 128) {
            var shown = false;
            this.UI.vue.$refs.leftBar.classList.remove('shown');
        }
    };

    //toggle high quality
    handler.onKeyUp = function (e) {
        if (e.key.toLowerCase() == 'q') {
            if (this.UI.vue.highQuality) this.UI.vue.highQuality = false;
            else this.UI.vue.highQuality = true;
        }
    }

    var ui = new UI(player, "#ui", handler);
    ui.activate();

    window.player = player;
}