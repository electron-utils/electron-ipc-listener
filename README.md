# electron-ipc

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

MIT © 2016 Johnny Wu
