'use strict';

/**
 * @ngdoc function
 * @name gitSwanApp.controller:RepodetailCtrl
 * @description
 * # RepodetailCtrl
 * Controller of the gitSwanApp
 */
angular.module('gitSwanApp')
  .controller('RepodetailCtrl', ['$scope', '$route', 'gitAPIService', 'repoIssues',  function ($scope, $route, gitAPIService, repoIssues) {
  	
	/*jshint camelcase: false */
  	$scope.repoIssues = repoIssues.items;
  	$scope.totalItems = repoIssues.total_count;
  	$scope.currentPage = 1;
  	$scope.itemsPerPage = 5;

  	var repoName = $route.current.params.repo;
  	var userName = $route.current.params.username;

  	$scope.pageChanged = function(){
  		// do search
  		gitAPIService.searchIssues(userName, repoName, $scope.currentPage, $scope.itemsPerPage).then(function(success){
			/*jshint camelcase: false */
  			$scope.repoIssues = success.items;
  			$scope.totalItems = success.total_count;
  		});
  	};
  	
  }]);
