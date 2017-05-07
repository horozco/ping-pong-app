'use strict';

/**
 * @ngdoc factory
 * @name pingPongClientApp.RegistrationService
 * @description
 * # RegistrationService
 * Factory in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .factory('RegistrationService', function( $q, $rootScope, PingPongResource,
                                            CurrentSession) {
    var RESOURCE = 'players';
    var resourceParam = {resource: RESOURCE};
    return {
      signup: function(attributes){
        var deferred = $q.defer();
        $rootScope.currentResource = RESOURCE;
        PingPongResource.create(resourceParam, attributes).$promise.then(function(data){
          CurrentSession.setSession(data);
          deferred.resolve(data);
        }).catch(function(error){
          CurrentSession.clearSession();
          deferred.reject(error);
        });
        return deferred.promise;
      }
    };
  });
