'use strict';

var express = require('express');
var router = express.Router();
var museum = require('../model');

router.get('/', function (req, res, next) {
    res.render('list', {
        title: 'all museums',
        list: museum.all('museums')
    });
});

router.get('/:name', function (req, res, next) {
    res.render('show', {
        title: req.params['name'],
        content: museum.read('museums', req.params['name'])
    });
});

module.exports = router;

//# sourceMappingURL=museums-compiled.js.map