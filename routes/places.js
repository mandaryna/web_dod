var express = require('express');
var router = express.Router();
var place = require('../model');

router.get('/', function (req, res, next) {
    res.render('list', {
        title: 'all places',
        list: place.all('places')
    })
});

router.get('/:name', function (req, res, next) {
    res.render('show', {
        title: req.params['name'],
        content: place.read('places', req.params['name'])
    })
});

module.exports = router;