'use strict';

describe('Directive: userDetails', function () {

  // load the directive's module
  beforeEach(module('gitSwanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<user-details></user-details>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the userDetails directive');
  }));
});
