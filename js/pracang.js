var myApp = angular.module('app9', []);

it('should change state', function() {
  var value1 = element(by.binding('checkboxModel.value1'));
  var value2 = element(by.binding('checkboxModel.value2'));
  var value3 = element(by.binding('checkboxMode1.value3'));

  expect(value1.getText()).toContain('true');
  expect(value2.getText()).toContain('true');
  expect(value3.getText()).toContain('true');

  element(by.model('checkboxModel.value1')).click();
  element(by.model('checkboxModel.value2')).click();
  element(by.model('checkboxModel.value3')).click();

  expect(value1.getText()).toContain('false');
  expect(value2.getText()).toContain('false');
  expect(value3.getText()).toContain('false');
});
