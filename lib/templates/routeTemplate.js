'use strict';

module.exports = routeTemplate;

function routeTemplate(requires, routes) {

    return "module.exports="
        + "function(app){\n"
        + requires
        
        + routes
        + "\n"
        + "}";

}
