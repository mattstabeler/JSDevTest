'use strict';

/**
 * @ngdoc function
 * @name gitSwanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitSwanApp
 */
angular.module('gitSwanApp')
  .controller('MainCtrl', ['$scope', 'gitAPIService', function ($scope, gitAPIService) {

	$scope.searchTerm = 'bootstrap';

	$scope.selectedRepo = null;

	$scope.searchResults = [];
	
	$scope.loading = false;

	$scope.errors = null;

	$scope.itemsPerPage = 10;
	$scope.currentPage = 1;

	var clearRepo = function(){
		$scope.selectedRepo = null;
	}

	$scope.doSearch = function(){

		$scope.loading = true;
		gitAPIService.searchRepositories($scope.searchTerm, $scope.currentPage, $scope.itemsPerPage).then(function(success){
			$scope.loading = false;
			$scope.searchResults = success.items;
		}, function(error){
			$scope.loading = false;
			$scope.error = error;
		});

	}

	$scope.showRepo = function(repo){

		if($scope.selectedRepo && repo.id == $scope.selectedRepo.id){
			clearRepo();
		}else{
			$scope.selectedRepo = repo;
		}
	}

	$scope.clearRepo = clearRepo;

  }]);
