const express = require('express');
const weclome = require('../logger/logger.js');
const helper = require('../util/helper.js');
const formatter = require('../validator/formatter.js');
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log("Weclome my application"+weclome.weclome);
    console.log("Weclome my application"+helper.Date);
    console.log("Weclome my application"+helper.month);
    console.log("Weclome my application"+helper.info);
    console.log("Weclome my application"+formatter.trim);
    console.log("Weclome my application"+formatter.LowerCase);
    console.log("Weclome my application"+formatter.UpperCase);
    
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason