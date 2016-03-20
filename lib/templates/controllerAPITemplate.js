'use strict';

const utils = require('../utils');
module.exports = apiTemplate;

function apiTemplate(name, post_atr, put_atr) {

    return "var mongoose = require('mongoose');\n var "
        + utils.ucFirst(name)
        + "=require('../model/"
        + utils.lcFirst(name)
        + "_model');\n"
        + "exports.findAll"
        + utils.ucFirst(name)
        + "= function(req,res){\n"
        + utils.ucFirst(name)
        + ".find(function(err,"
        + utils.lcFirst(name)
        + "){\n"
        + "    if(err)\n"
        + "        console.log(\"no se han encontrado "
        + utils.ucFirst(name)
        + "\");\n"
        + "    else\n"
        + "        res.status(200).jsonp("
        + utils.lcFirst(name)
        + ");\n"
        + "    });\n"
        + "}\n"
        + "exports.add"
        + utils.ucFirst(name)
        + "= function(req, res){\n"
        + "    console.log('POST');\n"
        + "    console.log(req.body);\n"
        + "    var"
        + utils.lcFirst(name)
        + "= new "
        + utils.ucFirst(name)
        + "({\n" + post_atr
        +
            //name: req.body.name,
            //charla: req.body.charla,
            //tiempo: req.body.tiempo
        "    });\n"
        + "    "
        + utils.lcFirst(name)
        + ".save(function(err, speaker){\n"
        + "        if(err)\n"
        + "            res.send(500, err.message);\n"
        + "        else\n"
        + "            res.status(200).jsonp("
        + utils.lcFirst(name)
        + ");\n"
        + "    });\n"
        + "}\n"
        + "exports.update"
        + utils.ucFirst(name)
        + "=function(req,res){\n"
        + "    console.log('PUT');\n"
        + "    console.log(req.param.id);\n"
        + "    "
        + utils.ucFirst(name)
        + ".findById(req.params.id, function(err,"
        + utils.lcFirst(name)
        + "){\n"
        + put_atr
        +
            //speaker.name= req.body.name,
            //speaker.charla= req.body.charla,
            //speaker.tiempo= req.body.tiempo

        "    "
        + utils.lcFirst(name)
        + ".save(function(err){\n"
        + "            if(err)\n"
        + "                res.send(500,err.message);\n"
        + "            else\n"
        + "                res.status(200).jsonp("
        + utils.lcFirst(name)
        + ");\n"
        + "        });\n"
        + "    });\n"
        + "}\n"
        + "exports .delete"
        + utils.ucFirst(name)
        + "=function(req, res){\n"
        + "    "
        + utils.ucFirst(name)
        + ".findById(req.params.id, function(err, "
        + utils.lcFirst(name)
        + "){\n"
        + "        "
        + utils.lcFirst(name)
        + ".remove(function(err){\n"
        + "            if(err)\n"
        + "                res.send(500,err.message);\n"
        + "            else\n"
        + "                res.status(200);\n"
        + "        });\n"
        + "    });\n"
        + "}\n";

}
