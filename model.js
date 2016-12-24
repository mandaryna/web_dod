var fs = require('fs');

var all = function (model, cb) {
    fs.readdir(`./db/${model}/`, function (err, files) {
        if (err) {
            return console.log(err);
        }
        console.log("All's OK", files);
        cb(files);
    });
};

var count = function(model, cb) {
    fs.readdir(`./db/${model}/`, function (err, files) {
        if (err) {
            return console.log(err);
        }
        console.log('All\'s OK: ', files.length);
        cb(files.length);
    });
};

var read = function (model, name, cb) {
    fs.readFile(`./db/${model}/${name}.html`, function (err, content) {
        if (err) {
            return console.log(err);
        }
        console.log(`All's OK: ${content}`);
        cb(content);
    });
};

var create = function (model, name, text) {
    fs.writeFile(`./db/${model}/${name}.html`, text, { flag: 'w' }, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("All's OK");
    })
};

module.exports = {
    all: all,
    count: count,
    read: read,
    create: create
};

