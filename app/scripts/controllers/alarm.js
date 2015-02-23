'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myappApp
 */

angular.module('myappApp')
  .controller('AlarmCtrl', function ($scope) {
    $scope.alarms = ['8:30am', '10:00am'];
    $scope.addTodo = function () {
      $scope.alarms.push($scope.alarm);
      $scope.alarm = '';
    };
    $scope.removeTodo = function (index) {
      $scope.alarms.splice(index, 1);
    };
  });

// angular.module('myappApp', ['ui.bootstrap']);
// angular.module('myappApp').controller('AlarmCtrl', function ($scope, $modal, $log) {

//   $scope.items = ['item1', 'item2', 'item3'];

//   $scope.open = function (size) {

//     var modalInstance = $modal.open({
//       templateUrl: 'myModalContent.html',
//       controller: 'ModalInstanceCtrl',
//       size: size,
//       resolve: {
//         items: function () {
//           return $scope.items;
//         }
//       }
//     });

//     modalInstance.result.then(function (selectedItem) {
//       $scope.selected = selectedItem;
//     }, function () {
//       $log.info('Modal dismissed at: ' + new Date());
//     });
//   };
// });

// // Please note that $modalInstance represents a modal window (instance) dependency.
// // It is not the same as the $modal service used above.

// angular.module('myappApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

//   $scope.items = items;
//   $scope.selected = {
//     item: $scope.items[0]
//   };

//   $scope.ok = function () {
//     $modalInstance.close($scope.selected.item);
//   };

//   $scope.cancel = function () {
//     $modalInstance.dismiss('cancel');
//   };
// });