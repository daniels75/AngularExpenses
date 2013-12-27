'use strict';

angular.module('angularExpensesApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });

function MyRouteController($route, $routeParams, $location) {
  this.$route = $route;
  this.$location = $location;
  this.$routeParams = $routeParams;
}


angular.module('angularExpensesApp').controller('HeaderCtrl', ['$scope', '$location', '$route', '$routeParams',
  function ($scope, $location, $route, $routeParams) {
  $scope.location = $location;
  $scope.pageName = "home";

  $scope.updateCurrentPage = function(currentPageName, $route, $routeParams, $location){
      this.$route = $route;
  this.$location = $location;
  this.$routeParams = $routeParams;
    $scope.pageName = currentPageName;
  };

  $scope.isNavbarActive = function (navBarPath) {
    return navBarPath === $scope.pageName;
  };


}]);