function Ctrl1($scope) {
  console.log('Ctrl 1 activated');
  $scope.message = 'Ctrl1 activated';
}

Ctrl1.prototype.doSomething = function(input) {
  console.log(input);
  return input;
}

Ctrl1.$inject = ['$scope'];

module.exports = Ctrl1;
