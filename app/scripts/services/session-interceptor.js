'use strict';

/**
 * @ngdoc config
 * @name pingPongClientApp.sessionInterceptor
 * @description
 * # sessionInterceptor
 * Service in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .factory('sessionInterceptor', function($location, $timeout, CurrentSession) {
    return {
      request: function (config) {
        var mainView = 'views/main.html',
            loginView = 'views/login/index.html',
            signUpView = 'views/signup/index.html';

        var nonAllowedViewsOnSession = [
          mainView, loginView, signUpView
        ];

        if (!/ping-pong-api.herokuapp.com/.test(config.url)) {
          if (nonAllowedViewsOnSession.indexOf(config.url) !== -1) {
            if (CurrentSession.authToken()) {
              $timeout(function(){
                $location.path('/leaderboard');
              }, 100);
            }
          }

          if (nonAllowedViewsOnSession.indexOf(config.url) === -1) {
            if (!CurrentSession.authToken()) {
              $timeout(function(){
                $location.path('/');
              }, 100);
            }
          }
        }
        return config;
      }
    };
  });
