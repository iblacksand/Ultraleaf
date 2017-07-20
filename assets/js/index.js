function button1_click(){
    // console.log(require('electron').remote.getGlobal('OpenFile')());
    // createWindow('Overleaf-Web.html');
   
}

function button2_click(){
    require('electron').remote.getGlobal('createWindow')('OfflineEditor.html');
}