'use strict';

var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var feedback = require('../model');

router.get('/', function (req, res, next) {
    res.render('feedback', {
        title: 'write feedback'
    });
});

router.post('/', function (req, res, next) {
    console.log('request: ', req.body['text'], '\n');

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'marina.tilnyak.97@gmail.com',
            pass: process.env.GMAIL_PASSWORD
        }
    });

    var text = req.body['email'] + "\n=========\n" + req.body['text'];

    var mailOptions = {
        from: req.body['email'], // ТУТ
        to: 'marina.tilnyak.97@gmail.com', // list of receivers
        subject: 'Feedback', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            //res.json({yo: 'error'});
        } else {
            console.log('Message sent: ' + info.response);
            //res.json({yo: info.response});
        }
    });

    res.redirect('/');
});

module.exports = router;

//# sourceMappingURL=feedbacks-compiled.js.map