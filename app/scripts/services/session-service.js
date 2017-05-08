'use strict';

/**
 * @ngdoc config
 * @name pingPongClientApp.SessionService
 * @description
 * # SessionService
 * Service in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .factory('SessionService', function( $q, $rootScope, PingPongResource, CurrentSession ) {
    var RESOURCE = 'sessions';
    var resourceParam = {resource: RESOURCE};

    return {
      login: function(credentials){
        var deferred = $q.defer();
        $rootScope.currentResource = RESOURCE;
        PingPongResource.create(resourceParam, credentials).$promise.then(function(data){
          CurrentSession.setSession(data);
          deferred.resolve(data);
        }).catch(function(error){
          CurrentSession.clearSession();
          deferred.reject(error);
        });
        return deferred.promise;
      },
      logout: function(){
        var deferred = $q.defer();
        $rootScope.currentResource = RESOURCE;
        PingPongResource.destroy(resourceParam).$promise.then(function(){
          CurrentSession.clearSession();
          deferred.resolve();
        }).catch(function(error){
          deferred.reject(error);
        });
        return deferred.promise;
      }
    };
  });
