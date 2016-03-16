'use strict';

const api_generate = require('./api_generate');
const utils = require('../utils');
const route_generate = require('./route_generate');

module.exports = function (app) {
    const models = utils.getModels();
    // var nombres = "";
    let requires_model = "";
    let routes_model = "";

    for (let item in models) {
        let nombre = models[item]["nombre"];
        let atributos = models[item]["atributos"];
        const tipos = models[item]["tipos"];
        routes_model
            += "route_"
            + nombre
            + "(app);\n";
        requires_model
            += "var route_"
            + nombre
            + " = require('./routes/"
            + nombre
            + "_route.js');\n";
        api_generate(nombre, atributos, tipos, app);
    }

    route_generate(requires_model, routes_model, app);
};
