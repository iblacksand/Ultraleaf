
var exports = module.exports;

global.tlog = "";

function log(message){
    console.log(message + "\n");
    tlog += message + "\n";
}

var repo = "";

exports.setRepo = function(path_to_repo){
    repo = path_to_repo;
}

exports.pushAll = function() {
    const { exec } = require('child_process');   // The power of Node.JS
    var d = new Date();
    exec("git add .", { cwd: repo }, (err, stdout, stderr) => {
        log(stdout);
    });
    exec("git commit -m \"" + d.getTime()  +"\"", { cwd: repo }, (err, stdout, stderr) => {
        log(stdout);
    });
    
    exec("git push", { cwd: repo }, (err, stdout, stderr) => {
        log(stdout);
    });

}

exports.pull = function(){
    const{exec} = require('child_process');
    exec("git pull", {cwd: repo}, (err, stdout, stderr) => {
        log(stdout + "umm");
    });
}

exports.sync = function(){
    exports.pull();
    exports.pushAll();
}