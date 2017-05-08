'use strict';

/**
 * @ngdoc function
 * @name pingPongClientApp.controller:MatchesController
 * @description
 * # MatchesController
 * Controller of the pingPongClientApp
 */

angular.module('pingPongClientApp')
  .controller('MatchesController', function ($state, $rootScope, $timeout,
                                              SessionService, PlayerService,
                                              MatchesService, CurrentSession) {
    var ctrl = this;

    ctrl.loadPlayedMatches = function(){
      PlayerService.playersInfo().then(function(info){
        ctrl.error = false;
        ctrl.busy = true;
        ctrl.playerNames = info;
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
