"use strict";

var fs = require('fs');

var all = function all(model, cb) {
    fs.readdir("./db/" + model + "/", function (err, files) {
        if (err) {
            return console.log(err);
        }
        console.log("All's OK", files);
        cb(files);
    });
};

var read = function read(model, name, cb) {
    fs.readFile("./db/" + model + "/" + name + ".html", function (err, content) {
        if (err) {
            return console.log(err);
        }
        console.log("All's OK: " + content);
        cb(content);
    });
};

module.exports = {
    all: all,
    read: read
};

//# sourceMappingURL=model-compiled.js.map