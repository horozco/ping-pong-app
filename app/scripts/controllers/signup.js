'use strict';

/**
 * @ngdoc function
 * @name pingPongClientApp.controller:SignUpController
 * @description
 * # SignUpController
 * Controller of the pingPongClientApp
 */

angular.module('pingPongClientApp')
  .controller('SignUpController', function ($state, $rootScope, $timeout,
                                            RegistrationService) {
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
        $rootScope.successMessage = "Your Account has been created.";
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
