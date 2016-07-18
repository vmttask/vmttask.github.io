var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
    })
    .when('/contrib', {
        templateUrl: 'views/contrib.html',
        controller: 'contribController'
    })
    .otherwise({ 
        redirectTo: '/' 
    }); 
});