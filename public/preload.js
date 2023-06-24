const { contextBridge, ipcMain, ipcRenderer} = require('electron')

let indexBridge = {
    loadSkype : async ()=>{
        await ipcRenderer.invoke('loadSkype')
    },
    loadGmail : async ()=>{
        await ipcRenderer.invoke('loadGmail')
    }
}

contextBridge.exposeInMainWorld('indexBridge',indexBridge)