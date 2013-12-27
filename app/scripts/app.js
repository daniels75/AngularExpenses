'use strict';

angular.module('angularExpensesApp', [
  'services.breadcrumbs',
  'googlechart',
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
        controller: 'UserController'
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


angular.module('angularExpensesApp').controller('HeaderCtrl', ['$scope', '$location', '$route', '$routeParams','breadcrumbs',
  function ($scope, $location, $route, $routeParams, breadcrumbs) {
    $scope.location = $location;
    $scope.pageName = "home";
    $scope.breadcrumbs = breadcrumbs;

    $scope.updateCurrentPage = function(currentPageName, $route, $routeParams, $location){
        this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $scope.pageName = currentPageName;
    };

    $scope.isNavbarActive = function (navBarPath) {
      var name = breadcrumbs.getFirst().name;
      var arr = breadcrumbs.getAll();
      console.log("name: " + name);
      var i = 0;
      for (i = 0; i < arr.length; i++){
        console.log(">>> page name: " + breadcrumbs.getAll()[i].name);
      }

      
      
      return navBarPath === $scope.pageName;
    };


}]);

angular.module('services.breadcrumbs', []);
angular.module('services.breadcrumbs').factory('breadcrumbs', ['$rootScope', '$location', function($rootScope, $location){

  var breadcrumbs = [];
  var breadcrumbsService = {};

  //we want to update breadcrumbs only when a route is actually changed
  //as $location.path() will get updated imediatelly (even if route change fails!)
  $rootScope.$on('$routeChangeSuccess', function(event, current){

    var pathElements = $location.path().split('/'), result = [], i;
    var breadcrumbPath = function (index) {
      return '/' + (pathElements.slice(0, index + 1)).join('/');
    };

    pathElements.shift();
    for (i=0; i<pathElements.length; i++) {
      result.push({name: pathElements[i], path: breadcrumbPath(i)});
    }

    breadcrumbs = result;
  });

  breadcrumbsService.getAll = function() {
    return breadcrumbs;
  };

  breadcrumbsService.getFirst = function() {
    return breadcrumbs[0] || {};
  };

  return breadcrumbsService;
}]);