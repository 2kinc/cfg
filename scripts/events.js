
class InputHandler {
    constructor(_window) {
        this.win = _window;
    }
    win = window;
    keyboard = {keys:{}};
    lastMousePos;
    onWheel = function (e) { }
    onMouseMove = function (e) { };
    onKeyDown = function (e) { };
    onKeyUp = function (e) { };
    onKeyPress = function (e) { };
    start = function () {
        var that = this;
        this.win.addEventListener("wheel", function (e) {
            e.direction = e.wheelDelta > 0 ? 1 : -1;
            that.onWheel(e);
        }, false);
        this.win.addEventListener('mousemove', function (e) {
            if (that.lastMousePos) {
                var diff = { x: e.clientX - lastMousePos.x, y: e.clientY - lastMousePos.y };
                var magnitude = Math.sqrt(diff.x * diff.x + diff.y * diff.y + diff.z + diff.z);
                var normalized = { x: diff.x / magnitude, y: diff.y / magnitude };
                e.lastMousePos = that.lastMousePos;
                e.diff = normalized;
            }
            that.onMouseMove(e);
        }, false);
        this.win.addEventListener('keydown', function (e) {
            that.keyboard.keys[e.key.toLowerCase()] = true;
            that.onKeyDown(e);
        }, false);
        this.win.addEventListener('keyup', function (e) {
            that.keyboard.keys[e.key.toLowerCase()] = false;
            that.onKeyUp(e);
        }, false);
        this.win.addEventListener('keypress', this.onKeyPress, false);
    }
}

export { InputHandler };