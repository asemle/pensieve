angular.module('pensieve')
.controller('anapanaCtrl', function($scope, $state, $timeout) {
  $scope.showMsg1 = false;
  $scope.showMsg2 = false;
  $scope.showMsg3 = false;
  $scope.showMsg4 = false;
  $scope.showMsg5 = false;
  $scope.showMsg6 = false;

  $timeout(function () {
    $scope.showMsg1 = true;
  }, 0);

  $timeout(function () {
    $scope.showMsg1 = false;
    $scope.showMsg2 = true;
  }, 6000);

  $timeout(function () {
    $scope.showMsg2 = false;
    $scope.showMsg3 = true;
  }, 12000);

  $timeout(function () {
    $scope.showMsg3 = false;
    $scope.showMsg4 = true;
  }, 30000);

})
