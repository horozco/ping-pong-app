'use strict';

/**
 * @ngdoc function
 * @name pingPongClientApp.controller:LoginController
 * @description
 * # LoginController
 * Controller of the pingPongClientApp
 */

angular.module('pingPongClientApp')
  .controller('LoginController', function ($state, SessionService) {
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
        $state.go('products.feed');
      }).catch(function(error) {
        if (error.status === 403) {
          $state.go('activation', {fromLogin: true});
        }
        ctrl.error = true;
        ctrl.busy = false;
        ctrl.errorMessages = error.data.messages;
      });
    };
  });