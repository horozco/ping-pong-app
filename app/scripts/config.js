'use strict';

/**
 * @ngdoc service
 * @name pingPongClientApp.Config
 * @description
 * # Config
 * Service in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .factory('Config', function () {
    angular.extend(this, {
      appName: 'Ping Pong Client',
      api: {
        protocol: 'http',
        server: 'localhost:3000/v1',
        inactivityLimit: 86400     // seconds
      },
      baseUrl: function() {
        return this.api.protocol + '://' + this.api.server;
      },
      resourceUrl: function() {
        return this.baseUrl() + '/:resource/:id/:method';
      }
    });
    return this;
  });
