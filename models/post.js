/**
 * Created by Jake on 2016-08-01.
 */

var db = require('../db');
var Post = db.model('Post', {
    username: { type: String, required: true },
    body:     { type: String, required: true },
    date:     { type: Date, required: true, default: Date.now }
})
module.exports = Post;