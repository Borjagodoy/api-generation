'use strict';

const utils = require('../utils');
module.exports = routeModelTemplate;

function routeModelTemplate(name) {

    return "module.exports=function(app){\n var controller = require('../api_controller/"
        + name
        + "_controller');\n"
        + "var url_post =  \"/"
        + name
        + "/:id\";\n"
        + "app.route('/"
        + name
        + "')\n"
        + "    .post(controller.add"
        + utils.ucFirst(name)
        + ")\n"
        + "    .get(controller.findAll" + utils.ucFirst(name)
        + ");\n"
        + "app.route(url_post)"
        + "    .put(controller.update"
        + utils.ucFirst(name)
        + ")\n"
        + "    .delete(controller.delete"
        + utils.ucFirst(name)
        + ");\n}";

}
