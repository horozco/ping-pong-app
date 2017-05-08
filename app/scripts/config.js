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
        protocol: 'https',
        server: 'ping-pong-api.herokuapp.com/',
        inactivityLimit: 86400     // seconds
      },
      baseUrl: function() {
        return this.api.protocol + '://' + this.api.server;
      },
      resourceUrl: function() {
        return this.baseUrl() + 'v1/:resource/:id/:method';
      }
    });
    return this;
  });
