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
  

  		var baseUrl = "https://api.github.com/";
    	var api = {};


    	api.searchRepositories = function(searchTerm, currentPage, itemsPerPage){
    		var path = 'search/repositories'

    		var params = {
    			q : searchTerm,
    			per_page : itemsPerPage, 
    			page : currentPage
    		}
    		return $resource(baseUrl + path).get(params).$promise;

    	}
    	api.searchIssues = function(userName, repoName){
    		var path = 'search/issues'

    		var params = {
    			q : 'repo:' + userName + "/"+  repoName
    		}
    		return $resource(baseUrl + path).get(params).$promise;
    	}

  		return api;
  
	}]);
