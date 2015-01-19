'use strict';

/**
 * @ngdoc service
 * @name gitSwanApp.gitAPIService
 * @description
 * # gitAPIService
 * Service in the gitSwanApp.
 */
angular.module('gitSwanApp')
  .service('gitAPIService', ['$resource', function ($resource) {
      // AngularJS will instantiate a singleton by calling "new" on this function
  
    	var api = {};

  		return api;
  
    }]);
