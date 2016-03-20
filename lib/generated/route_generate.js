'use strict';

const utils = require('../utils');
const routeTemplate = require('../templates/routeTemplate');
const fs = require('fs');
module.exports = routeGenerate;

function routeGenerate(requies, routes, app) {
    let templateCode = routeTemplate(requies, routes);

    fs.writeFileSync("./route.js", templateCode);
            
        

}
