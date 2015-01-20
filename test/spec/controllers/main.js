'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('gitSwanApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should store a list of repos on the scope', function(){
    expect(scope.searchResult).not.toBe(null);
  });

});
