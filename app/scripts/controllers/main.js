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

	$scope.searchTerm = null;

	$scope.searchResults = [];

	$scope.errors = null;

	$scope.doSearch = function(){

		gitAPIService.respositories($scope.searchTerm).then(function(success){
			$scope.searchResults = success;
		}, function(error){
			$scope.error = error;
		});

	}

  }]);
