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

  console.log(req.body);

  if(req.body.section in dependencies) {
   var contentModel = dependencies[req.body.section]();
   var newPost = new contentModel({title: req.body.title,
                                  contentBody: req.body.contentBody,
                                  submenus: "goo"});
   newPost.save(function(err, data) {
    if(err) {
      res.send(500, "Щось трапилось");
    }
    res.send(data);
   })
   // res.send(newPost);
  } else {
   res.send("Щось сталося");
  }
};