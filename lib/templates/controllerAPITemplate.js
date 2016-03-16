'use strict';

const utils = require('../utils');
module.exports = apiTemplate;

function apiTemplate(nombre, post_atr, put_atr) {

    return "var mongoose = require('mongoose');\n var "
        + utils.ucFirst(nombre)
        + "=require('../model/"
        + utils.lcFirst(nombre)
        + "_model');\n"
        + "exports.findAll"
        + utils.ucFirst(nombre)
        + "= function(req,res){\n"
        + utils.ucFirst(nombre)
        + ".find(function(err,"
        + utils.lcFirst(nombre)
        + "){\n"
        + "    if(err)\n"
        + "        console.log(\"no se han encontrado "
        + utils.ucFirst(nombre)
        + "\");\n"
        + "    else\n"
        + "        res.status(200).jsonp("
        + utils.lcFirst(nombre)
        + ");\n"
        + "    });\n"
        + "}\n"
        + "exports.add"
        + utils.ucFirst(nombre)
        + "= function(req, res){\n"
        + "    console.log('POST');\n"
        + "    console.log(req.body);\n"
        + "    var"
        + utils.lcFirst(nombre)
        + "= new "
        + utils.ucFirst(nombre)
        + "({\n" + post_atr
        +
            //nombre: req.body.nombre,
            //charla: req.body.charla,
            //tiempo: req.body.tiempo
        "    });\n"
        + "    "
        + utils.lcFirst(nombre)
        + ".save(function(err, speaker){\n"
        + "        if(err)\n"
        + "            res.send(500, err.message);\n"
        + "        else\n"
        + "            res.status(200).jsonp("
        + utils.lcFirst(nombre)
        + ");\n"
        + "    });\n"
        + "}\n"
        + "exports.update"
        + utils.ucFirst(nombre)
        + "=function(req,res){\n"
        + "    console.log('PUT');\n"
        + "    console.log(req.param.id);\n"
        + "    "
        + utils.ucFirst(nombre)
        + ".findById(req.params.id, function(err,"
        + utils.lcFirst(nombre)
        + "){\n"
        + put_atr
        +
            //speaker.nombre= req.body.nombre,
            //speaker.charla= req.body.charla,
            //speaker.tiempo= req.body.tiempo

        "    "
        + utils.lcFirst(nombre)
        + ".save(function(err){\n"
        + "            if(err)\n"
        + "                res.send(500,err.message);\n"
        + "            else\n"
        + "                res.status(200).jsonp("
        + utils.lcFirst(nombre)
        + ");\n"
        + "        });\n"
        + "    });\n"
        + "}\n"
        + "exports .delete"
        + utils.ucFirst(nombre)
        + "=function(req, res){\n"
        + "    "
        + utils.ucFirst(nombre)
        + ".findById(req.params.id, function(err, "
        + utils.lcFirst(nombre)
        + "){\n"
        + "        "
        + utils.lcFirst(nombre)
        + ".remove(function(err){\n"
        + "            if(err)\n"
        + "                res.send(500,err.message);\n"
        + "            else\n"
        + "                res.status(200);\n"
        + "        });\n"
        + "    });\n"
        + "}\n";

}
