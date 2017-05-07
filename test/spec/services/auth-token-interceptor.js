'use strict';

describe('Service: authTokenInterceptor', function () {

  // load the service's module
  beforeEach(module('pingPongClientApp'));

  // instantiate service
  var authTokenInterceptor;
  beforeEach(inject(function (_authTokenInterceptor_) {
    authTokenInterceptor = _authTokenInterceptor_;
  }));

  it('should do something', function () {
    expect(!!authTokenInterceptor).toBe(true);
  });

});
