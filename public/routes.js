angular.module('fake-angular-app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/one");
    $stateProvider
        .state('one', {
            url: '/one',
            templateUrl: 'pages/one/one.page.html',
            controller: 'OneController'
        })
        .state('two', {
            url: '/two',
            templateUrl: 'pages/two/two.page.html',
            controller: 'TwoController'
        })
        .state('three', {
            url: '/three',
            templateUrl: 'pages/three/three.page.html',
            controller: 'ThreeController'
        })
}]);
