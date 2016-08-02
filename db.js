/**
 * Created by Jake on 2016-08-01.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social', function () {
    console.log('mongodb connected');
})

module.exports = mongoose;
