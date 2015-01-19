'use strict';

/**
 * @ngdoc overview
 * @name gitSwanApp
 * @description
 * # gitSwanApp
 *
 * Main module of the application.
 */
angular
  .module('gitSwanApp', [
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/repoDetail/:username/:repo', {
        templateUrl: 'views/repodetail.html',
        controller: 'RepodetailCtrl',
        resolve : {
          repoIssues: function($route, gitAPIService){

              return gitAPIService.searchIssues($route.current.params.username, $route.current.params.repo);
              // return ["test", "test"];
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
