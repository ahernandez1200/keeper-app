var express = require("express");
var router = express.Router();
var connection = require("../database/mongoose_connection");


router.get("/", (req, res, next) => {
    res.send("Root of login accessed successfully.");
});

router.post("/", (req, res, next) => {
    // console.log(req.body);
    connection.userPostModel.find({username: req.body.email}, (err, doc) => {
        console.log(doc);
        if (err)
            res.send("Error! Unable to access database.");
        else if(doc.length == 1)
            if(doc[0].password == req.body.password)
                res.send("Successful login!");
            else
                res.send("Error! A different password is associated with the email.");
        else
            res.send("Error! Email registered multiple times in database.");
    });
});

module.exports = router;
