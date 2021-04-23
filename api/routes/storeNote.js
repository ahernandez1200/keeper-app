var express = require('express');
var router = express.Router();

var connection = require("../database/mongoose_connection");


/*call to this route when we want to add a new note to the database.*/
router.get('/', function(req, res, next) {
  
  res.send("Ready to receive and store a new post in the database.")

});


/*call to this route when we want to add a new note to the database.*/
router.post('/', function(req, res, next) {
  
  
  const newPost = 
    new connection.keeperPostModel({title: req.body.title, content: req.body.content, id: req.body.identification});
  newPost.save();
  res.send("Post saved.");
});

module.exports = router;
