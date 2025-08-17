const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ipc', {
  getTabs: () => ipcRenderer.invoke('db:getTabs'),
  saveTab: (tab) => ipcRenderer.invoke('db:saveTab', tab),
  deleteTab: (id) => ipcRenderer.invoke('db:deleteTab', id),
});
