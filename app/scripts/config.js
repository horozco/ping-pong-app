'use strict';

/**
 * @ngdoc service
 * @name pingPongClientApp.config
 * @description
 * # config
 * Service in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .service('config', function () {
    angular.extend(this, {
      appName: 'Ping Pong Client',
      api: {
        protocol: 'http',
        server: 'localhost:3000/api',
        inactivityLimit: 86400     // seconds
      },
      baseUrl: function() {
        return this.api.protocol + '://' + this.api.server;
      },
      resourceUrl: function() {
        return this.baseUrl() + '/v1/:resource/:id/:method';
      }
    });
    return this;
  });
