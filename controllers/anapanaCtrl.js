angular.module('pensieve')
.controller('anapanaCtrl', function($scope, $state, $timeout, audioService) {
  $scope.showMsg1 = false;
  $scope.showMsg2 = false;
  $scope.showMsg3 = false;
  $scope.showMsg4 = false;
  $scope.showMsg5 = false;
  $scope.showMsg6 = false;



$timeout(function () {
    $scope.showMsg1 = true;
    audioService.playCrickets();
  }, 0);
$timeout(function () {
    $scope.showMsg1 = false;
    $scope.showMsg2 = true;
  }, 6000);
$timeout(function () {
    $scope.showMsg2 = false;
    $scope.showMsg3 = true;
  }, 9000);
$timeout(function () {
    $scope.showMsg3 = false;
    $scope.showMsg4 = true;
  }, 24000);
$timeout(function () {
    $scope.showMsg4 = false;
    $scope.showMsg5 = true;
  }, 180000);
$timeout(function () {
    $scope.showMsg5 = false;
    $scope.showMsg6 = true;
  }, 240000);
$timeout(function() {
    $scope.showMsg6 = false;
    audioService.playGong();
    audioService.stopCrickets();
    $state.go('stream')
  }, 300000);



})
