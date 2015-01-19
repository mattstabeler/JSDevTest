'use strict';

describe('Service: gitAPIService', function () {

  // load the service's module
  beforeEach(module('gitSwanApp'));

  // instantiate service
  var gitAPIService;
  beforeEach(inject(function (_gitAPIService_) {
    gitAPIService = _gitAPIService_;
  }));

  it('should do something', function () {
    expect(!!gitAPIService).toBe(true);
  });

});
