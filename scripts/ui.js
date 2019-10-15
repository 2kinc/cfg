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
                highQuality: true,
                menu: null,
                upgradesMenu: 0,
                hireMenu: 1,
                shopMenu: 2,
                settingsMenu: 3,
            }),
            computed:{
                formattedMoney: function () {
                    return this.player.money.toFixed(2);
                }
            },
            methods: {
                openMenu: function (menu) {
                    this.menu = menu;
                    document.querySelector('#graphics').classList.remove('open');
                },
                closeMenu: function () {
                    this.menu = null;
                    document.querySelector('#graphics').classList.add('open');
                }
            }
        });
        this.inputHandler.UI = this;
        this.inputHandler.start();
    }
}

export { UI };