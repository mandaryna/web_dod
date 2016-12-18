var fs = require('fs');

var all = function (model) {
    var list;
    fs.readdir(`./db/${model}/`, function (err, files) {
        if (err) {
            return console.log(err);
        }
        console.log("All's OK");
        list = files;
    });
    return list;
};

var count = function(model) {
    var ans;
    fs.readdir(`./db/${model}/`, function (err, files) {
        if (err) {
            return console.log(err);
        }
        console.log('All\'s OK');
        ans = files.size;
    });
    return ans;
};

var read = function (model, name) {
    var ans;
    fs.readFile(`./db/${model}/${name}.html`, function (err, content) {
        if (err) {
            return console.log(err);
        }
        console.log(`All's OK: ${content}`);
        ans = content;
    });
    return ans;
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

