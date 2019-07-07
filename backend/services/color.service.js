const fs= require('fs');
const utilService = require('../services/util.service');

module.exports = {
    query,
    update
}

var colors = _createColors();

function query() {
    return Promise.resolve(colors);
}

function update() {
    colors = utilService.getRandomColors(20);
    return _saveColorsToFile().then(() => colors)
}

function _saveColorsToFile() {
    return new Promise((resolve, reject) => {
        fs.writeFile("data/color.json", JSON.stringify(colors), (err) => {
            if (err) {
                return reject(err)
            }
            resolve()
        });

    })
}

function _createColors() {
    return require('../data/color.json');
}