'use strict';

const utils = require('../utils');
module.exports = modelTemplate;

function modelTemplate(name, atributes) {

    return "var mongoose= require('mongoose'),\n"
        + "Schema= mongoose.Schema;\n"
        + "var "
        + utils.lcFirst(name)
        + "= new Schema({\n"
        + atributes
        + "});\n"
        + "module.exports= mongoose.model('"
        + utils.ucFirst(name)
        + "',"
        + utils.lcFirst(name)
        + ");";

}
