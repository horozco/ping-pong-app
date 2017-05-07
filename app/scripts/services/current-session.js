'use strict';

/**
 * @ngdoc factory
 * @name pingPongClientApp.currentSession
 * @description
 * # currentSession
 * Service in the pingPongClientApp.
 */
angular.module('pingPongClientApp')
  .factory('currentSession', function ($cookies) {
    var unpermittedKeys = [''];
    var removeUnpermittedValues = function(object){
      angular.forEach(unpermittedKeys, function(key){
        delete object[key];
      });
    };
    return {
      setSession: function(data) {
        var currentPlayer = {};
        currentPlayer.id = data.id;
        if (data) {
          removeUnpermittedValues(data);
          angular.forEach(data, function(value, key){
            currentPlayer[key] = value;
          });
        }
        $cookies.putObject('currentPlayer', currentPlayer);
      },
      updateSession: function(newData) {
        removeUnpermittedValues(newData);
        var currentPlayer = $cookies.getObject('currentPlayer');
        angular.extend(currentPlayer, newData);
        $cookies.putObject('currentPlayer', currentPlayer);
      },
      clearSession: function() {
        $cookies.putObject('currentPlayer', {});
      },
      currentPlayer: function() {
        return $cookies.getObject('currentPlayer') || {};
      },
      authToken: function() {
        return  this.currentPlayer()['auth-token'];
      }
    };
  });
