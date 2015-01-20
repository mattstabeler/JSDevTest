'use strict';

/**
 * @ngdoc service
 * @name gitSwanApp.gitAPIService
 * @description
 * # gitAPIService
 * Service in the gitSwanApp.
 */
angular.module('gitSwanApp')
  	.service('gitAPIService', ['$q', '$resource', function ($q, $resource) {
      // AngularJS will instantiate a singleton by calling "new" on this function
  

  		var baseUrl = 'https://api.github.com/';
    	var api = {};


    	api.searchRepositories = function(searchTerm, currentPage, itemsPerPage){
    		var path = 'search/repositories';
			
			/*jshint camelcase: false */
    		var params = {
    			q : searchTerm,
    			per_page : itemsPerPage, 
    			page : currentPage
    		};

            console.log(params);
    		return $resource(baseUrl + path).get(params).$promise;

    	};
    	api.searchIssues = function(userName, repoName, page, perPage){
    		var path = 'search/issues';
            /*jshint camelcase: false */
    		var params = {
    			q : 'repo:' + userName + '/' +  repoName,
                per_page : perPage || 5,
                page : page || 1
    		};
    		return $resource(baseUrl + path).get(params).$promise;
    	};

  		return api;
  
	}]);
