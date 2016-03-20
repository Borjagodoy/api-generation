'use strict';

const utils = require('../utils');
const routesTemplate = require('../templates/routeModelTemplate');

module.exports = routeGenerate;

function routeGenerate(name) {
    let templateCode = routesTemplate(name);
    utils.createDir("routes");
    utils.createFile(name + "_route.js", "routes", templateCode);
}
