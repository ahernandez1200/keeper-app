var express = require("express");
var router = express.Router();
var connection = require("../database/mongoose_connection");


router.get("/", (req, res, next) => {
    res.send("Ready to register user.");
});

router.post("/", (req, res, next) => {

    connection.userPostModel.find({username: req.body.email}, (err, doc) => {
        if (err) {
            res.send("Error encountered!");
        }
        else if (doc.length != 0) {
            res.send("Email already registered!");
        }
        else {
            const newUser = 
                new connection.userPostModel({username: req.body.email , password: req.body.password , posts: []});
            newUser.save();
            res.send("Success! New user registered.");

        }
    });

});


module.exports = router;