"use strict";

var mongoose = require("../libs/mongoose");

var Schema = mongoose.Schema;

var postSchemas = new Schema({
  title: {
    type: String,
    required: true
  },
  contentBody: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  images: {
    type: Array
  },
  submenus: {
    type: Array,
    required: true
  }
});

exports.administrating = mongoose.model("Administrating", postSchemas);
exports.programing = mongoose.model("Programing", postSchemas);
exports.electronics = mongoose.model("Electronics", postSchemas);
exports.networks = mongoose.model("Networks", postSchemas);
