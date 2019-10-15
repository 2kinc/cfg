var loadingText = document.querySelector('#loadingText');
setTimeout(function () {loadingText.innerText = 'loading player data'}, 0);

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

export { Player };