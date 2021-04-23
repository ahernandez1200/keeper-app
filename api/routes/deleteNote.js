var express = require('express');
var router = express.Router();
var connection = require("../database/mongoose_connection");

/*call to this route when we want to add a new note to the database.*/
router.get('/', function(req, res, next) {
  
    res.send("Ready to search and delete a post from the database.")
  
  });
  
  
/*call to this route when we want to add a new note to the database.*/
router.post('/', function(req, res, next) {

    console.log("In /deleteNote...id of item being deleted is: " + req.body.id);
    connection.keeperPostModel.deleteOne({id: req.body.id}, err=>{
        if(err){
            console.log(err);
            res.send("Post not deleted");
        }
        else
            res.send("Post deleted");

    });



});

module.exports = router;