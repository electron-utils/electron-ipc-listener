'use strict';

const path = require('path');
const electron = require('electron');
const {Application} = require('spectron');
const assert = require('assert');

describe('main-process', function () {
  this.timeout(0);
  let app = null;

  before(function () {
    app = new Application({
      path: electron,
      args: [path.join(__dirname, 'fixtures', 'app-main-process')]
    });
    return app.start();
  });

  after(function () {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  it('should be ok in main process', function () {
    return app.electron.remote.getGlobal('ipcCalls')
      .then(function (ipcCalls) {
        assert.equal(ipcCalls.length, 2);
        assert.equal(ipcCalls[0], 'test:foobar');
        assert.equal(ipcCalls[1], 'test:clear');
      });
  });
});

describe('renderer-process', function () {
  this.timeout(0);
  let app = null;

  before(function () {
    app = new Application({
      path: electron,
      args: [path.join(__dirname, 'fixtures', 'app-renderer-process')]
    });
    return app.start();
  });

  after(function () {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  it('should be ok in renderer process', function () {
    return app.client
      .waitUntilWindowLoaded()
      .getRenderProcessLogs().then(function (logs) {
        assert.equal(logs.length, 1);
        assert.ok(logs[0].message.indexOf('foobar 0') !== -1);
      });
  });
});
