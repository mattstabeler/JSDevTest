'use strict';

describe('Controller: RepodetailCtrl', function () {

  // load the controller's module
  beforeEach(module('gitSwanApp'));

  var RepodetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepodetailCtrl = $controller('RepodetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of issues to the scope', function () {
    expect(scope.repoIssues).not.toBe(null);
  });
});
