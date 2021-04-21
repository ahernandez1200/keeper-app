var express = require('express');
var router = express.Router();

var connection = require("../database/mongoose_connection");


/* GET home page. */
router.post('/', function(req, res, next) {
  
  
  const post1 = new connection.theModel({title: "hhhhh", content: "hhhh"});
  post1.save();
  res.send(req.body.title);
  console.log("in router")

});

module.exports = router;
