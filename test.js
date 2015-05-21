'use strict';
var assert = require('assert');
var htmlCommentRegex = require('./');

var html = '<!DOCTYPE html><!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]--><!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]--><!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]--><!--[if gt IE 8]><!--><html lang="en"><head><meta charset="UTF-8"><title>Document</title></head><body></body></html>';

it('html should match the regex', function() {
  assert.deepEqual(html.match(htmlCommentRegex), [
    '<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->',
    '<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->',
    '<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->',
    '<!--[if gt IE 8]><!-->'
  ]);
});
