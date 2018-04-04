const express = require('express');
const router = express.Router();
const axios = require('axios');
const constant = require("../constant");
/**
 * 获取电影列表
 */
router.get("/get/moive/list",function (req, res) {
    axios.get(constant.api+"v2/movie/in_theaters").then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.log(error);
        res.json({code:500,success:false,msg:error});
    });

});
/**
 * 获取电影条目
 */
router.get("/get/moive/subject",function (req, res) {
    axios.get(constant.api+"v2/movie/subject/"+req.query.id).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.log(error.response.data);
        res.json({code:500,success:false,data:error.response.data});
    });

});
/**
 * 获取权限列表
 */
router.get("/get/menu/list",function (req, res) {
    axios.get("http://admin.bokao2o.com/rolehttp/privilege/redis/get?clientSerial=599eb3680cf2b7984b073d80").then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.log(error.response.data);
        res.json({code:500,success:false,data:error.response.data});
    });

});


module.exports = router;