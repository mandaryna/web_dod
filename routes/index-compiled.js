'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('home', {
    title: "home"
  });
});

router.get('/excursions', function (req, res, next) {
  res.render('excursions');
});

module.exports = router;

//# sourceMappingURL=index-compiled.js.map