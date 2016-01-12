function Ctrl2($scope) {
  console.log('Ctrl 2 activated');
  $scope.message = 'Ctrl2 activated';
}

Ctrl2.$inject = ['$scope'];

module.exports = Ctrl2;
