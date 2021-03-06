'use strict';

var appModule = angular.module('angularExpensesApp');


appModule
  .controller('MyrouteCtrl', function ($scope) {
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }

);



appModule
  .controller('ModalDemoCtrl', function ($scope, $modal, $log){
  $scope.name1 = "TestDemo";

  $scope.items = ['item1', 'item2', 'item3'];
  
  
  $scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: 'scripts/security/login/form.tpl.html',
      controller: ModalInstanceCtrl,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };



}


);


var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.cancelLogin = function() {
    $modalInstance.dismiss('cancel');
  }
};
