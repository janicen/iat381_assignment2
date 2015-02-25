'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [];

    //parse date and time of local computer
	  $scope.dt = new Date();
	
  });
