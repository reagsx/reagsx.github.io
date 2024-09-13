#!/usr/bin/node
var fs = require('fs');
var out = fs.openSync('./out.log', 'a');
var err = fs.openSync('./out.log', 'a');

var cp = require('child_process');
var child = cp.spawn('node', ['generation/webserver.js'], { detached: true, stdio: [ 'ignore', out, err ] });
child.unref();

