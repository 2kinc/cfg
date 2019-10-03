
class InputHandler {
    constructor(_window) {
        this.win = _window;
    }
    win = window;
    keyboard = {}
    onWheel = function (e) { }
    start = function () {
        var that = this;
        this.win.addEventListener("wheel", function (e) {
            e.direction = 0;
            e.direction = e.wheelDelta > 0 ? 1 : -1;
            that.onWheel(e);
        });
    }
}

export { InputHandler };