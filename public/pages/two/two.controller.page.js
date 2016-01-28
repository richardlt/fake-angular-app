angular.module('fake-angular-app')
  .controller('TwoController', ['$scope', '$state', function($scope, $state) {
      $scope.click1 = function() {
          $state.go('three');
      };

      setTimeout(function() {
          $('#content').html('<div class="appendElement">element</div>');
      }, 5000);
  }]);
