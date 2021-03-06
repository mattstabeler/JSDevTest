'use strict';

/**
 * @ngdoc function
 * @name gitSwanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitSwanApp
 */
angular.module('gitSwanApp')
  .controller('MainCtrl', ['$scope', '$location', 'gitAPIService',  function ($scope, $location, gitAPIService) {

	$scope.searchTerm = 'bootstrap';

	$scope.selectedRepo = null;

	$scope.searchResults = null;
	
	$scope.loading = false;

	$scope.errors = null;

	$scope.itemsPerPage = 5;
	$scope.totalItems = 0;

	$scope.currentPage = 1;

	$scope.showAll = false;

	var clearRepo = function(){
		$scope.selectedRepo = null;
	};


	var doSearch = function(){
		$scope.loading = true;
		gitAPIService.searchRepositories($scope.searchTerm, $scope.currentPage, $scope.itemsPerPage).then(function(success){
			$scope.loading = false;
			/*jshint camelcase: false */
			$scope.totalItems = success.total_count;
			$scope.searchResults = success.items;
		}, function(error){
			$scope.loading = false;
			$scope.error = error.data;
		});

	};

	$scope.doSearch = doSearch;

	$scope.pageChanged = function(){
		doSearch();
	};

	$scope.showRepo = function(repo){

		if($scope.selectedRepo && repo.id === $scope.selectedRepo.id){
			clearRepo();
		}else{
			$scope.selectedRepo = repo;
		}
	};

	$scope.moreDetails = function(repo){
		$location.path('/repoDetail/' + repo.owner.login + '/' + repo.name);
	};

	$scope.clearRepo = clearRepo;

  }]);
