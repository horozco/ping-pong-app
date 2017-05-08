'use strict';

/**
 * @ngdoc factory
 * @name pingPongClientApp.RegistrationService
 * @description
 * # RegistrationService
 * Factory in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .factory('LeaderboardService', function($rootScope, $q, PingPongResource) {
    var RESOURCE = 'leaderboards';
    var resourceParam = {resource: RESOURCE};
    return {
      fetch: function(){
        var deferred = $q.defer();
        $rootScope.currentResource = RESOURCE;
        PingPongResource.query(resourceParam, {}).$promise.then(function(data){
          deferred.resolve(data);
        }).catch(function(error){
          deferred.reject(error);
        });
        return deferred.promise;
      }
    };
  });
