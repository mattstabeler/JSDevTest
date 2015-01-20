'use strict';

describe('Filter: nvl', function () {

  // load the filter's module
  beforeEach(module('gitSwanApp'));

  // initialize a new instance of the filter before each test
  var nvl;
  beforeEach(inject(function ($filter) {
    nvl = $filter('nvl');
  }));

  it('should return the input prefixed with "nvl filter:"', function () {
    var text = 'angularjs';
    expect(nvl(text)).toBe('nvl filter: ' + text);
  });

});
