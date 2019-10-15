var loadingText = document.querySelector('#loadingText');

import { Factory, ImportDepot, ProductionBay, StorageBuilding, ShippingDepot } from "../scripts/factory.js";

import { InputHandler } from "../scripts/events.js";

import { UI } from "../scripts/ui.js";

import { Graphics } from "../scripts/graphics.js";

import { Player } from "../scripts/player.js";

// Start everything up
window.onload = function () {

    setTimeout(function () { loadingText.innerText = 'finalizing' }, 0);

    var factory = new Factory(true);
    var player = new Player('e', 'Candy Corn', factory);
    console.log(player);

    var handler = new InputHandler(window);

    //toggle high quality
    handler.onKeyUp = function (e) {
        if (e.key.toLowerCase() == 'q') {
            if (this.UI.vue.highQuality) this.UI.vue.highQuality = false;
            else this.UI.vue.highQuality = true;
        }

    }

    var ui = new UI(player, "#ui", handler);
    ui.activate();

    Player.Create3D(player);

    setTimeout(function () { loadingText.innerText = 'all done' }, 0);
    setTimeout(function () { document.querySelector('#loading').style.opacity = 0 }, 400);
    setTimeout(function () { document.querySelector('#loading').style.display = 'none'; }, 1200);
}