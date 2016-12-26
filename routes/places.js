var express = require('express');
var router = express.Router();
var place = require('../model');

router.get('/', function (req, res, next) {
    place.all('places', function (list) {
        res.render('list', {
            title: 'all places',
            model: 'places',
            list: list
        })
    })
});
router.get('/:name', function (req, res, next) {
    place.read('places', req.params['name'], function (content) {
        res.render('show', {
            title: req.params['name'],
            content: content
        })
    })
});

module.exports = router;