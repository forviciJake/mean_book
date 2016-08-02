/**
 * Created by Jake on 2016-08-01.
 */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// posts 종단점 분리.
app.use('/api/posts', require('./controller/api/posts'));

// index template 분리.
app.use('/', require('./controller/static'));

app.listen(3000, function () {
    console.log('Server listening on', 3000);
});
