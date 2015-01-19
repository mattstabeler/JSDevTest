'use strict';

describe('Service: GitAPI', function () {

  // load the service's module
  beforeEach(module('gitSwanApp'));

  // instantiate service
  var GitAPI;
  beforeEach(inject(function (_GitAPI_) {
    GitAPI = _GitAPI_;
  }));

  it('should do something', function () {
    expect(!!GitAPI).toBe(true);
  });

});
