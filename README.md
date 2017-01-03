# electron-ipc-listener

[![Linux Build Status](https://travis-ci.org/electron-utils/electron-ipc-listener.svg?branch=master)](https://travis-ci.org/electron-utils/electron-ipc-listener)
[![Windows Build status](https://ci.appveyor.com/api/projects/status/figbx38lys2tygja?svg=true)](https://ci.appveyor.com/project/jwu/electron-ipc-listener)
[![Dependency Status](https://david-dm.org/electron-utils/electron-ipc-listener.svg)](https://david-dm.org/electron-utils/electron-ipc-listener)
[![devDependency Status](https://david-dm.org/electron-utils/electron-ipc-listener/dev-status.svg)](https://david-dm.org/electron-utils/electron-ipc-listener#info=devDependencies)

IPC listener which will cache the callbacks for easily clear.

## Install

```bash
npm install --save electron-ipc-listener
```

## Usage

```javascript
const IpcListener = require('electron-ipc-listener');

let ipcListener = new IpcListener();
ipcListener.on('foo:bar', event => {
  // do something...
});

// ...
// ...
// once you do not need the ipcListener ...
ipcListener.clear();
```

## API Reference

### Class: IpcListener

#### new IpcListener();

### Instance Methods

#### ipcListener.on (message, callback)

  - `message` string
  - `callback` function

Register IPC message and respond it with the callback function.

#### ipcListener.once (message, callback)

  - `message` string
  - `callback` function

Register IPC message and respond it once with the callback function.

#### ipcListener.clear ()

Clear all registered IPC messages in the listener.

## License

MIT © 2017 Johnny Wu
