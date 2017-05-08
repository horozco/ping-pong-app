'use strict';

/**
 * @ngdoc function
 * @name pingPongClientApp.controller:LeaderboardController
 * @description
 * # LeaderboardController
 * Controller of the pingPongClientApp
 */

angular.module('pingPongClientApp')
  .controller('LeaderboardController', function ($state, $rootScope, $timeout,
                                                 SessionService, LeaderboardService) {
    var ctrl = this;

    var getLeaderBoard = function() {
      ctrl.error = false;
      ctrl.busy = true;
      LeaderboardService.fetch().then(function(data) {
        ctrl.busy = false;
        ctrl.leaderboards = data;
      }).catch(function(error) {
        ctrl.error = true;
        ctrl.busy = false;
        ctrl.errorMessages = error.data ? error.data.messages : error.message;
      });
    };

    var init = function(){
      getLeaderBoard();
    };

    init();

    ctrl.logout = function() {
      ctrl.error = false;
      ctrl.busy = true;
      SessionService.logout().then(function() {
        ctrl.busy = false;
        $state.go('main');
        $rootScope.successMessage = "Logged out successfully";
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
