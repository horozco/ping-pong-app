'use strict';

/**
 * @ngdoc function
 * @name pingPongClientApp.controller:MainController
 * @description
 * # MainController
 * Controller of the pingPongClientApp
 */
angular.module('pingPongClientApp')
  .controller('MainController', function ($state, SessionService) {
    var ctrl = this;

    ctrl.logout = function() {
      ctrl.error = false;
      ctrl.busy = true;
      SessionService.logout().then(function() {
        ctrl.busy = false;
        $state.go('main');
      }).catch(function(errors) {
        ctrl.error = true;
        ctrl.busy = false;
        ctrl.errorMessages = errors.data;
      });
    };
  });
