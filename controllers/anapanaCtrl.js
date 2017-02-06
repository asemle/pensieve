angular.module('pensieve')
.controller('anapanaCtrl', function($scope, $state, $timeout, audioService) {
  audioService.playCrickets();
  $scope.showMsg1 = false;
  $scope.showMsg2 = false;
  $scope.showMsg3 = false;
  $scope.showMsg4 = false;
  $scope.showMsg5 = false;
  $scope.showMsg6 = false;

  $scope.balloon = function(e) {
    $timeout.cancel(promise);
    x = e.clientX,
    y = e.clientY;
    var balloonHolder = document.getElementById('balloonHolder');   //Set tooltip position according to mouse position
    balloonHolder.style.opacity = 0.8;
   balloonHolder.style.top = (y + 40) + 'px';
   balloonHolder.style.left = (x + 40) + 'px';
   var promise = $timeout(function () {
       balloonHolder.style.opacity = 0;
     }, 4000);
  }

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
    audioService.stopCrickets();
    $state.go('stream')
  }, 300000);



})
