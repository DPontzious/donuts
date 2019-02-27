var orm = require("../config/orm.js");

var donut = {
    all: function (cb) {
        orm.all("donuts", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insert: function (cols, vals, cb) {
        orm.insert("donuts", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("donuts", objColVals, condition, function (res) {
            cb(res);
        });
    }
};
module.exports = donut;