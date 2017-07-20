function button1_click() {
    // console.log(require('electron').remote.getGlobal('OpenFile')());
    // createWindow('Overleaf-Web.html');

}

function button2_click() {
    require('electron').remote.getGlobal('createWindow')('OfflineEditor.html');
}

function log(message){
    document.getElementById('log').innerHTML += message + "\n";
}

function test() {
    var git = require('./assets/js/git.js');   // The power of Node.JS
    // git.sync("C:/Users/user/Documents/UltraleafTestingRepo")
    git.setRepo("C:/Users/user/Documents/UltraleafTestingRepo");
    git.sync();
    log(git.tlog);
}