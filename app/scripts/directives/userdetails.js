'use strict';

/**
 * @ngdoc directive
 * @name gitSwanApp.directive:userDetails
 * @description
 * # userDetails
 */
angular.module('gitSwanApp')
  .directive('userDetails', function () {
    return {
      templateUrl: 'views/user-details.html',
      restrict: 'E',
      scope: {
      	user: '=user'
      }
    };
  });
