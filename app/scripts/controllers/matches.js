'use strict';

/**
 * @ngdoc function
 * @name pingPongClientApp.controller:MatchesController
 * @description
 * # MatchesController
 * Controller of the pingPongClientApp
 */

angular.module('pingPongClientApp')
  .controller('MatchesController', function ($state, $q, $rootScope, $timeout,
                                              SessionService, PlayerService,
                                              MatchesService, CurrentSession) {
    var ctrl = this;

    var loadPlayerNames = function(){
      var deferred = $q.defer();
      ctrl.playerNames = [];
      PlayerService.index().then(function(data) {
        ctrl.busy = false;
        ctrl.players = data;
        angular.forEach(ctrl.players, function(player){
          ctrl.playerNames.push({id: player.id, name: player.name});
        });
        deferred.resolve();
      }).catch(function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    };

    ctrl.loadPlayedMatches = function(){
      loadPlayerNames().then(function(){
        ctrl.error = false;
        ctrl.busy = true;
        PlayerService.show().then(function(data) {
          ctrl.busy = false;
          ctrl.playedMatches = data.played_matches;
        }).catch(function(error) {
          ctrl.error = true;
          ctrl.busy = false;
          ctrl.errorMessages = error.data ? error.data.messages : error.message;
        });
      }).catch(function(error) {
        ctrl.error = true;
        ctrl.busy = false;
        ctrl.errorMessages = error.data ? error.data.messages : error.message;
      });
    };

    ctrl.get_player_name = function(id){
      if (id === CurrentSession.currentPlayer().id) {
        return 'You';
      } else{
        return ctrl.playerNames.filter(function(obj){
          return obj.id === id;
        })[0].name;
      }
    };
  });
