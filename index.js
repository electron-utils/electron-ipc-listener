'use strict';

const electron = require('electron');
const platform = require('electron-platform');

let _ipc;
if ( platform.isMainProcess ) {
  _ipc = electron.ipcMain;
} else {
  _ipc = electron.ipcRenderer;
}

// ==========================
// exports
// ==========================

/**
 * @class IpcListener
 */

class IpcListener {
  /**
   * @constructor
   *
   * Class for easily manage IPC events
   */
  constructor () {
    this._listeningIpcs = [];
  }

  /**
   * @method on
   * @param {string} message
   * @param {function} callback
   *
   * Register IPC message and respond it with the callback function
   */
  on (message, callback) {
    _ipc.on( message, callback );
    this._listeningIpcs.push( [message, callback] );
  }

  /**
   * @method once
   * @param {string} message
   * @param {function} callback
   *
   * Register IPC message and respond it once with the callback function
   */
  once (message, callback) {
    _ipc.once( message, callback );
    this._listeningIpcs.push( [message, callback] );
  }

  /**
   * @method clear
   *
   * Clear all registered IPC messages in the listener.
   */
  clear () {
    for (let i = 0; i < this._listeningIpcs.length; ++i) {
      let pair = this._listeningIpcs[i];
      _ipc.removeListener( pair[0], pair[1] );
    }
    this._listeningIpcs.length = 0;
  }
}

module.exports = IpcListener;
