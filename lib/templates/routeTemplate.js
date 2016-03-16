'use strict';

module.exports = routeTemplate;

function routeTemplate(requires, routes) {

    return "module.exports= route;\n"
        + requires
        + "function route(app){\n"
        + routes
        + "\n"
        + "}";

}
