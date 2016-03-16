'use strict';

const utils = require('../utils');
const routeTemplate = require('../templates/routeTemplate');
const fs = require('fs');
module.exports = routeGenerate;

function routeGenerate(requies, routes, app) {
    let templateCode = routeTemplate(requies, routes);

    fs.writeFile("./route.js", templateCode, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("The file route.js was saved!");
            let route = require('../route.js');
            route(app);
        }
    });

}
