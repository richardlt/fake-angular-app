angular.module('fake-angular-app')
  .controller('TwoController', ['$scope', '$state', function($scope, $state) {
      $scope.click1 = function() {
          $state.go('three');
      };
  }]);
