var express = require('express');
var router = express.Router();
var cafe = require('../model');

router.get('/', function (req, res, next) {
    cafe.all('cafes', function (list) {
        res.render('list', {
            title: 'all cafes',
            model: 'cafes',
            list: list
        })
    })
});

router.get('/:name', function (req, res, next) {
    cafe.read('cafes', req.params['name'], function (content) {
        res.render('show', {
            title: req.params['name'],
            content: content
        })
    })
});

module.exports = router;