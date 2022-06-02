const express = require('express');
const lodash = require('lodash');
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

    router.get('/hello', function (req, res) {
    const months =['January','February','March','April','May','June','July','August','September','October','November','December'];
    const monthArray = lodash.chunk(months, 3);

    const oldOddNumber = [1,3,5,7,9,11,13,15,17,19];
    const newOddNumber = lodash.tail(oldOddNumber);

    const uniqueValue = lodash.union([1,2,3,5,7,8,],[1,2,4,10],[1,2,34,11,7,8]);

    const movieArray =[ ['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    const movieOject = lodash.fromPairs(movieArray);

    console.log(monthArray);
    console.log(newOddNumber);
    console.log(uniqueValue);
    console.log(movieOject);

    res.send('Hello API.')

});



module.exports = router;

// adding this comment for no reason