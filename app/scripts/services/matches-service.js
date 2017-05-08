'use strict';

/**
 * @ngdoc factory
 * @name pingPongClientApp.RegistrationService
 * @description
 * # RegistrationService
 * Factory in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .factory('MatchesService', function($rootScope, $q, PingPongResource) {
    var RESOURCE = 'matches';
    var resourceParam = {resource: RESOURCE};
    return {
      create: function(params){
        var deferred = $q.defer();
        $rootScope.currentResource = RESOURCE;
        PingPongResource.create(resourceParam, params).$promise.then(function(data){
          deferred.resolve(data);
        }).catch(function(error){
          deferred.reject(error);
        });
        return deferred.promise;
      }
    };
  });
