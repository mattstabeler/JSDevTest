"use strict";angular.module("gitSwanApp",["ngMessages","ngResource","ngRoute","ngSanitize","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/repoDetail/:username/:repo",{templateUrl:"views/repodetail.html",controller:"RepodetailCtrl",resolve:{repoIssues:["$route","gitAPIService",function(a,b){return b.searchIssues(a.current.params.username,a.current.params.repo)}]}}).otherwise({redirectTo:"/"})}]),angular.module("gitSwanApp").controller("MainCtrl",["$scope","$location","gitAPIService",function(a,b,c){a.searchTerm="bootstrap",a.selectedRepo=null,a.searchResults=null,a.loading=!1,a.errors=null,a.itemsPerPage=5,a.totalItems=0,a.currentPage=1,a.showAll=!1;var d=function(){a.selectedRepo=null},e=function(){a.loading=!0,c.searchRepositories(a.searchTerm,a.currentPage,a.itemsPerPage).then(function(b){a.loading=!1,a.totalItems=b.total_count,a.searchResults=b.items},function(b){a.loading=!1,a.error=b.data})};a.doSearch=e,a.pageChanged=function(){e()},a.showRepo=function(b){a.selectedRepo&&b.id===a.selectedRepo.id?d():a.selectedRepo=b},a.moreDetails=function(a){b.path("/repoDetail/"+a.owner.login+"/"+a.name)},a.clearRepo=d}]),angular.module("gitSwanApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("gitSwanApp").service("gitAPIService",["$q","$resource",function(a,b){var c="https://api.github.com/",d={};return d.searchRepositories=function(a,d,e){var f="search/repositories",g={q:a,per_page:e,page:d};return console.log(g),b(c+f).get(g).$promise},d.searchIssues=function(a,d,e,f){var g="search/issues",h={q:"repo:"+a+"/"+d,per_page:f||5,page:e||1};return b(c+g).get(h).$promise},d}]),angular.module("gitSwanApp").controller("RepodetailCtrl",["$scope","$route","gitAPIService","repoIssues",function(a,b,c,d){a.repoIssues=d.items,a.totalItems=d.total_count,a.currentPage=1,a.itemsPerPage=5;var e=b.current.params.repo,f=b.current.params.username;a.pageChanged=function(){c.searchIssues(f,e,a.currentPage,a.itemsPerPage).then(function(b){a.repoIssues=b.items,a.totalItems=b.total_count})}}]),angular.module("gitSwanApp").directive("userDetails",function(){return{templateUrl:"views/user-details.html",restrict:"E",scope:{user:"=user"}}}),angular.module("gitSwanApp").filter("nvl",function(){return function(a,b){return a||b}});