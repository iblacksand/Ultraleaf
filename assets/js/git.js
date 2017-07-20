
var exports = module.exports;

function log(message){
    console.log(message);
}
     
exports.pushAll = function(dir) {
    const { exec } = require('child_process');   // The power of Node.JS
    var d = new Date();
    exec("git add .", { cwd: dir }, (err, stdout, stderr) => {
        log(stdout);
    });
    exec("git commit -m \"" + d.getTime()  +"\"", { cwd: dir }, (err, stdout, stderr) => {
        log(stdout);
    });
    
    exec("git push", { cwd: dir }, (err, stdout, stderr) => {
        log(stdout);
    });

}

exports.pull = function(dir){
    const{exec} = require('child_process');
    exec("git pull", {cwd: dir}, (err, stdout, stderr) => {
        log(stdout);
    });
}

exports.sync = function(dir){
    exports.pull(dir);
    exports.pushAll(dir);
}