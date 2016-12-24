'use strict';

var express = require('express');
var router = express.Router();
var museum = require('../model');

router.get('/', function (req, res, next) {
    museum.all('museums', function (list) {
        res.render('list', {
            title: 'all museums',
            model: 'museums',
            list: list
        });
    });
});

router.get('/:name', function (req, res, next) {
    museum.read('museums', req.params['name'], function (content) {
        res.render('show', {
            title: req.params['name'],
            content: content
        });
    });
});
module.exports = router;

//# sourceMappingURL=museums-compiled.js.map