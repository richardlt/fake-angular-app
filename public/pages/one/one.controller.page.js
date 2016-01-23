angular.module('fake-angular-app')
  .controller('OneController',['$scope', '$state', function($scope, $state) {
      $scope.click1 = function() {
          $state.go('two');
      };
  }]);
