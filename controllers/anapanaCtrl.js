angular.module('pensieve')
.controller('anapanaCtrl', function($scope, $state, $timeout) {
  $scope.showMsg1 = false;
  $scope.showMsg2 = false;
  $scope.showMsg3 = false;
  $scope.showMsg4 = false;
  $scope.showMsg5 = false;
  $scope.showMsg6 = false;
  var gong = new Audio('media/46062__reinsamba__gong.wav')

var messages = function() {
  setTimeout(function () {
    $scope.showMsg1 = true;
  }, 0);
  setTimeout(function () {
    $scope.showMsg1 = false;
    $scope.showMsg2 = true;
  }, 6000);
  setTimeout(function () {
    $scope.showMsg2 = false;
    $scope.showMsg3 = true;
  }, 9000);
  setTimeout(function () {
    $scope.showMsg3 = false;
    $scope.showMsg4 = true;
  }, 24000);
  setTimeout(function () {
    $scope.showMsg4 = false;
    $scope.showMsg5 = true;
  }, 180000);
  setTimeout(function () {
    $scope.showMsg5 = false;
    $scope.showMsg6 = true;
  }, 240000);
  setTimeout(function() {
    $scope.showMsg6 = false;
    $scope.crickets.pause();
    gong.play();
    $state.go('stream')
  }, 300000);
}
messages();

})
