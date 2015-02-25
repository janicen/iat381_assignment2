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
    TweenMax.staggerFrom('.alarms', 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut}, 0.2);
  });