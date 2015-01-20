'use strict';

/**
 * @ngdoc filter
 * @name gitSwanApp.filter:nvl
 * @function
 * @description
 * # nvl
 * Filter in the gitSwanApp.
 */
angular.module('gitSwanApp')
  .filter('nvl', function () {
    return function (input, val) {
      return input || val;
    };
  });
