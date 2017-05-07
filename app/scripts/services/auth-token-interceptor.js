'use strict';

/**
 * @ngdoc factory
 * @name pingPongClientApp.authTokenInterceptor
 * @description
 * # authTokenInterceptor
 * Service in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .factory('authTokenInterceptor', function ($q, $location, $timeout, CurrentSession) {
    return {
      responseError: function (rejection) {
        if (rejection.status === 401) {
          $timeout(function(){
            $location.path('/login');
            CurrentSession.clearSession();
          }, 100);
        }
        return $q.reject(rejection);
      }
    };
  });
