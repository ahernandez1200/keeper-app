var express = require("express");
var router = express.Router();
var connection = require("../database/mongoose_connection");


router.get("/", (req, res, next) => {
    res.send("Ready to register user.");
})

router.post("/", (req, res, next) => {

});


module.exports = router;