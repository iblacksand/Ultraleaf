exports.test = function(){
var config = require('./config.json');
var jsonfile = require('jsonfile');
var file = "./config.json";
config.dog = "woof";
console.log(config);
jsonfile.writeFileSync(file, config);
}