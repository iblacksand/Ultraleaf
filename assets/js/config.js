// exports.test = function(){
// var config = require('../../config.json');
// // config = JSON.parse(config);
// var file = "./config.json";
// console.dir(JSON.stringify(config));
// fs = require('fs');
// fs.writeFile(file, JSON.stringify(config), 'utf8', ()=>{});
// }

var config = require('../../config.json');

exports.getConfig = function(){
    return config;
}

exports.saveConfig = function(newconfig){
    fs = require('fs');
    fs.writeFile('./config.json', JSON.stringify(newconfig), 'utf8', ()=>{});
    config = newconfig;
}

exports.save = () => {
    fs = require('fs');
    fs.writeFile('./config.json', JSON.stringify(config), 'utf8', ()=>{});
};

exports.setConfig = (newconfig) => {config = newconfig};

exports.newAttribute = function(attr, val){
    config[attr] = val;
}

exports.getAttribute = (attr) => {return config[attr]};