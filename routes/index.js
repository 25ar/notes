"use strict";

module.exports = function(app) {
  app.get("/", require("./mainPage.js").get);
  app.post("/newContent", require("./newContent.js").post);
  app.post("/requestContent", require("./requestContent.js").post);
}