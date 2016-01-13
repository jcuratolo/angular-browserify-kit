var test = require('tape');
var Ctrl2 = require('./ctrl2.js');

test('Is the testing module still working?', function(t) {
  t.plan(1);
  t.equals(5,5);
})

test('Wait, is this thing on?', function(t) {
  t.plan(1);
  t.ok(true,'should have been truthy');
})
