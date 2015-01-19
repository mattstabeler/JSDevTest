'use strict';

/**
 * @ngdoc service
 * @name gitSwanApp.GitAPI
 * @description
 * # GitAPI
 * Factory in the gitSwanApp.
 */
angular.module('gitSwanApp')
  .factory('GitAPI', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
