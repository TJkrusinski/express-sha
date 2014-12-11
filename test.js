'use strict';

var sha = require('./');
var assert = require('assert');

describe('sha()', function(){

  describe('sha() with minimal options', function(){
    it('will call `res.end()`', function(){
      var req = {};
      var res = {};

      req.url = '/foo';
      res.writeHead = function(status, headers) {
        assert.equal(200, status);
        assert.equal(headers['content-type'], 'text/plain');
      };
      res.end = function(sha) {
        assert.equal(typeof sha, 'string');
      };

      var fn = sha({url: '/foo'});

      fn(req, res);
    });
  });

  describe('sha() with more options', function(){
    it('will call `opts.responseHandler()`', function(){
      var req = {};
      var res = {};

      req.url = '/bar';
      res.writeHead = function(status, headers) {
        assert.equal(200, status);
        assert.equal(headers['content-type'], 'text/plain');
      };
      res.end = function(sha) {
        assert.equal(typeof sha, 'string');
      };

      var opts = {
        url: '/bar',
        responseHandler: function(req, res, str) {
          assert.equal(typeof req, 'object');
          assert.equal(typeof res, 'object');
          assert.equal(typeof str, 'string');
        }
      };

      var fn = sha(opts);

      fn(req, res);
    });
  });

  describe('sha() with a mismatched url pairing', function(){
    it('will call `d()`', function(d){
      var req = {};
      var res = {};

      req.url = '/barz';
      res.writeHead = function(status, headers) { };
      res.end = function(sha) { };

      var opts = {
        url: '/bar',
      };

      var fn = sha(opts);

      fn(req, res, d);
    });
  });

});
