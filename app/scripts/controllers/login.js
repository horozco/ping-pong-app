'use strict';

/**
 * @ngdoc function
 * @name pingPongClientApp.controller:LoginController
 * @description
 * # LoginController
 * Controller of the pingPongClientApp
 */

angular.module('pingPongClientApp')
  .controller('LoginController', function ($state, $rootScope, $timeout,
                                           SessionService) {
    var ctrl = this;
    var init = function(){
      ctrl.error = false;
    };

    init();

    ctrl.signIn = function() {
      ctrl.error = false;
      ctrl.busy = true;
      SessionService.login({
        'email': ctrl.email,
        'password': ctrl.password
      }).then(function() {
        ctrl.busy = false;
        $state.go('leaderboard');
        $rootScope.successMessage = "Signed in successfully";
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
