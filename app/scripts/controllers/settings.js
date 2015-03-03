'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AboutCtrl
 * @description
 * # SettingsCtrl
 * Controller of the myappApp
 */

angular.module('myappApp')
  .controller('SettingsCtrl', function ($scope) {
    $scope.awesomeThings = [];

    TweenMax.staggerFrom('body', 1, {scale:0.5, opacity:0, delay:0.2, ease:Strong.easeOut}, 0);
    Draggable.create(".numbers", {type:"scroll", edgeResistance:0.5, lockAxis:true});

  });
