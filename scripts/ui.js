var loadingText = document.querySelector('#loadingText');
setTimeout(function () {loadingText.innerText = 'loading ui'}, 0);

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
            }),
            computed:{
                formattedMoney: function () {
                    return this.player.money.toFixed(2);
                }
            }
        });
        this.inputHandler.UI = this;
        this.inputHandler.start();
    }
}

export { UI };