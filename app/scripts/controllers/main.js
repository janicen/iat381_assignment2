'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myappApp
 */
angular.module('myappApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = [];

    //parse date and time of local computer
	// $scope.dt = new Date();
    var tick = function () {
    	//get current time
        $scope.dt = Date.now()
        //reset timer
        $timeout(tick, $scope.tickInterval);
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
	
  });