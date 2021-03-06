"use strict";

var mongoose = require("mongoose");
var config = require("../conf")

mongoose.connect(config.get("mongoose:uri"), config.get("mongoose:options"));

module.exports = mongoose;