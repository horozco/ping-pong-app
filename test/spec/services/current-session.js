'use strict';

describe('Service: currentSession', function () {

  // load the service's module
  beforeEach(module('pingPongClientApp'));

  // instantiate service
  var currentSession;
  beforeEach(inject(function (_currentSession_) {
    currentSession = _currentSession_;
  }));

  it('should do something', function () {
    expect(!!currentSession).toBe(true);
  });

});
