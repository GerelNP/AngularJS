'use strict';

describe('Controller: Prueba1Ctrl', function () {

  // load the controller's module
  beforeEach(module('jesusCondeApp'));

  var Prueba1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Prueba1Ctrl = $controller('Prueba1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Prueba1Ctrl.awesomeThings.length).toBe(3);
  });
});
