/**
 * mainApp module
 */
var mainApp = angular.module('mainApp', [ 'ngRoute', 'ngResource' ]);
 
mainApp.config([ '$routeProvider', function($routeProvider) {
 
    $routeProvider.when('/home', {
        templateUrl : 'home.html'
    })
    .when('/speakers', {
        templateUrl : 'speakers.html'
    })
    .when('/participants', {
        templateUrl : 'participants.html'
    })
    .when('/program', {
        templateUrl : 'program.html'
    })
    .when('/accommodation', {
        templateUrl : 'accommodation.html'
    })
    .when('/travel', {
        templateUrl : 'travel.html'
    })
    .when('/excursion', {
        templateUrl : 'excursion.html'
    })

    .otherwise({
        redirectTo : '/home'
    });
 
} ]);