(function(){
	'use strict'

angular.module('app', ['ngRoute', 'ngCookies']).config(config);

	function config($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'views/login.html',
			controller: 'usersController'
		})
		.when('/dashboard', {
			templateUrl: 'views/dashboard.html',
			controller: 'usersController'
		})
		.when('/topic', {
			templateUrl: 'views/topic.html',
			controller: 'usersController'
		})
		.when('/dashboard', {
			templateUrl: 'views/dashboard.html',
			controller: 'usersController'
		})
		.otherwise('/', {
			redirectTo: "/"
		});
	}

})()