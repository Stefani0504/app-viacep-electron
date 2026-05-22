const { app, BrowserWindow} =   require('electron')

function createJanela (){

    const janela = new BrowserWindow({
        width: 800,
        height: 600,

    })
    janela.loadFile('index.html')


}

app.whenReady().then(createJanela)


