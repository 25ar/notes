"use strict";

exports.get = function (req, res, next) {
  res.render("index");
  next();
}