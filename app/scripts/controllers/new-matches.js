'use strict';

/**
 * @ngdoc function
 * @name pingPongClientApp.controller:MatchesController
 * @description
 * # MatchesController
 * Controller of the pingPongClientApp
 */

angular.module('pingPongClientApp')
  .controller('NewMatchesController', function ($state, $q, $rootScope, $timeout,
                                                MatchesService, PlayerService) {
    var ctrl = this;

    var loadPlayers = function(){
      PlayerService.playersInfo().then(function(info){
        ctrl.players = info;
      }).catch(function(errors) {
        ctrl.error = true;
        ctrl.busy = false;
        ctrl.errorMessages = errors.data;
      });
    };

    var init = function(){
      loadPlayers();
    };

    init();

    ctrl.createMatch = function(){
      ctrl.error = false;
      ctrl.busy = true;
      MatchesService.create({
        'winner_id': ctrl.winnerId,
        'loser_id': ctrl.loserId,
        'winner_score': ctrl.winnerScore,
        'loser_score': ctrl.loserScore
      }).then(function() {
        ctrl.busy = false;
        $state.go('leaderboard');
        $rootScope.successMessage = "Your game has been submited.";
        $timeout(function(){
          $rootScope.successMessage = null;
        },5000);
      }).catch(function(errors) {
        ctrl.error = true;
        ctrl.busy = false;
        ctrl.errorMessages = errors.data;
      });
    };
  });
