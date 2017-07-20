var editor = ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.session.setMode("ace/mode/latex");
ace.require("ace/ext/language_tools");
require("./assets/js/src-min-noconflict/ext-modelist");
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

function save_button() {
    var fs = require('fs');
    fs.writeFile(saveFile(), editor.getValue(), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}

function theme_change() {
    let theme = "";
    let val = parseInt(document.getElementById("theme").value);
    switch (val) {
        case 0:
            theme = "chrome";
            break;

        case 1:
            theme = "clouds";
            break;

        case 2:
            theme = "clouds_midnight";
            break;

        case 3:
            theme = "cobalt";
            break;

        case 4:
            theme = "crimson_editor";
            break;

        case 5:
            theme = "dawn";
            break;

        case 6:
            theme = "eclipse";
            break;

        case 7:
            theme = "idle_fingers";
            break;

        case 8:
            theme = "kr_theme";
            break;

        case 9:
            theme = "merbivore";
            break;

        case 10:
            theme = "merbivore_soft";
            break;

        case 11:
            theme = "mono_industrial";
            break;

        case 12:
            theme = "monokai";
            break;

        case 13:
            theme = "pastel_on_dark";
            break;

        case 14:
            theme = "solarized_dark";
            break;

        case 15:
            theme = "solarized_light";
            break;

        case 16:
            theme = "textmate";
            break;

        case 17:
            theme = "tomorrow";
            break;

        case 18:
            theme = "tomorrow_night";
            break;

        case 19:
            theme = "tomorrow_night_blue";
            break;

        case 20:
            theme = "tomorrow_night_bright";
            break;

        case 21:
            theme = "tomorrow_night_eighties";
            break;

        case 22:
            theme = "twilight";
            break;

        case 23:
            theme = "vibrant_ink";
            break;

        default:
            theme = "tomorrow";
            break;
    }
    editor.setTheme("ace/theme/" + theme);
    editor.resize();
    console.log("Chosen theme: " + theme);
}