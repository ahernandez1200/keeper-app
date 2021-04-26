
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/keeperPostsDB");


//testing connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connection Successful!");
});

const keeperPostSchema = new mongoose.Schema({
    title: String,
    content: String,
    id: Number
});

const KeeperPost = mongoose.model('KeeperPost', keeperPostSchema);


module.exports = {
    mongooseDatabase: mongoose,
    keeperPostModel: KeeperPost
};





//module.exports = mongoose;




// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/keeperPostsDB");


// //testing connection
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("Connection Successful!");
// });

// const keeperPostSchema = new mongoose.Schema({
//     title: String,
//     content: String
// });

// const KeeperPost = mongoose.model('KeeperPost', keeperPostSchema);

// module.exports = mongoose;



//module.exports.startConnection = function () {
    //     const mongoose = require('mongoose');
    //     mongoose.connect("mongodb://localhost:27017/keeperPostsDB");
    
    
    //     //testing connection
    //     const db = mongoose.connection;
    //     db.on('error', console.error.bind(console, 'connection error:'));
    //     db.once('open', function() {
    //     console.log("Connection Successful!");
    //     });
    
    //     const keeperPostSchema = new mongoose.Schema({
    //         title: String,
    //         content: String
    //     });
    
    //     const KeeperPost = mongoose.model('KeeperPost', keeperPostSchema);
    // }



//https://stackoverflow.com/questions/52910351/use-mongoose-into-a-express-route-file
//https://www.tutorialsteacher.com/nodejs/nodejs-module-exports
//https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js