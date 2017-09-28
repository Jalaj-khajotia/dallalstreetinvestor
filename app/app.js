'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.a',
	'myApp.version',
	'jkAngularCarousel',
	'ngMaterial',
	'ng-animate',
	'directive',
	'slickCarousel'
]).
	config(['$locationProvider', '$routeProvider', '$disqusProvider', '$scope', function ($locationProvider,
		$routeProvider, $disqusProvider, $scope) {
		$locationProvider.hashPrefix('!');

		$routeProvider
			.otherwise({
				redirectTo: '/home'
			});
	}]);