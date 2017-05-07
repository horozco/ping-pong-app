'use strict';

/**
 * @ngdoc function
 * @name pingPongClientApp.controller:LeaderboardController
 * @description
 * # LeaderboardController
 * Controller of the pingPongClientApp
 */

angular.module('pingPongClientApp')
  .controller('LeaderboardController', function ($state, LeaderboardService) {
    var ctrl = this;

    var init = function(){
      ctrl.getLeaderBoard();
    };

    init();

    ctrl.getLeaderBoard = function() {
      ctrl.error = false;
      ctrl.busy = true;
      LeaderboardService.fetch({}).then(function(data) {
        ctrl.busy = false;
        ctrl.leaderboard = data;
      }).catch(function(error) {
        ctrl.error = true;
        ctrl.busy = false;
        ctrl.errorMessages = error.data.messages;
      });
    };
  });
