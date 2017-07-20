function button1_click(){
    require('electron').remote.getGlobal('createOverleaf')();
    // createWindow('Overleaf-Web.html');
}

function button2_click(){
    require('electron').remote.getGlobal('createWindow')('OfflineEditor.html');
}