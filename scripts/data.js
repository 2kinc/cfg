import { FileReader } from '../scripts/fileReader.js';

var Data = {
    get: function (callback) {
        FileReader.readTextFile('./scripts/upgrades.json', function (text) {
            var data = JSON.parse(text);
            Data.Upgrades = data;
            callback(Data);
        });

    }
};

export { Data };