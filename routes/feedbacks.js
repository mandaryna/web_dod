var express = require('express');
var router = express.Router();
var feedback = require('../model');

router.get('/add', function (req, res, next) {
    res.render('feedback', {
        title: 'write feedback'
    })
});

router.post('/', function (req, res, next) {
    feedback.create('feedbacks', (feedback.count('feedbacks') + 1).toString(), req.params['text']);
    res.redirect('/')
});

router.get('/', function (req, res, next) {
    res.render('list', {
        title: 'all feedbacks',
        list: feedback.all('feedbacks')
    })
});

module.exports = router;