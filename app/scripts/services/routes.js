'use strict';

/**
 * @ngdoc config
 * @name pingPongClientApp.routes
 * @description
 * # routes
 * Service in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider) {
    
    $urlRouterProvider.otherwise('/');
    cfpLoadingBarProvider.includeSpinner = false;
    $httpProvider.interceptors.push('authTokenInterceptor',
                                    'httpRequestInterceptor',
                                    'sessionInterceptor'
                                   );

    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/index.html',
      controller: 'LoginController',
      controllerAs: 'ctrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'views/signup/index.html',
      controller: 'SignUpController',
      controllerAs: 'ctrl'
    })
    .state('leaderboard', {
      url: '/leaderboard',
      templateUrl: 'views/leaderboard/index.html',
      controller: 'LeaderboardController',
      controllerAs: 'ctrl'
    })
    .state('matches', {
      url: '/matches',
      abstract: true,
      templateUrl: 'views/matches/index.html'
    })
    .state('matches.new', {
      url: '/new/:id',
      templateUrl: 'views/matches/new.html',
      controller: 'NewMatchesController',
      controllerAs: 'ctrl'
    })
    .state('matches.played', {
      url: '/played',
      templateUrl: 'views/matches/played.html',
      controller: 'MatchesController',
      controllerAs: 'ctrl'
    });
  });
