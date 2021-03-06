/**
 * (c) 2016 Radio France
 * This program is free software: you can redistribute it and/or modify it under the terms of the CeCILL-B license
 */
var path = require('path')
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;


module.exports = {
    getSource: function (url, cb) {
        var childArgs = [
            path.join(__dirname, 'bin/getsource.js'),
            url,
            '--ignore-ssl-errors=true',
            '--ssl-protocol=tlsv1',
            '--local-to-remote-url-access=true'
        ];

        childProcess.execFile(binPath, childArgs, function (err, stdout, stderr) {
            cb(stdout);
        });

    }
};

