var express = require("express");
var router = express.Router();
var donut = require("../models/donut.js");
router.get("/", function (req, res) {
    donut.all(function (data) {
        var hbsObject = {
            donuts: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/api/donuts", function (req, res) {
    donut.insert([
        "name", "devoured"
    ], [
            req.body.name, req.body.devoured
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

router.put("/api/donuts/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    donut.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;