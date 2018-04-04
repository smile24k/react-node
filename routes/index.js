var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../html/mall.html'));
});




router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, '../html/mall.html'));
});
module.exports = router;
