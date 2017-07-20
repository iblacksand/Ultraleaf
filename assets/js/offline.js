var editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow");
editor.session.setMode("ace/mode/latex");
ace.require("ace/ext/language_tools");
var modelist = ace.require("ace/ext/modelist");
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
function getFile() {
    const { dialog } = require('electron').remote;
    const { remote } = require('electron');
    let x = dialog.showOpenDialog(
        remote.getCurrentWindow(),
        {
            defaultPath: 'c:/',
            filters: [
                { name: 'All Files', extensions: ['*'] },
                { name: 'Tex File', extensions: ['tex'] }
            ],
            properties: ['openFile']
        }
    );
    return x[0];
}

function saveFile() {
    const { dialog } = require('electron').remote;  
    const { remote } = require('electron');
    let x = dialog.showSaveDialog(
        remote.getCurrentWindow(),
        {
            defaultPath: 'c:/',
            filters: [
                { name: 'All Files', extensions: ['*'] },
                { name: 'Tex File', extensions: ['tex'] }
            ],
            properties: ['saveFile']
        }
    );
    return x;
}

function open_button() {
    fs = require('fs');
    let path = getFile();
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        editor.setValue(data);
        editor.clearSelection();
    });
    var mode = modelist.getModeForPath(path).mode;
    editor.session.setMode(mode);
}

function save_button(){
    var fs = require('fs');
fs.writeFile(saveFile(), editor.getValue(), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
}