var editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow");
editor.session.setMode("ace/mode/latex");
ace.require("ace/ext/language_tools");
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
}