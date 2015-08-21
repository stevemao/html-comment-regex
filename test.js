'use strict';
var assert = require('assert');
var htmlCommentRegex = require('./');

var html = '<!DOCTYPE html><!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]--> <!-- normal comment 1 --><!--normal comment 2--> <html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body></body></html>';

it('html should match the regex', function() {
  var result = htmlCommentRegex.exec(html);
  assert.deepEqual(result[0], '<!-- normal comment 1 -->');
  assert.deepEqual(result[1], ' normal comment 1 ');

  result = htmlCommentRegex.exec(html);
  assert.deepEqual(result[0], '<!--normal comment 2-->');
  assert.deepEqual(result[1], 'normal comment 2');
});
