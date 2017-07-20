
var exports = module.exports;

var uselogging;

function log(message){
    if(uselogging) console.log(message + "\n");
    tlog += message + "\n";
}

exports.enableConsoleLogging = function(){uselogging=true};
exports.disableConsoleLogging = function(){uselogging=false};
exports.getLog = function(){return tlog};

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
        log(stdout);
    });
}

exports.sync = function(){
    exports.pull();
    exports.pushAll();
}

exports.addFile = function(path){
    const{exec} = require('child_process');
    exec("git add " + path, {cwd: repo}, (err, stdout, stderr)=>{log(stdout)});
}

exports.addFiles = function(files){
    const{exec} = require('child_process');
    for(var i = 0; i < files.length; i++){
        addFile(files[i]);
    }
}

exports.addDirectory = function(dir){
    const{exec} = require('child_process');
    exec("git add " + dir, {cwd: repo}, (err, stdout, stderr)=>{log(stdout)});
}

exports.commit = function(message){
    const{exec} = require('child_process');
    exec("git commit -m \"" + dir+"\"", {cwd: repo}, (err, stdout, stderr)=>{log(stdout)});
}