angular.module('app', [])
  .controller('Controller', function($scope) {
    $scope.savedUser = null;
    $scope.save = function(user) {
      $scope.savedUser = angular.copy(user);
    };
  });
