'use strict';

/**
 * @ngdoc function
 * @name pingPongClientApp.controller:SignUpController
 * @description
 * # SignUpController
 * Controller of the pingPongClientApp
 */

angular.module('pingPongClientApp')
  .controller('SignUpController', function ($state, RegistrationService) {
    var ctrl = this;

    var init = function(){
    };

    init();

    ctrl.signUp = function() {
      ctrl.error = false;
      ctrl.busy = true;
      RegistrationService.signup({
        'name': ctrl.name,
        'email': ctrl.email,
        'password': ctrl.password,
        'password_confirmation': ctrl.passwordConfirmation
      }).then(function() {
        ctrl.busy = false;
        $state.go('leaderboard');
      }).catch(function(error) {
        ctrl.error = true;
        ctrl.busy = false;
        ctrl.errorMessages = error.data.messages;
      });
    };
  });
