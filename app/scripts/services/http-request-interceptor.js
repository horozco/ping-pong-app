'use strict';

/**
 * @ngdoc factory
 * @name pingPongClientApp.httpRequestInterceptor
 * @description
 * # httpRequestInterceptor
 * Factory in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .factory('httpRequestInterceptor', function(CurrentSession) {
    return {
      request: function (config) {
        if (CurrentSession.authToken()) {
          config.headers.Authorization = CurrentSession.authToken();
        }
        return config;
      }
    };
  });
