'use strict';

const utils = require('../utils');
const routesTemplate = require('../templates/routeModelTemplate');

module.exports = routeGenerate;

function routeGenerate(name, app) {
    let templateCode = routesTemplate(name);
    console.log(templateCode);
    utils.createDir("routes");
    utils.createFile(name + "_route.js", "routes", templateCode);
}
