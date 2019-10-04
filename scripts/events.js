
class InputHandler {
    constructor(_window) {
        this.win = _window;
    }
    win = window;
    keyboard = {}
    onWheel = function (e) { }
    onMouseMove = function (e) { };
    start = function () {
        var that = this;
        this.win.addEventListener("wheel", function (e) {
            e.direction = e.wheelDelta > 0 ? 1 : -1;
            that.onWheel(e);
        });
        this.win.addEventListener('mousemove', e => this.onMouseMove(e));
    }
}

export { InputHandler };