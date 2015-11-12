'use strict';
/**Script generated By Robins Gupta */

angular.module('templateAdminApp')

.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', 'cfpLoadingBarProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider) {
  $locationProvider.html5Mode(false);
  cfpLoadingBarProvider.includeSpinner = false;

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',

    })


  }]); //config END

