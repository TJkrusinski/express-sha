'use strict';

var sha = require('git-sha');

/**
 *  Expose `expressSha`
 */

module.exports = expressSha;

/**
 *  expressSha
 *
 *  @param {Object} opts
 *  @returns {Function}
 */

function expressSha(opts) {
  opts = opts || {};

  opts.errorHandler = opts.errorHandler || noop;
  opts.responseHandler = opts.responseHandler || resp; 

  if (!opts.url) throw new Error('express sha requires `url` key');

  return function(req, res, next){
    if (req.url !== opts.url) return next();

    sha(function(err, str){
      if (err) return opts.errorHandler(req, res);
      opts.responseHandler(req, res, str);
    });
  };
};

/**
 *  General error handler for responses
 */

function noop(req, res) {
  res.writeHead(500, {
    'content-type': 'text/plain',
    'content-length': '0'
  });

  res.end();
};

/**
 *  General 200 response handler
 */

function resp(req, res, sha) {
  var size = Buffer.byteLength(sha || '');

  res.writeHead(200, {
    'content-type': 'text/plain',
    'content-length': size
  });

  res.end(sha);
};
