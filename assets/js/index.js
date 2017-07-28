function button1_click() {
    require('electron').remote.getGlobal('loadUrlInWindow')("https://www.overleaf.com")
}

function button2_click() {
    require('electron').remote.getGlobal('createWindow')('OfflineEditor.html');
}

function log(message){
    document.getElementById('log').innerHTML += message + "\n";
}

function test() {
    // var git = require('./assets/js/git/git.js');   // The power of Node.JS
    // // git.sync("C:/Users/user/Documents/UltraleafTestingRepo")
    // git.setRepo("C:/Users/user/Documents/UltraleafTestingRepo");
    // git.sync();
    // log(git.tlog);
    // var config = require('./assets/js/config.js');
    // var newJson = {};
    // newJson.test = "hello world";
    // config.setConfig(newJson);
    // log(config.getAttribute("test"));
    require('electron').remote.getGlobal('createWindow')('Settings.html');
}