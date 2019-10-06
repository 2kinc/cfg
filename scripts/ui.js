class UI {
    constructor(_player, _el, _inputHandler) {
        this.player = _player;
        this.el = _el;
        this.inputHandler = _inputHandler;
    }
    vue;
    activate = function () {
        var that = this;
        this.vue = new Vue({
            el: that.el,
            data: () => ({
                player: that.player,
                highQuality: true
            })
        });
        this.inputHandler.UI = this;
        this.inputHandler.start();
    }
}

export { UI };