'use strict';

const mkdirp = require('mkdirp');
const fs = require('fs');

exports.ucFirst = function (string) {
    return string.substr(0, 1).toUpperCase()
        + string.substr(1, string.length).toLowerCase();
};

exports.lcFirst = function (string) {
    return string.substr(0, 1).toLowerCase()
        + string.substr(1, string.length).toLowerCase();
};

exports.createDir = function (name) {
    let path = "./"
        + name;

    if (!fs.existsSync(path)) {
        mkdirp('./' + name, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Folder " + name + " create");
            }
        });
    }
};

exports.createFile = function (name, destination, templateCode) {
    let path = "./"
        + destination
        + "/"
        + name;

    if (!fs.existsSync(path)) {
        fs.writeFile(path, templateCode, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("The file " + name + " was saved!");
            }
        });
    }
};

exports.deleteLastChar = function (string) {
    string = string.substr(0, string.length - 2);
    string +=
        "\n";
    return string;
    // var fs = require('fs');
};

exports.getModels = function () {
    return JSON.parse(fs.readFileSync('./API_config.json', 'utf8'));
};
