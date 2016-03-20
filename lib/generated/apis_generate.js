'use strict';

const api_generate = require('./controllers_generate');
const utils = require('../utils');
const route_generate = require('./route_generate');
const model_generation = require('./model_generate');
const routes_generation = require('./route_model_generate');

module.exports = function () {
    const models = utils.getModels();
    // var names = "";
    let requires_model = "";
    let routes_model = "";

    for (let item in models) {
        let name = models[item]["name"];
        let atributos = models[item]["atributos"];
        const tipos = models[item]["tipos"];
        routes_model
            += "route_"
            + name
            + "(app);\n";
        requires_model
            += "var route_"
            + name
            + " = require('./routes/"
            + name
            + "_route.js');\n";
        model_generation(name, atrbts, tipos);
        routes_generation(name);
        api_generate(name, atributos, tipos);

    }

    route_generate(requires_model, routes_model);
};
