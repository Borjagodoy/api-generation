'use strict';

const utils = require('../utils');
const modelTemplate = require('../templates/modelTemplate');
module.exports = modelgen;

function modelgen(name, atrbts, tipos) {
    let atributes = "";

    for (let item in atrbts) {
        let atribute = atrbts[item];
        let type = utils.ucFirst(tipos[item]);
        atributes
            += "   \""
            + atribute
            + "\" : "
            + type
            + ",\n";
    }

    atributes = utils.deleteLastChar(atributes);

    let templateCode = modelTemplate(name, atributes);

    utils.createDir("model");
    utils.createFile(name + "_model.js", "model", templateCode);
}
