'use strict';

/**
 * @ngdoc config
 * @name pingPongClientApp.PlayerService
 * @description
 * # PlayerService
 * Service in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .factory('PlayerService', function( $q, $rootScope, PingPongResource, CurrentSession ) {
    var RESOURCE = 'players';
    var resourceParam = {resource: RESOURCE};

    return {
      index: function(){
        var deferred = $q.defer();
        $rootScope.currentResource = RESOURCE;
        PingPongResource.query(resourceParam, {}).$promise.then(function(data){
          deferred.resolve(data);
        }).catch(function(error){
          deferred.reject(error);
        });
        return deferred.promise;
      },

      show: function(){
        var deferred = $q.defer();
        $rootScope.currentResource = RESOURCE;
        var id = CurrentSession.currentPlayer().id;
        PingPongResource.get(angular.extend({id: id}, resourceParam)).$promise.then(function(data){
          deferred.resolve(data);
        }).catch(function(error){
          deferred.reject(error);
        });
        return deferred.promise;
      }
    };
  });
