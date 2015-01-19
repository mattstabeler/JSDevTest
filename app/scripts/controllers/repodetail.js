'use strict';

/**
 * @ngdoc function
 * @name gitSwanApp.controller:RepodetailCtrl
 * @description
 * # RepodetailCtrl
 * Controller of the gitSwanApp
 */
angular.module('gitSwanApp')
  .controller('RepodetailCtrl', ['$scope', 'repoIssues', function ($scope, repoIssues) {
  	
  	$scope.repoIssues = repoIssues;
  	
  }]);
