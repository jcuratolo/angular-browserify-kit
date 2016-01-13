var test = require('tape');
var Ctrl1 = require('./ctrl1.js');

test('Testing module working', function(t) {
  t.plan(1);
  t.equals(2,2);
});

test('Controller method doSomething()', function(t) {
  var $scope = {};
  var controller = new Ctrl1($scope);

  t.plan(1);
  t.equals('something', controller.doSomething('something'));
})
