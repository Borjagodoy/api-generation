'use strict';

const utils = require('../utils');
const api_template = require('../templates/controllerAPITemplate');
module.exports = apigen;

function apigen(name, atrbts, tipos) {
    //TODO: Read the JSON Config and change de File for the new atributes. function apigen(name, atrbts, app){
    
    let post_atr = "";
    let put_atr = "";

    //TODO Change this for new configuration, get data for atribute list and tipe list
    for (let item in atrbts) {
        let atr = atrbts[item];
        post_atr
            += "      "
            + atr
            + " : req.body."
            + atr
            + ",\n";
        put_atr
            += "      "
            + name
            + "."
            + atr
            + " = req.body."
            + atr
            + ",\n";
    }

    post_atr = utils.deleteLastChar(post_atr);
    put_atr = utils.deleteLastChar(put_atr);

    let templateCode = api_template(name, post_atr, put_atr);

    utils.createDir("api_controller");
    utils.createFile(name + "_controller.js", "api_controller", templateCode);
}
