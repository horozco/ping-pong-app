'use strict';

/**
 * @ngdoc config
 * @name pingPongClientApp.PingPongResource
 * @description
 * # PingPongResource
 * Service in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .factory('PingPongResource', function($resource, $rootScope, Config) {
    var transformRequest = function(data) {
      var request = {};
      var resourceKey = $rootScope.currentResource.substring(0, $rootScope.currentResource.length - 1);
      if (data && data.id) {
        request.id = data.id;
        delete data.id;
        request[resourceKey] = data;
      } else{
        request[resourceKey] = data;
      }
      return JSON.stringify(request);
    };

    var transformResponse = function(data) {
      if (data !== '') {
        var errors = JSON.parse(data).errors;
        if (errors) {
          try { return JSON.parse(errors.detail); }
          catch(e) { return errors.detail; }
        }
        return JSON.parse(data);
      }
      return JSON.parse(data);
    };

    return $resource(
      Config.resourceUrl(),
      {},
      {
        query: {
          method: 'GET',
          isArray: true,
          transformRequest: transformRequest,
          transformResponse: transformResponse
        },
        get: {
          method: 'GET',
          transformRequest: transformRequest,
          transformResponse: transformResponse
        },
        create: {
          method: 'POST',
          transformRequest: transformRequest,
          transformResponse: transformResponse
        },
        update: {
          method: 'PUT',
          transformRequest: transformRequest,
          transformResponse: transformResponse
        },
        destroy: {
          method: 'DELETE',
          transformRequest: transformRequest,
          transformResponse: transformResponse
        }
      }
    );
  });
