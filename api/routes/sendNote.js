var express = require('express');
var router = express.Router();

var connection = require("../database/mongoose_connection");


/* GET home page. */
router.post('/', function(req, res, next) {
  
  
  const newPost = 
    new connection.keeperPostModel({title: req.body.title, content: req.body.content, id: req.body.identification});
  newPost.save();
  res.send(req.body.title);
  console.log("in router")

});

module.exports = router;
