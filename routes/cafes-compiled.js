'use strict';

var express = require('express');
var router = express.Router();
var cafe = require('../model');

router.get('/', function (req, res, next) {
    res.render('list', {
        title: 'all cafes',
        list: cafe.all('cafes')
    });
});

router.get('/:name', function (req, res, next) {
    res.render('show', {
        title: req.params['name'],
        content: cafe.read('cafes', req.params['name'])
    });
});

module.exports = router;

//# sourceMappingURL=cafes-compiled.js.map