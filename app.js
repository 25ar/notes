"use strict"

var express = require("express");
var cluster = require("cluster");
var http = require("http");
var fs = require("fs");
var conf = require("./conf");
var engines = require("ejs");
var numCPUs = require('os').cpus().length;
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.engine("html", engines.renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/public");

var routes = require("./routes")(app);

if(cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", function(worker, code, signal) {
    console.log("worker " + worker.process.pid + " died");
  })
} else {
  http.createServer(app).listen(conf.get("port"), "localhost", function() {
    console.log(conf.get("port"));
  })
}

module.exports = app;
