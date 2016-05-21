"use strict";

exports.post = function(req, res, next) {
  var dependencies = {
    administrating: function() {
      var contentModel = require("../models/postsModel.js").administrating;
      return contentModel;
    },
    programing: function() {
      var contentModel = require("../models/postsModel.js").programing;
      return contentModel;
    },
    networks: function() {
      var contentModel = require("../models/postsModel.js").networks;
      return contentModel;
    },
    electronics: function() {
      var contentModel = require("../models/postsModel.js").electronics;
      return contentModel;
    }
  }
  var contentModel = dependencies[req.body.section]();
  contentModel.find(function(err, data) {
    if(err) throw Error;
    res.send(data);
  });
}