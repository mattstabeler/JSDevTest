'use strict';

/**
 * @ngdoc function
 * @name gitSwanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gitSwanApp
 */
angular.module('gitSwanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
