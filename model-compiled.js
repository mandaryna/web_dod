'use strict';

var fs = require('fs');

var all = function all(model, cb) {
    fs.readdir('./db/' + model + '/', function (err, files) {
        if (err) {
            return console.log(err);
        }
        console.log("All's OK", files);
        cb(files);
    });
};

var count = function count(model, cb) {
    fs.readdir('./db/' + model + '/', function (err, files) {
        if (err) {
            return console.log(err);
        }
        console.log('All\'s OK: ', files.length);
        cb(files.length);
    });
};

var read = function read(model, name, cb) {
    fs.readFile('./db/' + model + '/' + name + '.html', function (err, content) {
        if (err) {
            return console.log(err);
        }
        console.log('All\'s OK: ' + content);
        cb(content);
    });
};

var create = function create(model, name, text) {
    fs.writeFile('./db/' + model + '/' + name + '.html', text, { flag: 'w' }, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("All's OK");
    });
};

module.exports = {
    all: all,
    count: count,
    read: read,
    create: create
};

//# sourceMappingURL=model-compiled.js.map