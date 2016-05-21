var config = require('nconf');
var path = require('path');

config.file({file: path.join(__dirname, './mainConf.json')});

module.exports = config;