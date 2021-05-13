var express = require('express');
var router = express.Router();

var connection = require("../database/mongoose_connection");


/*call to this route when we want to add a new note to the database.*/
router.get('/', function(req, res, next) {
  
  res.send("Ready to receive and store a new post in the database.")

});

// /*call to this route when we want to retreive the notes currently stored
//   in the db*/
// router.get('/retreive', function(req, res, next) {
  
//   //console.log(connection.keeperPostModel.find({title: "DF" }))
//   connection.keeperPostModel.find({}, function (err, docs) {
//     if (err)
//       console.log(err);
//     else {
//       console.log(docs) //an array
//       res.send(JSON.stringify(docs));
//     }
//   });


//   //res.send( "retreive accesed" );

// });


/*call to this route when we want to add a new note to the database.*/
router.post('/', function(req, res, next) {

  //seems like this will work.
  /*however, we might actually have to use findoneandupdate as I'm not sure that
    the changes will saved in this way*/
  connection.userPostModel.find({username: req.body.username}, (err, doc)=>{
    console.log("the doc is: ");
    console.log(doc[0]);
    doc[0].password = "aa";
    console.log(doc);
  });



  // console.log(req.body);
  
  // const newPost = 
  //   new connection.keeperPostModel({title: req.body.title, content: req.body.content, id: req.body.identification});
  // newPost.save();
  res.send("Post saved.");
});

module.exports = router;

